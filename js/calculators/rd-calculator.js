export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Recurring Deposit (RD) Calculator</h3>

    <label>Monthly Deposit (₹)</label>
    <input type="number" id="rdP" placeholder="e.g. 2000">

    <label>Annual Interest Rate (%)</label>
    <input type="number" id="rdR" placeholder="e.g. 7.5">

    <label>Time Period (Years)</label>
    <input type="number" id="rdT" placeholder="e.g. 5">

    <button id="rdBtn">Calculate</button>

    <div id="rdResult"></div>

    <hr>

    <h4>Explanation</h4>
    <p>
      The Recurring Deposit (RD) Calculator helps you estimate the maturity amount,
      total deposits, and interest earned when you invest a fixed amount every
      month at a given interest rate for a specific period.
    </p>

    <h4>Formula Used</h4>
    <p>
      Maturity Amount = P × [ ( (1 + r)<sup>n</sup> − 1 ) / r ]<br>
      Where:<br>
      P = Monthly Deposit<br>
      r = Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)<br>
      n = Total Number of Months
    </p>

    <h4>How to Use</h4>
    <p>
      1. Enter the monthly deposit amount.<br>
      2. Enter the annual interest rate.<br>
      3. Enter the investment duration in years.<br>
      4. Click on Calculate to view results.
    </p>

    <h4>Example</h4>
    <p>
      Monthly Deposit: ₹2,000<br>
      Interest Rate: 7.5% per annum<br>
      Time: 5 years<br><br>
      Total Deposit: ₹1,20,000<br>
      Maturity Amount: Approx. ₹1,42,000
    </p>

    <h4>Note</h4>
    <p>
      RD interest is compounded monthly. Actual returns may vary slightly depending
      on the bank or financial institution.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an estimated value for informational purposes only.
      Please consult your bank or financial advisor for exact RD returns.
    </p>
  `;

  div.querySelector("#rdBtn").onclick = () => {
    let P = parseFloat(document.getElementById("rdP").value);
    let annualRate = parseFloat(document.getElementById("rdR").value);
    let years = parseFloat(document.getElementById("rdT").value);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years)) {
      document.getElementById("rdResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let r = annualRate / 100 / 12;
    let n = years * 12;

    let maturity = P * ((Math.pow(1 + r, n) - 1) / r);
    let totalDeposit = P * n;
    let interest = maturity - totalDeposit;

    document.getElementById("rdResult").innerHTML = `
      <h4>Results</h4>
      <b>Total Deposit:</b> ₹${totalDeposit.toFixed(2)}<br>
      <b>Interest Earned:</b> ₹${interest.toFixed(2)}<br>
      <b>Maturity Amount:</b> ₹${maturity.toFixed(2)}
    `;
  };

  return div;
}
