export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Savings Calculator</h3>

    <p>
      This calculator helps you determine how much you save when switching 
      from an old plan to a new plan.
    </p>

    <label>Old Plan Cost (₹)</label>
    <input type="number" id="old" min="0" value="799" placeholder="Enter old plan cost">

    <label>New Plan Cost (₹)</label>
    <input type="number" id="newp" min="0" value="599" placeholder="Enter new plan cost">

    <button onclick="calcSave()">Calculate</button>

    <p id="saveResult"></p>
    <br>

    <p><b>Formula:</b><br>
      Savings = Old Plan Cost − New Plan Cost
    </p>

    <p><b>Example:</b><br>
      Old Plan = ₹799<br>
      New Plan = ₹599<br>
      <b>You Save = ₹200</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for mobile plans, subscriptions, utilities, and budgeting.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only.</p>
    <br>
  `;

  window.calcSave = function () {
    const oldCost = parseFloat(document.getElementById("old").value);
    const newCost = parseFloat(document.getElementById("newp").value);

    if (isNaN(oldCost) || isNaN(newCost) || oldCost < 0 || newCost < 0) {
      document.getElementById("saveResult").innerHTML =
        "<b>Please enter valid positive values.</b>";
      return;
    }

    const savings = oldCost - newCost;

    document.getElementById("saveResult").innerHTML =
      `<b>You Save:</b> ₹${savings.toFixed(2)}`;
  };

  return div;
}
