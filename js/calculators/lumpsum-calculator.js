export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Lumpsum Investment Calculator</h3>

    <p>
      This calculator helps estimate the future value of a one-time
      (lumpsum) investment based on expected annual returns and duration.
    </p>

    <div class="form-group">
      <label for="lsAmount">Investment Amount (₹)</label>
      <input type="number" id="lsAmount" min="0" placeholder="e.g. 100000">
    </div>

    <div class="form-group">
      <label for="lsRate">Annual Rate of Return (%)</label>
      <input type="number" id="lsRate" min="0" step="0.01" placeholder="e.g. 12">
    </div>

    <div class="form-group">
      <label for="lsYears">Investment Duration (Years)</label>
      <input type="number" id="lsYears" min="1" placeholder="e.g. 10">
    </div>

    <button onclick="calculateLumpsumUI()">Calculate</button>

    <p id="lsResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>
      Maturity Amount = P × (1 + r)<sup>n</sup><br>
      where P = Principal, r = Annual rate, n = Years
    </p>

    <p><b>Example:</b></p>
    <p>
      Investment = ₹1,00,000<br>
      Rate = 12% per year<br>
      Duration = 10 years<br>
      <b>Maturity Amount ≈ ₹3,10,585</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for mutual funds, fixed deposits,
      long-term wealth planning, and goal-based investing.
    </p>

    <p><b>Disclaimer:</b>
      This calculator provides an estimated return.
      Actual returns may vary depending on market conditions.
    </p>
  `;

  window.calculateLumpsumUI = function () {
    const principal = parseFloat(document.getElementById("lsAmount").value);
    const rate = parseFloat(document.getElementById("lsRate").value);
    const years = parseFloat(document.getElementById("lsYears").value);

    if (
      isNaN(principal) || isNaN(rate) || isNaN(years) ||
      principal <= 0 || rate < 0 || years <= 0
    ) {
      document.getElementById("lsResult").innerHTML =
        "<b>Please enter valid input values.</b>";
      return;
    }

    const result = calculateLumpsum(principal, rate, years);

    document.getElementById("lsResult").innerHTML =
      `<b>Maturity Amount:</b> ₹${Number(result).toLocaleString()}`;
  };

  return div;
}

// 🔹 Formula function
function calculateLumpsum(principal, rate, years) {
  rate = rate / 100;
  const amount = principal * Math.pow(1 + rate, years);
  return amount.toFixed(2);
}
