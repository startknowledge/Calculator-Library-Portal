export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Website Hosting Cost Calculator</h2>
    <p>This calculator estimates the total hosting cost of your website over a given period.</p>

    <div class="form-group">
      <label>Monthly Hosting Cost (₹)</label>
      <input type="number" id="host" value="300" placeholder="Enter monthly hosting cost">
    </div>

    <div class="form-group">
      <label>Number of Months</label>
      <input type="number" id="months" value="12" placeholder="Enter number of months">
    </div>

    <button onclick="calcHost()">Calculate</button>
    <p id="hostResult"></p>

    <br>
    <p><b>Explanation:</b> This calculator multiplies the monthly hosting cost by the number of months to get the total cost.</p>
    <p><b>Formula:</b> <i>Total Cost = Monthly Hosting Cost × Number of Months</i></p>
    <p><b>Calculator is a tool:</b> Helps website owners budget their hosting expenses for a specified period.</p>
    <p><b>Relative Note:</b> The calculation assumes the hosting cost remains constant over the period.</p>
    <p><b>Based On:</b> Standard monthly hosting fees.</p>
    <p><b>To Use the Calculator:</b> Enter your monthly hosting cost and number of months, then click "Calculate".</p>
    <p><b>Note:</b> Ensure all values are positive numbers for accurate results.</p>
    <p><b>It is important:</b> Use this as a planning guide. Actual costs may vary due to discounts, renewals, or plan changes.</p>
    <p><b>Disclaimer:</b> This calculator provides estimates only. The developer is not responsible for hosting decisions made based on this tool.</p>
    <br><hr>
  `;

  window.calcHost = function () {
    const host = parseFloat(document.getElementById("host").value);
    const months = parseFloat(document.getElementById("months").value);

    if (isNaN(host) || isNaN(months) || host <= 0 || months <= 0) {
      hostResult.innerHTML = "❌ Please enter valid positive numbers for all fields.";
      return;
    }

    const total = host * months;
    hostResult.innerHTML = `<b>Total Hosting Cost:</b> ₹${total.toFixed(2)}`;
  };

  return div;
}
