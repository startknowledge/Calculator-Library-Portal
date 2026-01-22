export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>CASA (Current Account Savings Account) Ratio Calculator</h3>

    <div class="form-group">
      <label>CASA Deposits (₹)</label>
      <input type="number" id="casa">
    </div>

    <div class="form-group">
      <label>Total Deposits (₹)</label>
      <input type="number" id="total">
    </div>

    <button onclick="calcCASA()">Calculate</button>
    <p id="casaResult"></p><br>
    <p><u>Explanation about CASA Ratio</u> :</p>
    <p>CASA Ratio (Current Account Savings Account Ratio) is a key financial metric used by banks to assess the proportion of deposits held in current and savings accounts relative to the total deposits. A higher CASA ratio indicates that a bank has a larger share of low-cost deposits, which can enhance its profitability.</p>
    <p>The formula to calculate CASA Ratio is:</p>
    <p><strong>CASA Ratio = (CASA Deposits / Total Deposits) × 100</strong></p>
      const casa = div.querySelector("#casa");
      const total = div.querySelector("#total");
      const casaResult = div.querySelector("#casaResult");
    <p>Where:</p>
    <ul>
      <li><strong>CASA Deposits</strong> are the total funds held in current and savings accounts.</li>
      <li><strong>Total Deposits</strong> include all types of deposits held by the bank.</li>
    </ul>
    <p>For example, if a bank has ₹500 crores in CASA deposits and ₹2000 crores in total deposits, the CASA ratio would be (500/2000) × 100 = 25%. This indicates that 25% of the bank's total deposits are in low-cost CASA accounts.</p>
  const casa = div.querySelector("#casa");
  const total = div.querySelector("#total");
  const casaResult = div.querySelector("#casaResult");
  <p>A higher CASA ratio is generally favorable for banks as it reduces the cost of funds and improves net interest margins. Banks often strive to increase their CASA ratio through various strategies, such as offering attractive interest rates on savings accounts and promoting current account services to businesses.</p>
  <p>In summary, the CASA ratio is a crucial indicator of a bank's financial health and efficiency in managing its deposit base.</p>
  <p>For more financial calculators, visit our <a href="/calculators">Calculators Page</a>.</p>
  <p>Disclaimer: This calculator provides an estimate and should not be used for official financial decisions.</p>
  <br>
  `;

  window.calcCASA = () => {
    casaResult.innerText =
      "CASA Ratio: " +
      ((casa.value / total.value) * 100).toFixed(2) +
      " %";
  };

  return div;
};
