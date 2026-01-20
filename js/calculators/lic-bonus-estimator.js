export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>LIC Bonus Estimator</h3>

    <label>Sum Assured (₹)</label>
    <input type="number" id="licSum">

    <label>Bonus Rate (₹ per 1000)</label>
    <input type="number" id="licRate">

    <label>Policy Term (Years)</label>
    <input type="number" id="licYears">

    <button onclick="calcLICBonus()">Calculate</button>
    <p id="licResult"></p>
  `;

  window.calcLICBonus = function () {
    let sum = parseFloat(document.getElementById("licSum").value);
    let rate = parseFloat(document.getElementById("licRate").value);
    let years = parseFloat(document.getElementById("licYears").value);

    let bonus = (sum / 1000) * rate * years;

    document.getElementById("licResult").innerHTML =
      `<b>Estimated Bonus:</b> ₹${bonus.toFixed(2)}`;
  };

  return div;
}
