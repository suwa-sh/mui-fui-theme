#!/usr/bin/env node
/**
 * version hook: CHANGELOG.md の [Unreleased] を新バージョンに置き換え、
 * 新しい [Unreleased] セクションを追加する
 *
 * npm version 実行時に package.json 更新後、コミット前に呼ばれる
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const changelogPath = resolve(__dirname, '../CHANGELOG.md');
const packagePath = resolve(__dirname, '../package.json');

try {
  // package.json から新バージョンを取得
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));
  const newVersion = pkg.version;

  // 今日の日付を取得
  const today = new Date().toISOString().split('T')[0];

  // CHANGELOG.md を読み込み
  let content = readFileSync(changelogPath, 'utf-8');

  // [Unreleased] を新バージョンに置き換え
  content = content.replace(
    /## \[Unreleased\]/,
    `## [Unreleased]\n\n## [${newVersion}] - ${today}`
  );

  // 書き込み
  writeFileSync(changelogPath, content);

  console.log('\x1b[32m%s\x1b[0m', `✓ CHANGELOG.md を更新: [Unreleased] → [${newVersion}] - ${today}`);
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', `ERROR: CHANGELOG.md の更新に失敗: ${error.message}`);
  process.exit(1);
}
