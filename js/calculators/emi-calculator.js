export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="form-group">
      <label>Loan Amount (₹)</label>
      <input type="number" id="emiAmount">
    </div>

    <div class="form-group">
      <label>Annual Interest Rate (%)</label>
      <input type="number" id="emiRate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="emiYears">
    </div>

    <button onclick="calculateEMIUI()">Calculate</button>
    <p id="emiResult"></p>
    <br>
    <p><u>Explanation about EMI Calculator</u> :</p>
    <p>The EMI (Equated Monthly Installment) Calculator is a financial tool designed to help borrowers estimate their monthly loan repayments. By inputting the loan amount, annual interest rate, and loan tenure, users can quickly calculate the EMI they would need to pay each month over the course of the loan.</p>
    <p>The EMI is calculated using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is the principal loan amount, R is the monthly interest rate, and N is the number of monthly installments. This formula takes into account both the principal and the interest, providing a comprehensive view of the monthly payment obligations.</p>
    <p>To use the calculator, simply enter the total loan amount, the annual interest rate offered by the lender, and the duration of the loan in years. After clicking the
    "Calculate" button, the tool will compute and display the monthly EMI amount.</p>
    <p>This calculator is particularly useful for individuals planning their finances, whether for personal loans, home loans, or car loans. By understanding the EMI, borrowers can better plan their budgets and ensure they can meet their repayment obligations without financial strain.</p>
    <p>In summary, the EMI Calculator is a valuable resource for anyone considering a loan, providing clarity on monthly payment requirements and aiding in effective financial planning.</p>
    <p><b>Note:</b> This calculator provides an estimate of the EMI based on the inputs provided and assumes a fixed interest rate throughout the loan tenure.</p>
    <p>For personalized advice and detailed loan options, consider consulting with a financial advisor or loan officer.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a financial advisor for critical financial decisions.</p>
    <br>
  `;

  window.calculateEMIUI = function () {
    let p = emiAmount.value;
    let r = emiRate.value;
    let y = emiYears.value;

    emiResult.innerText = "Monthly EMI: ₹" + calculateEMI(p, r, y);
  };

  return div;
}

function calculateEMI(principal, rate, years) {
  principal = parseFloat(principal);
  let r = parseFloat(rate) / 12 / 100;
  let n = years * 12;

  let emi =
    (principal * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1);

  return emi.toFixed(2);
}
