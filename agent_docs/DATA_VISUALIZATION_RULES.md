# Data Visualization Rules
Source: https://note.com/suwash/n/na14cb20f786a?magazine_key=m789133997cdb
Source: https://note.com/suwash/n/n9facb1c8d8dd?magazine_key=m789133997cdb

## Fundamentals of Data Visualization
### 1. Purpose of Data Visualization
**The purpose is communication**
* Data visualization is performed to convey and discuss information.
* Context (background, situation, shared understanding) is a prerequisite for successful communication.
* The essential purpose is to convey facts unknown to the audience, prompting and changing their judgment and actions.
* Visualization is like "grammar and pronunciation" in English conversation (a means); what matters most is the "content (accurate information)."

### 2. "Comparison" Gives Meaning to Numerical Information
Good or bad judgments cannot be made from a single number alone. Stories emerge through multifaceted comparisons.
* **Comparison perspectives**:
    * Competitor comparison (e.g., lower than industry peers)
    * Historical comparison (e.g., higher than the previous year)
    * Market comparison (e.g., lower than market growth rate)

### 3. Types of Data
Data is broadly classified into "Attribute Data" and "Metric Data."

#### Attribute Data
* **Nominal Data**: Names of people or things (e.g., gender, fruit names)
* **Geographic Data**: Data tied to coordinates (e.g., prefectures, location information)
* **Date Data**: Year/month/day (processing differs depending on whether treated as time series or aggregation item)
* **Ordinal Data**: Data where order has meaning (e.g., medal colors, satisfaction levels)

#### Metric Data
* **Interval Scale Data**: Intervals have meaning but no absolute zero (e.g., temperature, IQ)
* **Ratio Scale Data**: Both intervals and values have meaning, with an absolute zero (e.g., sales, height, weight)

### 4. Cognitive Load
* **Working Memory Limits**: Humans can retain 4-5 pieces of information short-term for about 10 seconds.
* **Appropriate Load**: Avoid information overload; moderate cognitive load leads to optimal learning efficiency. Care must be taken not to present too much information at once.

### 5. Data-Ink Ratio
* **Concept**: Improve information transmission efficiency by removing unnecessary decorations (noise) from charts and emphasizing the data itself (signal).
* **Formula**: Data-ink Ratio = Data-ink / (Data-ink + Non-Data-ink)
    * *Data-ink*: Parts representing the data itself, such as bars in a bar chart.
    * *Non-Data-ink*: Parts representing non-data elements, such as backgrounds, borders, and grids.

### 6. Visual Attributes
Visual characteristics used to make data stand out (refer to original article for detailed list; generally refers to position, length, direction, color, shape, etc.).

### 7. Gestalt Principles
Characteristics of how humans perceive shapes (grouping and completion).
* **Proximity**: Objects close in distance are perceived as a group.
* **Similarity**: Objects with the same color or shape are perceived as a group.
* **Continuity**: Continuous, unbroken lines are perceived.
* **Closure**: Tendency to perceive closed figures.
* **Common Fate**: Objects moving or changing together are perceived as a group.
* **Area**: In overlapping figures, the smaller area is more easily perceived as the figure.
* **Symmetry**: Symmetrical figures are perceived as a group.

## Data Visualization Steps and Approaches

Data visualization purposes are classified into three uses based on "who visualizes and who gains insights," with steps defined for each use.

1. **Gaining insights for yourself**
2. **Conveying your insights to others**
3. **Enabling others to gain insights**

---

### 1. Gaining Insights for Yourself
**Overview**: An exploratory approach to formulate and verify hypotheses through data visualization and substantiate facts. Iterate between data and visualization.

#### Steps
1. **Choose charts based on perspective**
   Select charts based on the following perspectives for understanding data.
   * **Comparison**
   * **Composition**
   * **Relationship**
   * **Distribution**
   * **Trend**: A perspective specifically focusing on time series.

2. **Generate ideas from data representation methods**
   Four expression frameworks to clarify the meaning of insights.
   * **% Change**: Check growth rates or slowdowns.
   * **Variance**: Visualize year-over-year or target differences.
   * **Calculated Metric**: Use division metrics like sales per visit.
   * **Added Context**: Add comparison targets (previous year data, etc.).

3. **Organize data correlations**
   Deepen insights by classifying relationships between data into five types for hypothesis verification.
   * **Direct Cause**: One directly causes the other.
   * **Indirect Cause**: Multiple events have indirect causal relationships.
   * **Interaction**: Each can be both cause and effect for the other.
   * **Spurious Correlation**: A separate factor influences both.
   * **Coincidental Correlation**: Correlation appears between unrelated events.

---

### 2. Conveying Your Insights to Others
**Overview**: Explain facts and discoveries in an understandable way to specific others (presentation).

#### Key Concept: Data Storytelling
A method of organizing insights from data into a story and connecting them to action. Has higher memory retention and persuasiveness than mere data presentation (based on Stanford and Carnegie Mellon case studies).

**Three Components**:
* **Narrative**: Clearly convey the essence of matters.
* **Data**: Objective facts.
* **Visualization**: Help grasp data trends.
※ Combining these generates changes in audience motivation and behavior.

#### Steps
1. **Choose data representation methods**: Select appropriate methods from the same four techniques used for self-insight (change rate, variance, etc.).
2. **Choose charts that facilitate comparison**: Consider the strength of visual attributes and adopt charts that allow accurate comparison with other data.
3. **Adjust charts according to the message**: Change chart format to emphasize the signal you want to convey (e.g., separate stacked bar charts to show breakdown trends rather than overall trends).
4. **Remove unnecessary elements**: Reduce noise by "deleting, aggregating, or splitting" unimportant data.
5. **Draw attention to important items**: Clarify key points through color intensity variation and adding summary text.
6. **Format data for clarity**: Arrange data order appropriately, replace comparison targets with familiar items, etc.
7. **Build trust in numbers**: Set appropriate baselines (axis starting points, etc.) and avoid misleading expressions.

### 3. Enabling Others to Gain Insights
**Overview**: An approach to build and operate systems (such as dashboards) where others regularly check data and gain insights. Unlike one-time analyses or presentations, this focuses on continuous operation and driving behavioral change in users.

#### Steps and Key Concepts

1. **Plan operational design and improvement cycles**
   * **Work backward from downstream processes**: Before building the system, design by working backward from "what actions will users take" based on actual field processes.
   * **Support actions**: Organize necessary "insights" from the perspective of whether users can execute required actions or avoid unnecessary ones.

2. **Define user context (5W1H)**
   * Specify and incorporate users' situations into the design.
     * **Who**: Executives or field workers?
     * **When**: Every morning, during meetings, or real-time?
     * **Where**: Desktop PC, smartphone while moving, or large monitor?
     * **Why**: For situational awareness or decision-making?
     * **What**: Which metrics (KPIs) need to be viewed?
     * **How**: What operations and frequency for viewing?

3. **Layer information to prevent confusion**
   * **From overview to detail**: First show the overall picture (summary), then allow progression to details (drill-down) when interested.
   * **Information resolution**: Present information at appropriate granularity based on user literacy and purpose.
