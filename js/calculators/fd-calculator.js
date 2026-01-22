export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Deposit Amount (₹):</label>
    <input type="number" id="fdP">

    <label>Annual Interest Rate (%):</label>
    <input type="number" id="fdR">

    <label>Time (Years):</label>
    <input type="number" id="fdT">

    <button id="fdBtn">Calculate</button>
    <h3 id="fdResult"></h3>
    <br>
    <p><u>Explanation about Fixed Deposit Calculator</u> :</p>
    <p>The Fixed Deposit Calculator is a tool designed to help individuals and businesses calculate the interest earned on a fixed deposit investment. By inputting the principal amount, annual interest rate, and time period, users can quickly determine the maturity amount and interest earned.</p>
    <p>The calculator uses the following formula:</p>
    <p>Maturity Amount = Principal * (1 + Rate/4)^(4*Time)</p>
    <p>To use the calculator, simply enter the deposit amount, annual interest rate, and time in years in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the total maturity amount and interest earned.</p>
    <p>This calculator is particularly useful for tailors, fashion designers, and fabric retailers who need to manage fabric costs and measurements efficiently. By knowing both the total cost and the length in yards, users can make informed purchasing decisions and budget planning.</p>
    <p>In summary, the Fixed Deposit Calculator is a valuable resource for anyone involved in fabric-related businesses or projects, providing clarity on costs and measurements to aid in effective financial and material management.</p>
    <p><b>Note:</b> This calculator provides an estimate of the fabric cost and yardage based on the inputs provided. Actual costs may vary depending on fabric type, quality, and market fluctuations.</p>
    <p>For personalized advice and detailed fabric cost analysis, consider consulting with a textile expert or fabric supplier.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
  `;

  div.querySelector("#fdBtn").onclick = () => {
    let P = parseFloat(document.getElementById("fdP").value);
    let R = parseFloat(document.getElementById("fdR").value) / 100;
    let T = parseFloat(document.getElementById("fdT").value);

    if (!P || !R || !T) {
      document.getElementById("fdResult").innerHTML = "Enter valid values!";
      return;
    }

    let interest = P * Math.pow(1 + R / 4, 4 * T) - P;
    let total = P + interest;

    document.getElementById("fdResult").innerHTML =
      `FD Interest: ₹${interest.toFixed(2)}<br>Total Maturity: ₹${total.toFixed(2)}`;
  };

  return div;
}
