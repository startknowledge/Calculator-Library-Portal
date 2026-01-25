export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <label>Hourly Revenue ($/ ₹):</label>
      <input id="hourlyRevenue" type="number" value="1000">

      <label>Downtime Duration (hours):</label>
      <input id="downtimeHours" type="number" value="2">

      <label>Additional Cost per Hour ($/ ₹):</label>
      <input id="additionalCost" type="number" value="100">

      <button onclick="calcDowntimeCost()">Calculate</button>
      <p id="downtimeResult"></p>
      <br>
      <p>Calculate the financial impact of server downtime based on hourly revenue, downtime duration, and additional costs.</p>
      <p><b>Explanation:</b> This calculator estimates the monetary loss due to server downtime by considering lost revenue and any additional costs incurred during downtime.</p>
      <p><b>For example:</b> If your server generates $1000/hour, is down for 2 hours, and additional costs are $100/hour, the total downtime cost = (1000 × 2) + (100 × 2) = $2200.</p>
      <p><b>Formula:</b></p>
      <ul>
        <li>Revenue Loss = Hourly Revenue × Downtime Hours</li>
        <li>Additional Costs = Additional Cost per Hour × Downtime Hours</li>
        <li>Total Downtime Cost = Revenue Loss + Additional Costs</li>
        <li>Cost per Minute = Total Downtime Cost ÷ (Downtime Hours × 60)</li>
      </ul>
      <p>Calculator is a tool to help businesses quantify the financial impact of server outages.</p>
      <p>Accuracy depends on correct input of revenue and downtime duration.</p>
      <p>Based on standard accounting and business continuity practices.</p>
      <p>To use the calculator, enter your hourly revenue, downtime hours, and additional costs, then click "Calculate".</p>
      <p><b>Note:</b> All inputs should be non-negative numbers. Downtime cost per minute helps in understanding the finer impact.</p>
      <p>It is important to enter valid numeric values to get correct results.</p>
      <p><b>Disclaimer:</b> This calculator is for estimation purposes only and should not be considered as legal or financial advice. Actual costs may vary based on real-world conditions.</p>
      <br>
    </div>
  `;

  window.calcDowntimeCost = function () {
    const hourlyRevenue = parseFloat(document.getElementById("hourlyRevenue").value);
    const downtimeHours = parseFloat(document.getElementById("downtimeHours").value);
    const additionalCost = parseFloat(document.getElementById("additionalCost").value);

    if (isNaN(hourlyRevenue) || isNaN(downtimeHours) || isNaN(additionalCost) || hourlyRevenue < 0 || downtimeHours < 0 || additionalCost < 0) {
      downtimeResult.innerHTML = "<b>Please enter valid non-negative numbers</b>";
      return;
    }

    const revenueLoss = hourlyRevenue * downtimeHours;
    const additionalCosts = additionalCost * downtimeHours;
    const totalCost = revenueLoss + additionalCosts;
    const costPerMinute = totalCost / (downtimeHours * 60);

    downtimeResult.innerHTML =
      `<b>Revenue Loss:</b> ($/ ₹) ${revenueLoss.toFixed(2)}<br>
       <b>Additional Costs:</b> ($/ ₹) ${additionalCosts.toFixed(2)}<br>
       <b>Total Downtime Cost:</b> ($/ ₹) ${totalCost.toFixed(2)}<br>
       <b>Cost per Minute:</b> ($/ ₹) ${costPerMinute.toFixed(2)}`;
  };

  return div;
}
