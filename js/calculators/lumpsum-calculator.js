export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Lumpsum Calculator</h3>

    <div class="form-group">
      <label for="lsAmount">Investment Amount (₹)</label>
      <input type="number" id="lsAmount">
    </div>

    <div class="form-group">
      <label for="lsRate">Annual Rate of Return (%)</label>
      <input type="number" id="lsRate">
    </div>

    <div class="form-group">
      <label for="lsYears">Investment Duration (Years)</label>
      <input type="number" id="lsYears">
    </div>

    <button onclick="calculateLumpsumUI()">Calculate</button>

    <p id="lsResult"></p>
  `;

  window.calculateLumpsumUI = function () {
    let principal = document.getElementById("lsAmount").value;
    let rate = document.getElementById("lsRate").value;
    let years = document.getElementById("lsYears").value;

    let result = calculateLumpsum(principal, rate, years);

    document.getElementById("lsResult").innerText =
      "Maturity Amount: ₹" + result;
  };

  return div;
}

// 🔹 Formula function
function calculateLumpsum(principal, rate, years) {
  principal = parseFloat(principal);
  rate = parseFloat(rate) / 100;
  years = parseFloat(years);

  let amount = principal * Math.pow(1 + rate, years);
  return amount.toFixed(2);
}
