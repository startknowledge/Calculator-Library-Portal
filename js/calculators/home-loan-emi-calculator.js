export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="form-group">
      <label>Home Loan Amount (₹)</label>
      <input type="number" id="homeAmount">
    </div>

    <div class="form-group">
      <label>Interest Rate (%)</label>
      <input type="number" id="homeRate">
    </div>

    <div class="form-group">
      <label>Loan Tenure (Years)</label>
      <input type="number" id="homeYears">
    </div>

    <button onclick="calculateHomeEMI()">Calculate</button>
    <p id="homeResult"></p>
    <br>
    <p>The Home Loan EMI Calculator helps you estimate your monthly Equated Monthly Installment (EMI) for a home loan based on the loan amount, interest rate, and tenure. By entering these values, users can quickly calculate their monthly payment obligations.</p>
    <p>This calculator is useful for prospective homebuyers and current homeowners who want to understand their loan repayment structure. It provides a quick way to evaluate how much they need to budget for monthly loan payments.</p>
    <p>Ensure that the loan amount, interest rate, and tenure inputs are accurate to get a reliable EMI estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your desired home loan amount in the "Home Loan Amount" field, the annual interest rate in the "Interest Rate" field, and the loan tenure in years in the "Loan Tenure" field. Click the "Calculate" button to see the estimated monthly EMI displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Home Loan Amount (₹):</b> The total amount of the home loan.</li>
      <li><b>Interest Rate (%):</b> The annual interest rate for the loan.</li>
      <li><b>Loan Tenure (Years):</b> The duration of the loan in years.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Monthly EMI (₹):</b> The estimated monthly payment for the home loan based on the provided inputs.</li>
    </ul>
    <p><b>Note:</b> Ensure that the loan amount, interest rate, and tenure inputs are accurate to get a reliable EMI estimate.</p>
    <p><b>Example:</b> For a home loan amount of ₹50,00,000, an interest rate of 7.5%, and a tenure of 20 years, the monthly EMI would be approximately ₹40,276.03.</p>
    <p><b>Formula:</b> EMI = [P × R × (1+R)^N] / [(1+R)^N-1], where P = Principal loan amount, R = Monthly interest rate, N = Number of monthly installments.</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual EMI amounts may vary based on additional factors such as processing fees, taxes, and lender policies.</p>
    <br>
  `;

  window.calculateHomeEMI = function () {
    homeResult.innerText =
      "Monthly EMI: ₹" +
      calculateEMI(homeAmount.value, homeRate.value, homeYears.value);
  };

  return div;
}

function calculateEMI(p, r, y) {
  r = r / 12 / 100;
  let n = y * 12;
  return (
    (p * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1)
  ).toFixed(2);
}
