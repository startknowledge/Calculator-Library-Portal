export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Student Loan EMI Calculator</h3>

      <label>Loan Amount (₹)</label>
      <input type="number" id="loanAmount" placeholder="e.g. 500000">

      <label>Annual Interest Rate (%)</label>
      <input type="number" id="interestRate" placeholder="e.g. 8.5">

      <label>Loan Tenure (Years)</label>
      <input type="number" id="loanYears" placeholder="e.g. 5">

      <button onclick="calcStudentEMI()">Calculate</button>
      <p id="emiResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator computes the monthly EMI for a student loan based on principal, annual interest rate, and loan tenure.</p>
      <p><b>Formula:</b> EMI = [P × r × (1+r)^n] ÷ [(1+r)^n – 1]</p>
      <p><b>Where:</b> P = Loan Amount, r = Monthly Interest Rate, n = Total Number of Months</p>
      <p><b>Example:</b> Loan ₹5,00,000, Rate 8.5% per year, Tenure 5 years → EMI ≈ ₹10,278</p>
      <p>Calculator simplifies loan planning and budgeting.</p>
      <p>Accuracy depends on correct numeric input.</p>
      <p><b>Note:</b> Ensure all values are positive and interest rate is in % per year.</p>
      <p><b>Disclaimer:</b> For reference only; actual EMI may vary depending on lender, fees, or prepayment options.</p>
      <br>
    </div>
  `;

  window.calcStudentEMI = function () {
    let P = +document.getElementById("loanAmount").value;
    let annualRate = +document.getElementById("interestRate").value;
    let years = +document.getElementById("loanYears").value;

    if (!P || !annualRate || !years || P <= 0 || annualRate <= 0 || years <= 0) {
      document.getElementById("emiResult").innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    let r = annualRate / 100 / 12;   // monthly interest
    let n = years * 12;              // total months

    let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById("emiResult").innerHTML =
      `<b>Monthly EMI:</b> ₹${emi.toFixed(2)}`;
  };

  return div;
}
