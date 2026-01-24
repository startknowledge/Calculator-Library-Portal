export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>PM Ujjwala LPG Subsidy Calculator</h3>
    <p>Estimate the total subsidy for LPG connections under the PM Ujjwala Yojana.</p>
    <p><b>Subsidy Formula:</b> Total Subsidy = Number of Connections × ₹1,600</p>

    <label>LPG Connections</label>
    <input type="number" id="connections" min="0" placeholder="Enter number of connections">

    <button onclick="calcUjjwala()">Calculate</button>
    <p id="ujjwalaResult"></p>

    <p><b>Disclaimer:</b> This is an estimated calculation. Actual subsidy depends on official government verification and rules.</p>
    <br>
  `;

  window.calcUjjwala = function () {
    const c = parseFloat(document.getElementById("connections").value);

    if (isNaN(c) || c < 0) {
      ujjwalaResult.innerHTML = "Please enter a valid number of connections.";
      return;
    }

    const subsidy = c * 1600;

    document.getElementById("ujjwalaResult").innerHTML =
      `<b>Total Subsidy:</b> ₹${subsidy}`;
  };

  return div;
}
