export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Principal Amount (₹):</label>
    <input type="number" id="ciP">

    <label>Rate (% per year):</label>
    <input type="number" id="ciR">

    <label>Time (Years):</label>
    <input type="number" id="ciT">

    <label>Compounding:</label>
    <select id="ciN">
      <option value="1">Yearly</option>
      <option value="2">Half-Yearly</option>
      <option value="4">Quarterly</option>
      <option value="12">Monthly</option>
    </select>

    <button id="ciBtn">Calculate</button>
    <h3 id="ciResult"></h3>
    <br>
    <p><u>Explanation about Compound Interest Calculator</u> :</p>
    <p>The Compound Interest Calculator is a financial tool designed to help individuals and businesses calculate the compound interest earned on an investment or paid on a loan over a specified period of time. Compound interest is the interest calculated on the initial principal amount as well as on the accumulated interest from previous periods, leading to exponential growth of the investment or debt.</p>
    <p>To use the calculator, users need to input the principal amount (the initial sum of money), the annual interest rate (as a percentage), the time period in years, and the frequency of compounding (e.g., yearly, half-yearly, quarterly, or monthly). The calculator then computes the total amount accrued and the compound interest earned or owed based on these inputs.</p>
    <p>This calculator is particularly useful for investors looking to understand how their investments will grow over time, as well as for borrowers who want to see how much interest they will pay on loans. By providing a clear breakdown of compound interest
    calculations, this tool aids in financial planning and decision-making.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed investment analysis.</p>
    <br>
  `;

  div.querySelector("#ciBtn").onclick = () => {
    let P = parseFloat(document.getElementById("ciP").value);
    let R = parseFloat(document.getElementById("ciR").value) / 100;
    let T = parseFloat(document.getElementById("ciT").value);
    let N = parseFloat(document.getElementById("ciN").value);

    if (!P || !R || !T || !N) {
      document.getElementById("ciResult").innerHTML = "Enter valid values!";
      return;
    }

    let amount = P * Math.pow(1 + R / N, N * T);
    let CI = amount - P;

    document.getElementById("ciResult").innerHTML =
      `Compound Interest: ₹${CI.toFixed(2)}<br>Total Amount: ₹${amount.toFixed(2)}`;
  };

  return div;
}
