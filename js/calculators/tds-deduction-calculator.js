export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Claim Settlement Calculator</h3>
    <p>This calculator estimates the settled amount of an insurance or other claim based on the approved percentage.</p>

    <label>Claim Amount (₹)</label>
    <input type="number" id="claimAmount" placeholder="e.g. 100000">

    <label>Approved Percentage (%)</label>
    <input type="number" id="claimPercent" placeholder="e.g. 80">

    <button onclick="calcClaim()">Calculate</button>
    <p id="claimResult"></p>

    <br>
    <p><b>Explanation:</b> The settled claim is the portion of the claimed amount approved by the insurer or authority.</p>
    <p><b>For example:</b> On a claim of ₹100,000 with 80% approval, the settled claim amount is ₹80,000.</p>
    <p><b>Formula:</b> Settled Claim = (Claim Amount × Approved Percentage) ÷ 100</p>
    <p>Calculator simplifies claim settlement calculation.</p>
    <p>Accuracy depends on correct input of claim amount and approved percentage.</p>
    <p>Based on standard insurance and claim settlement rules.</p>
    <p>To use the calculator, enter the claim amount and the approved percentage, then click "Calculate".</p>
    <p><b>Note:</b> Ensure the approved percentage matches the official approval.</p>
    <p>It is important to enter valid numeric values.</p>
    <p><b>Disclaimer:</b> This calculator is for reference purposes only. Actual settlement may vary according to policy terms or authority guidelines.</p>
  `;

  window.calcClaim = function () {
    let amount = parseFloat(document.getElementById("claimAmount").value);
    let percent = parseFloat(document.getElementById("claimPercent").value);

    if (isNaN(amount) || isNaN(percent)) {
      document.getElementById("claimResult").innerHTML = "<b>Please enter valid numbers</b>";
      return;
    }

    let settled = (amount * percent) / 100;

    document.getElementById("claimResult").innerHTML =
      `<b>Settled Claim Amount:</b> ₹${settled.toFixed(2)}`;
  };

  return div;
}
