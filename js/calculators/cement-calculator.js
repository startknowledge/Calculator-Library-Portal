export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <h3>Cement Calculator<br><br>Cement (bags) = (Concrete Volume × Cement Ratio × 1440) / 50</h3>
    <label>Concrete Volume (m³)</label>
    <input type="number" id="vol">

    <label>Cement Ratio</label>
    <input type="number" id="ratio">

    <button onclick="calcCement()">Calculate</button>
    <p id="cementResult"></p><br>
    <p><u>Explanation about Cement Calculator</u> :</p>
    <p>This calculator estimates the number of cement bags required for a given volume of concrete based on the specified cement ratio. The formula used is Cement (bags) = (Concrete Volume × Cement Ratio × 1440) / 50, where 1440 is the density of cement in kg/m³ and 50 is the weight of one bag of cement in kg.</p>
    <p>For example, if you have a concrete volume of 2 m³ and a cement ratio of 0.15, the calculator will compute the required cement bags accordingly.</p>
    <p>Disclaimer: This tool provides an estimate and should not be used as a substitute for professional construction advice.</p>
    <br>
  `;

  window.calcCement = function () {
    let v = +vol.value;
    let r = +ratio.value;

    let bags = (v * r * 1440) / 50;

    cementResult.innerHTML =
      `<b>Cement Required:</b> ${bags.toFixed(2)} bags`;
  };

  return div;
}
