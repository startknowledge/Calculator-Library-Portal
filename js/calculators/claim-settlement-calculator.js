export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Claim Settlement Calculator</h3>

    <label>Claim Amount (₹)</label>
    <input type="number" id="claimAmount">

    <label>Approved Percentage (%)</label>
    <input type="number" id="claimPercent">

    <button onclick="calcClaim()">Calculate</button>
    <p id="claimResult"></p>
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
