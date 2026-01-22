export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Cement Bags = (Concrete Volume × Cement Ratio) ÷ 0.035<br>(1 cement bag ≈ 0.035 m³)</h3>

    <label>Concrete Volume (m³)</label>
    <input id="vol" value="1">

    <label>Cement Ratio (e.g. 1 for 1:2:4)</label>
    <input id="ratio" value="1">

    <button onclick="calcCement()">Calculate</button>
    <p id="cementResult"></p><br>
    <p><u>Explanation about Cement Quantity Calculator</u> :</p>
    <p>This calculator estimates the number of cement bags required for a given volume of concrete based on the specified cement ratio. The formula used is Cement Bags = (Concrete Volume × Cement Ratio) ÷ 0.035, where 0.035 m³ is the approximate volume of one bag of cement.</p>
    <p>For example, if you have a concrete volume of 1 m³ and a cement ratio of 1, the calculator will compute the required cement bags accordingly.</p>
    <p>Disclaimer: This tool provides an estimate and should not be used as a substitute for professional construction advice.</p>
    <br>
  `;

  window.calcCement = function () {
    let vol = +vol.value;
    let ratio = +ratio.value;

    let bags = (vol * ratio) / 0.035;

    cementResult.innerHTML =
      `<b>Cement Required:</b> ${bags.toFixed(2)} Bags`;
  };

  return div;
}
