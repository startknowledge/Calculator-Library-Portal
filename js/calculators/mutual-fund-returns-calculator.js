export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mutual Fund Returns Calculator</h3>

    <div class="form-group">
      <label for="mfInvestment">Investment Amount (₹)</label>
      <input type="number" id="mfInvestment">
    </div>

    <div class="form-group">
      <label for="mfRate">Expected Annual Return (%)</label>
      <input type="number" id="mfRate">
    </div>

    <div class="form-group">
      <label for="mfYears">Investment Period (Years)</label>
      <input type="number" id="mfYears">
    </div>

    <button onclick="calculateMFUI()">Calculate</button>
    <p id="mfResult"></p>
  `;

  window.calculateMFUI = function () {
    let p = document.getElementById("mfInvestment").value;
    let r = document.getElementById("mfRate").value;
    let y = document.getElementById("mfYears").value;

    document.getElementById("mfResult").innerText =
      "Future Value: ₹" + calculateMF(p, r, y);
  };

  return div;
}

function calculateMF(principal, rate, years) {
  principal = parseFloat(principal);
  rate = parseFloat(rate) / 100;
  years = parseFloat(years);

  return (principal * Math.pow(1 + rate, years)).toFixed(2);
}
