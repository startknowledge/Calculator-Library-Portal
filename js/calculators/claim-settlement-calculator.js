export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Claim Settlement Calculator</h3>

    <label>Claim Amount (₹)</label>
    <input type="number" id="claimAmount">

    <label>Approved Percentage (%)</label>
    <input type="number" id="claimPercent">

    <button onclick="calcClaim()">Calculate</button>
    <p id="claimResult"></p><br>
    <p><u>Explanation about Claim Settlement Calculator</u> :</p>
    <p>This calculator helps in determining the settled amount of an insurance claim based on the total claim amount and the approved percentage by the insurance company. It is useful for policyholders to understand how much they will receive after the claim is processed.</p>
    <p>For example, if a claim amount is ₹50,000 and the approved percentage is 80%, the settled claim amount would be ₹40,000 (₹50,000 × 80 / 100).</p>
    <p>The calculator provides a quick and easy way to estimate the payout from an insurance claim, allowing users to plan their finances accordingly.</p>
    <p>Users should input accurate claim amounts and percentages to get reliable estimates.</p>
    <p>This tool aids in financial planning and helps policyholders set realistic expectations regarding their insurance claims.</p>
    <p>Disclaimer: This tool provides an estimate and should not be used as a substitute for official insurance documentation or professional financial advice.</p>
    <br>
  `;

  window.calcClaim = function () {
    let amount = parseFloat(document.getElementById("claimAmount").value);
    let percent = parseFloat(document.getElementById("claimPercent").value);

    let settled = (amount * percent) / 100;

    document.getElementById("claimResult").innerHTML =
      `<b>Settled Claim Amount:</b> ₹${settled.toFixed(2)}`;
  };

  return div;
}
