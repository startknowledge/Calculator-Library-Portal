export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Weight (kg)</label>
    <input type="number" id="bmiWeight">

    <label>Height (cm)</label>
    <input type="number" id="bmiHeight">

    <button onclick="calcBMI()">Calculate</button>
    <p id="bmiResult"></p>
  `;

  window.calcBMI = function () {
    let w = +bmiWeight.value;
    let h = +bmiHeight.value / 100;
    let bmi = w / (h * h);

    bmiResult.innerHTML = `<b>BMI:</b> ${bmi.toFixed(2)}`;
  };

  return div;
}
