export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>PPF (Public Provident Fund) Calculator</h3>
    <p>Calculator is a tool to estimate maturity, total deposit, and interest earned for your PPF investment.</p>

    <label>Yearly Deposit (₹):</label>
    <input type="number" id="ppfP" placeholder="Enter yearly deposit">

    <label>Interest Rate (%):</label>
    <input type="number" id="ppfR" value="7.1" placeholder="Enter interest rate">

    <label>Time (Years):</label>
    <input type="number" id="ppfT" value="15" placeholder="Enter investment period">

    <button id="ppfBtn">Calculate</button>
    <h3 id="ppfResult"></h3>

    <h4>Explanation:</h4>
    <p>This calculator helps you determine the amount you will accumulate in your PPF account over time based on your yearly deposit, interest rate, and investment period.</p>

    <h4>Formula:</h4>
    <p>Maturity Amount = P × ((1 + R)^T − 1) / R</p>
    <p>Where:</p>
    <ul>
      <li>P = Yearly Deposit</li>
      <li>R = Annual Interest Rate (in decimal)</li>
      <li>T = Time in Years</li>
    </ul>

    <h4>How to Use:</h4>
    <p>Enter the yearly deposit amount, annual interest rate, and the number of years you plan to invest. Click "Calculate" to see the results.</p>

    <h4>Note:</h4>
    <p>It is important to enter positive numeric values for accurate calculations.</p>

    <h4>Disclaimer:</h4>
    <p>Results are estimates for planning purposes only. Actual maturity may vary based on government interest rate revisions.</p>
  `;

  div.querySelector("#ppfBtn").onclick = () => {
    const P = parseFloat(document.getElementById("ppfP").value);
    const R = parseFloat(document.getElementById("ppfR").value) / 100;
    const T = parseFloat(document.getElementById("ppfT").value);

    if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0 || R <= 0 || T <= 0) {
      document.getElementById("ppfResult").innerHTML = "Please enter valid positive values!";
      return;
    }

    const maturity = P * ((Math.pow(1 + R, T) - 1) / R);
    const depositTotal = P * T;
    const interest = maturity - depositTotal;

    document.getElementById("ppfResult").innerHTML = `
      <b>Total Deposit:</b> ₹${depositTotal.toFixed(2)}<br>
      <b>Interest Earned:</b> ₹${interest.toFixed(2)}<br>
      <b>Maturity Amount:</b> ₹${maturity.toFixed(2)}
    `;
  };

  return div;
}
