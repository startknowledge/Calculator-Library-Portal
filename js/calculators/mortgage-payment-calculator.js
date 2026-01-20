export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mortgage Payment Calculator<br>EMI = P × r × (1+r)^n / ((1+r)^n − 1)</h3>

    <label>Loan Amount (₹)</label>
    <input id="loan" value="3000000">

    <label>Interest Rate (%)</label>
    <input id="rate" value="8">

    <label>Loan Tenure (Years)</label>
    <input id="years" value="20">

    <button onclick="calcMortgage()">Calculate</button>
    <p id="mortResult"></p>
  `;

  window.calcMortgage = function () {
    let P = +loan.value;
    let r = (+rate.value / 100) / 12;
    let n = +years.value * 12;

    let emi = (P * r * Math.pow(1 + r, n)) /
              (Math.pow(1 + r, n) - 1);

    mortResult.innerHTML =
      `<b>Monthly EMI:</b> ₹${emi.toFixed(2)}`;
  };

  return div;
}
