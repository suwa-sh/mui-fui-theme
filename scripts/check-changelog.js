#!/usr/bin/env node
/**
 * preversion hook: CHANGELOG.md に新バージョンのエントリがあるか確認
 *
 * npm version 実行時に自動で呼ばれる。
 * CHANGELOG.md に [Unreleased] セクションがあれば OK。
 * なければエラーを出してバージョン更新を中断する。
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const changelogPath = resolve(__dirname, '../CHANGELOG.md');

try {
  const content = readFileSync(changelogPath, 'utf-8');

  // [Unreleased] セクションがあるかチェック
  if (!content.includes('## [Unreleased]')) {
    console.error('\x1b[31m%s\x1b[0m', '');
    console.error('\x1b[31m%s\x1b[0m', '  ERROR: CHANGELOG.md に [Unreleased] セクションがありません');
    console.error('\x1b[31m%s\x1b[0m', '');
    console.error('\x1b[33m%s\x1b[0m', '  バージョンを上げる前に CHANGELOG.md を更新してください:');
    console.error('\x1b[33m%s\x1b[0m', '');
    console.error('\x1b[33m%s\x1b[0m', '  ## [Unreleased]');
    console.error('\x1b[33m%s\x1b[0m', '');
    console.error('\x1b[33m%s\x1b[0m', '  ### Added');
    console.error('\x1b[33m%s\x1b[0m', '  - 新機能の説明');
    console.error('\x1b[33m%s\x1b[0m', '');
    process.exit(1);
  }

  console.log('\x1b[32m%s\x1b[0m', '✓ CHANGELOG.md に [Unreleased] セクションを確認');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', `ERROR: CHANGELOG.md の読み込みに失敗: ${error.message}`);
  process.exit(1);
}
