export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Simple Interest Calculator</h3>
      <p>Calculate the simple interest and total amount based on principal, rate of interest, and time.</p>

      <label>Principal Amount (₹):</label>
      <input type="number" id="siP">

      <label>Rate (% per year):</label>
      <input type="number" id="siR">

      <label>Time (Years):</label>
      <input type="number" id="siT">

      <button id="siBtn">Calculate</button>
      <h3 id="siResult"></h3>
      <br>

      <p><b>Explanation:</b> Simple interest is calculated on the original principal only, without compounding.</p>
      <p><b>For example:</b> If Principal = ₹10,000, Rate = 5%, Time = 2 years, then SI = ₹1,000 and Total Amount = ₹11,000.</p>
      <p><b>Formula:</b> SI = (Principal × Rate × Time) / 100</p>
      <p>Total Amount = Principal + SI</p>
      <p>Calculator is a tool to simplify interest calculations for loans, deposits, or investments.</p>
      <p>Relative accuracy depends on correct numeric input.</p>
      <p>Based on standard financial formula for simple interest.</p>
      <p>To use the calculator, enter the values in the input fields and click "Calculate".</p>
      <p><b>Note:</b> Simple interest does not account for compounding. Use a compound interest calculator if needed.</p>
      <p>It is important to enter valid numeric values.</p>
      <p><b>Disclaimer:</b> This calculator is for educational and estimation purposes only and may not reflect exact banking or investment results.</p>
      <br>
    </div>
  `;

  div.querySelector("#siBtn").onclick = () => {
    let P = parseFloat(document.getElementById("siP").value);
    let R = parseFloat(document.getElementById("siR").value);
    let T = parseFloat(document.getElementById("siT").value);

    if (!P || !R || !T) {
      document.getElementById("siResult").innerHTML = "<b>Please enter valid values!</b>";
      return;
    }

    let SI = (P * R * T) / 100;
    let total = P + SI;

    document.getElementById("siResult").innerHTML =
      `<b>Simple Interest:</b> ₹${SI.toFixed(2)}<br><b>Total Amount:</b> ₹${total.toFixed(2)}`;
  };

  return div;
}
