export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Property EMI Calculator</h3>

    <label>Loan Amount (₹)</label>
    <input id="loan" value="4000000">

    <label>Interest Rate (%)</label>
    <input id="rate" value="9">

    <label>Loan Tenure (Years)</label>
    <input id="yrs" value="20">

    <button onclick="calcPEMI()">Calculate</button>
    <p id="emiResult"></p>
  `;

  window.calcPEMI = function () {
    let P = +document.getElementById("loan").value;
    let r = +document.getElementById("rate").value / 12 / 100;
    let n = +document.getElementById("yrs").value * 12;

    let emi = (P * r * Math.pow(1 + r, n)) /
              (Math.pow(1 + r, n) - 1);

    document.getElementById("emiResult").innerHTML =
      `<b>Monthly EMI:</b> ₹${emi.toFixed(0)}`;
  };

  return div;
}
