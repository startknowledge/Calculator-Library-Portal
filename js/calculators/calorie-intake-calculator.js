export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>BMR</label>
    <input id="calBmr">

    <label>Activity Factor (1.2 – 1.9)</label>
    <input id="activity">

    <button onclick="calcCalories()">Calculate</button>
    <p id="calResult"></p><br>
    <p><u>Explanation about Calorie Intake</u> :</p>
    <p>Calorie Intake refers to the total number of calories a person needs to consume in a day to maintain their current weight, support bodily functions, and fuel physical activity. The required calorie intake varies based on factors such as age, gender, weight, height, and activity level.</p>
    <p>One common method to estimate daily calorie needs is by calculating the Basal Metabolic Rate (BMR) and then multiplying it by an activity factor that reflects the individual's level of physical activity.</p>
    <p>The formula to estimate Daily Calorie Intake is:</p>
    <p><b>Daily Calorie Intake = BMR × Activity Factor</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>BMR (Basal Metabolic Rate)</b> is the number of calories your body needs to perform basic functions at rest.</li>
      <li><b>Activity Factor</b> is a multiplier that accounts for your level of physical activity, ranging from sedentary (1.2) to very active (1.9).</li>
    </ul>
    <p>For example, if a person has a BMR of 1,500 calories and an activity factor of 1.5 (moderately active), their estimated daily calorie intake would be calculated as follows:</p>
    <p>Daily Calorie Intake = 1,500 × 1.5 = 2,250 calories</p>
    <p>This means the person would need to consume approximately 2,250 calories per day to maintain their current weight given their activity level.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of Calorie Intake. For specific dietary assessments, please consult a qualified nutritionist or healthcare professional.</p>
    <br>
  `;

  window.calcCalories = function () {
    let calories = +calBmr.value * +activity.value;
    calResult.innerHTML = `<b>Daily Calories:</b> ${calories.toFixed(0)}`;
  };

  return div;
}
