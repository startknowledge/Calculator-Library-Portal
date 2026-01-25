export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Weight Balance Calculator</h2>
    <p>This calculator determines the weight and balance of an aircraft to ensure safe flight operations.</p>

    <div class="form-group">
      <label>Aircraft Weight (lbs)</label>
      <input type="number" id="weight" placeholder="Enter aircraft weight" required>
    </div>

    <div class="form-group">
      <label>Center of Gravity (inches from reference point)</label>
      <input type="number" id="centerOfGravity" placeholder="Enter CG in inches" step="0.01" required>
    </div>

    <button onclick="calculateWeightBalance()">Calculate</button>
    <p id="weightBalanceResult"></p>

    <br>
    <p><b>Explanation:</b> The weight balance is calculated by multiplying the aircraft weight by the distance of its center of gravity from a reference point.</p>
    <p><b>Formula:</b> <i>Weight Balance = Aircraft Weight × Center of Gravity</i></p>
    <p><b>Calculator is a tool:</b> Helps pilots and flight planners ensure aircraft loading is within safe operational limits.</p>
    <p><b>Relative Note:</b> This calculation assumes a simplified linear balance model for demonstration purposes.</p>
    <p><b>Based On:</b> Aircraft weight in lbs and center of gravity in inches from a defined reference point.</p>
    <p><b>To Use the Calculator:</b> Enter the aircraft weight and the CG position, then click "Calculate".</p>
    <p><b>Note:</b> Ensure all values are positive and accurate for safety.</p>
    <p><b>It is important:</b> Always cross-check with official aircraft manuals. This tool provides estimates only.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for decisions made using this calculator. Always verify critical flight calculations manually.</p>
    <br><hr>
  `;

  window.calculateWeightBalance = function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const centerOfGravity = parseFloat(document.getElementById("centerOfGravity").value);

    if (isNaN(weight) || isNaN(centerOfGravity) || weight <= 0 || centerOfGravity < 0) {
      weightBalanceResult.innerHTML = "❌ Please enter valid positive numbers.";
      return;
    }

    const balance = weight * centerOfGravity;
    weightBalanceResult.innerHTML = `<b>Weight Balance:</b> ${balance.toFixed(2)} lbs-inches`;
  };

  return div;
}
