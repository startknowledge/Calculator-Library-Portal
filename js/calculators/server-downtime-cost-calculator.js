export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <div class="calculator">
    <h3>Server Downtime Cost Calculator</h3>

    <label>Hourly Revenue ($/ ₹):</label>
    <input id="hourlyRevenue" type="number" value="1000">
    
    <label>Downtime Duration (hours):</label>
    <input id="downtimeHours" type="number" value="2">
    
    <label>Additional Cost per Hour ($/ ₹):</label>
    <input id="additionalCost" type="number" value="100">
    
    <button onclick="calcDowntimeCost()">Calculate</button>
    <p id="downtimeResult"></p>
    </div>
  `;

    window.calcDowntimeCost = function () {
    let hourlyRevenue = +document.getElementById("hourlyRevenue").value;
    let downtimeHours = +document.getElementById("downtimeHours").value;
    let additionalCost = +document.getElementById("additionalCost").value;

    let revenueLoss = hourlyRevenue * downtimeHours;
    let additionalCosts = additionalCost * downtimeHours;
    let totalCost = revenueLoss + additionalCosts;
    let costPerMinute = totalCost / (downtimeHours * 60);
    
    document.getElementById("downtimeResult").innerHTML =
      `<b>Revenue Loss:</b> ($/ ₹) ${revenueLoss.toFixed(2)}<br>
       <b>Additional Costs:</b> ($/ ₹) ${additionalCosts.toFixed(2)}<br>
       <b>Total Downtime Cost:</b> ($/ ₹) ${totalCost.toFixed(2)}<br>
       <b>Cost per Minute:</b> ($/ ₹) ${costPerMinute.toFixed(2)}`;
  };

  return div;
}
/**
 * Calculates the financial cost of server downtime
 * @param {number} hourlyRevenue - Revenue generated per hour
 * @param {number} downtimeHours - Duration of downtime in hours
 * @param {number} additionalCostPerHour - Additional costs per hour (optional)
 * @returns {object} Cost breakdown including revenue loss, additional costs, total cost, and cost per minute
 
function calculateDowntimeCost(hourlyRevenue, downtimeHours, additionalCostPerHour = 0) {
    if (hourlyRevenue < 0 || downtimeHours < 0 || additionalCostPerHour < 0) {
        throw new Error('All parameters must be non-negative');
    }

    const revenueLoss = hourlyRevenue * downtimeHours;
    const additionalCosts = additionalCostPerHour * downtimeHours;
    const totalCost = revenueLoss + additionalCosts;

    return {
        revenueLoss,
        additionalCosts,
        totalCost,
        costPerMinute: totalCost / (downtimeHours * 60)
    };
}

module.exports = { calculateDowntimeCost }; */


