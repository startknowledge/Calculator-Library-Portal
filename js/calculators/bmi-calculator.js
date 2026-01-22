export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Weight (kg)</label>
    <input type="number" id="bmiWeight">

    <label>Height (cm)</label>
    <input type="number" id="bmiHeight">

    <button onclick="calcBMI()">Calculate</button>
    <p id="bmiResult"></p><br>
    <p><u>Explanation about Body Mass Index (BMI)</u> :</p>
    <p>Body Mass Index (BMI) is a numerical value derived from an individual's weight and height. It is commonly used as a screening tool to categorize individuals into different weight categories, which can help assess potential health risks associated with being underweight, normal weight, overweight, or obese.</p>
    <p>The formula to calculate BMI is:</p>
    <p><b>BMI = weight (kg) / (height (m))²</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>weight</b> is the body weight in kilograms.</li>
      <li><b>height</b> is the body height in meters.</li>
    </ul>
    <p>For example, if a person weighs 70 kg and is 175 cm (1.75 m) tall, their BMI would be calculated as follows:</p>
    <p>BMI = 70 / (1.75)² = 22.86</p>
    <p>Based on the BMI value, individuals can be classified into the following categories:</p>
    <ul>
      <li>Underweight: BMI &lt; 18.5</li>
      <li>Normal weight: 18.5 ≤ BMI &lt; 24.9</li>
      <li>Overweight: 25 ≤ BMI &lt; 29.9</li>
      <li>Obesity: BMI ≥ 30</li>
    </ul>
    <p>It is important to note that while BMI is a useful screening tool, it does not directly measure body fat percentage or distribution, and other factors such as muscle mass
    and overall health should also be considered when assessing an individual's health status.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of BMI. For specific health assessments, please consult a qualified healthcare professional.</p>
    <br>
  `;

  window.calcBMI = function () {
    let w = +bmiWeight.value;
    let h = +bmiHeight.value / 100;
    let bmi = w / (h * h);

    bmiResult.innerHTML = `<b>BMI:</b> ${bmi.toFixed(2)}`;
  };

  return div;
}
