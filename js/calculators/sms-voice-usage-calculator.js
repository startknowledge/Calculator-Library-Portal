export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>SMS / Voice Usage Calculator</h3>
      <p>Calculate the total cost of SMS or voice usage based on rate per unit and total units used.</p>

      <label>Cost per SMS / Minute (₹):</label>
      <input type="number" id="rate" value="0.5" placeholder="e.g. 0.5">

      <label>Total Units Used:</label>
      <input type="number" id="units" value="300" placeholder="e.g. 300">

      <button id="usageBtn">Calculate</button>
      <p id="usageResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator helps determine the total cost of SMS or voice calls based on the rate per unit.</p>
      <p><b>For example:</b> If rate = ₹0.5 and units = 300, total cost = ₹150.</p>
      <p><b>Formula:</b> Total Cost = Rate per Unit × Total Units Used</p>
      <p>Calculator is a tool to simplify telecom cost calculation.</p>
      <p>Relative accuracy depends on correct input of rate and units.</p>
      <p>To use the calculator, enter the rate and total units used, then click "Calculate".</p>
      <p><b>Note:</b> Ensure the units and rate are correct for accurate calculation.</p>
      <p>It is important to enter numeric values only.</p>
      <p><b>Disclaimer:</b> This calculator is for reference only. Actual charges may vary depending on the service provider.</p>
      <br>
    </div>
  `;

  div.querySelector("#usageBtn").onclick = () => {
    const rate = parseFloat(document.getElementById("rate").value);
    const units = parseFloat(document.getElementById("units").value);

    if (isNaN(rate) || isNaN(units)) {
      document.getElementById("usageResult").innerHTML = "<b>Please enter valid numbers!</b>";
      return;
    }

    const totalCost = rate * units;

    document.getElementById("usageResult").innerHTML = `<b>Total Usage Cost:</b> ₹${totalCost.toFixed(2)}`;
  };

  return div;
}
