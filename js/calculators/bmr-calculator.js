export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Weight (kg)</label>
    <input id="bmrWeight">

    <label>Height (cm)</label>
    <input id="bmrHeight">

    <label>Age (years)</label>
    <input id="bmrAge">

    <button onclick="calcBMR()">Calculate</button>
    <p id="bmrResult"></p><br>
    <p><u>Explanation about Basal Metabolic Rate (BMR)</u> :</p>
    <p>Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic physiological functions while at rest, such as breathing, circulation, and cell production. It represents the minimum energy expenditure required to keep your body functioning when you are not engaging in any physical activity.</p>
    <p>The BMR can be estimated using various formulas, with the Mifflin-St Jeor Equation being one of the most commonly used
    for its accuracy. The formula for calculating BMR using the Mifflin-St Jeor Equation for men is as follows:</p>
    <p><b>BMR = 10 × weight (kg) + 6.25 × height (cm) - 5 × age (years) + 5</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>weight</b> is the body weight in kilograms.</li>
      <li><b>height</b> is the body height in centimeters.</li>
      <li><b>age</b> is the age in years.</li>
    </ul>
    <p>For example, if a man weighs 70 kg, is 175 cm tall, and is 25 years old, his BMR would be calculated as follows:</p>
    <p>BMR = 10 × 70 + 6.25 × 175 - 5 × 25 + 5 = 1668.75 kcal/day</p>
    <p>This means that this individual would need approximately 1669 calories per day to maintain basic bodily functions while at rest.</p> 
    <p>It is important to note that BMR is just one component of your total daily energy expenditure (TDEE), which also includes calories burned through physical activity and digestion. To maintain, lose, or gain weight, you need to consider your TDEE in relation to your caloric intake.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of BMR. For specific health assessments, please consult a qualified healthcare professional.</p>
    <br>

  `;

  window.calcBMR = function () {
    let bmr = 10*bmrWeight.value + 6.25*bmrHeight.value - 5*bmrAge.value + 5;
    bmrResult.innerHTML = `<b>BMR:</b> ${bmr.toFixed(0)} kcal/day`;
  };

  return div;
}
