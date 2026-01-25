export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>SWP (Systematic Withdrawal Plan) Calculator</h3>

    <div class="form-group">
      <label for="swpAmount">Initial Investment (₹)</label>
      <input type="number" id="swpAmount" placeholder="e.g., 100000">
    </div>

    <div class="form-group">
      <label for="swpWithdrawal">Monthly Withdrawal (₹)</label>
      <input type="number" id="swpWithdrawal" placeholder="e.g., 5000">
    </div>

    <div class="form-group">
      <label for="swpRate">Annual Rate of Return (%)</label>
      <input type="number" id="swpRate" placeholder="e.g., 8">
    </div>

    <div class="form-group">
      <label for="swpYears">Time Period (Years)</label>
      <input type="number" id="swpYears" placeholder="e.g., 5">
    </div>

    <button id="calcSWPBtn">Calculate</button>
    <p id="swpResult"></p>
    <br>

    <p><b>Explanation:</b> This calculator estimates the remaining amount in your investment after making regular monthly withdrawals under a SWP.</p>
    <p><b>Formula:</b> Remaining Amount = Initial × (1 + r/12)^(n) − Σ Withdrawals</p>
    <p><b>Example:</b> Invest ₹1,00,000, withdraw ₹5,000 per month, 8% annual return, 5 years → Remaining ≈ ₹55,000</p>
    <p>Calculator helps plan regular withdrawals without exhausting your funds prematurely.</p>
    <p>Accuracy depends on correct numeric input and expected rate of return.</p>
    <p><b>Note:</b> Interest is compounded monthly; withdrawals are deducted monthly.</p>
    <p><b>Disclaimer:</b> This calculator is for educational purposes only. Actual returns may vary based on market conditions.</p>
  `;

  div.querySelector("#calcSWPBtn").onclick = () => {
    const initial = parseFloat(document.getElementById("swpAmount").value);
    const withdrawal = parseFloat(document.getElementById("swpWithdrawal").value);
    const rate = parseFloat(document.getElementById("swpRate").value);
    const years = parseFloat(document.getElementById("swpYears").value);

    if (isNaN(initial) || isNaN(withdrawal) || isNaN(rate) || isNaN(years) || initial <= 0 || withdrawal < 0 || years <= 0) {
      document.getElementById("swpResult").innerHTML = "❌ Please enter valid numbers";
      return;
    }

    const remaining = calculateSWP(initial, withdrawal, rate, years);
    document.getElementById("swpResult").innerHTML = `<b>Remaining Amount:</b> ₹${remaining}`;
  };

  return div;
}

function calculateSWP(initialAmount, withdrawal, rate, years) {
  let monthlyRate = rate / 100 / 12;
  let months = years * 12;
  let amount = initialAmount;

  for (let i = 0; i < months; i++) {
    amount = amount * (1 + monthlyRate) - withdrawal;
    if (amount < 0) return "0.00";
  }

  return amount.toFixed(2);
}
