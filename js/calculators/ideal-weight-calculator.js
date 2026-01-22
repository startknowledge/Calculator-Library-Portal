export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Height (cm)</label>
    <input id="idealHeight">

    <button onclick="calcIdeal()">Calculate</button>
    <p id="idealResult"></p>
    <br>
    <p>The Ideal Weight Calculator helps you determine your ideal body weight based on your height. By entering your height in centimeters, users can quickly calculate their ideal weight in kilograms.</p>
    <p>This calculator is useful for individuals who want to maintain a healthy weight and are looking for a quick reference to their ideal weight based on their height.</p>
    <p>Ensure that the height input is accurate to get a reliable ideal weight estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your height in centimeters in the "Height" field. Click the "Calculate" button to see the estimated ideal weight displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Height (cm):</b> Your height in centimeters.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Ideal Weight (kg):</b> The estimated ideal weight based on your height.</li>
    </ul>
    <p><b>Note:</b> Ensure that the height input is accurate to get a reliable ideal weight estimate.</p>
    <p><b>Example:</b> For a height of 170 cm, the ideal weight would be 70 kg.</p>
    <p><b>Formula:</b> Ideal Weight = Height (cm) - 100</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual ideal weights may vary based on additional factors such as age, gender, and body composition.</p>
    <br>
  `;

  window.calcIdeal = function () {
    let ideal = idealHeight.value - 100;
    idealResult.innerHTML = `<b>Ideal Weight:</b> ${ideal} kg`;
  };

  return div;
}
