export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>SIP Calculator</h3>

    <input id="sipAmount" placeholder="Monthly Investment">
    <input id="sipRate" placeholder="Annual Rate (%)">
    <input id="sipYears" placeholder="Years">
    <button onclick="calculate()">Calculate</button>

    <p id="sipResult"></p>
  `;

  window.calculate = function () {
    let p = document.getElementById("sipAmount").value;
    let r = document.getElementById("sipRate").value;
    let y = document.getElementById("sipYears").value;

    let result = calculateSIP(p, r, y);
    document.getElementById("sipResult").innerText =
      "Future Value: ₹" + result;
  };

  return div;
}

function calculateSIP(monthlyInvestment, rate, years) {
  monthlyInvestment = parseFloat(monthlyInvestment);
  rate = parseFloat(rate) / 100 / 12;
  years = parseFloat(years);

  const months = years * 12;

  let futureValue =
    monthlyInvestment *
    ((Math.pow(1 + rate, months) - 1) / rate) *
    (1 + rate);

  return futureValue.toFixed(2);
}
