export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fabric Cost per Yard Calculator</h3>

    <label>Cost per Meter (₹)</label>
    <input id="meterCost" value="180">

    <label>Total Meters</label>
    <input id="meters" value="40">

    <button onclick="calcYard()">Calculate</button>
    <p id="yardResult"></p>
    <br>
    <p><u>Explanation about Fabric Cost per Yard Calculator</u> :</p>
    <p>The Fabric Cost per Yard Calculator is a tool designed to help individuals and businesses calculate the total cost of fabric based on the cost per meter and the total length in meters. Additionally, it converts the total length from meters to yards, providing a comprehensive understanding of fabric measurements and costs.</p>
    <p>The calculator uses the following formulas:</p>
    <p>Total Fabric Cost = Cost per Meter (₹) * Total Meters</p>
    <p>Total Yards = Total Meters * 1.09361</p>
    <p>To use the calculator, simply enter the cost per meter and the total meters in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the total fabric cost in rupees and the equivalent length in yards.</p>
    <p>This calculator is particularly useful for tailors, fashion designers, and fabric retailers who need to manage fabric costs and measurements efficiently. By knowing both the total cost and the length in yards, users can make informed purchasing decisions and budget planning.</p>
    <p>In summary, the Fabric Cost per Yard Calculator is a valuable resource for anyone involved in fabric-related businesses or projects, providing clarity on costs and measurements to aid in effective financial and material management.</p>
    <p><b>Note:</b> This calculator provides an estimate of the fabric cost and yardage based on the inputs provided. Actual costs may vary depending on fabric type, quality, and market fluctuations.</p>
    <p>For personalized advice and detailed fabric cost analysis, consider consulting with a textile expert or fabric supplier.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
  `;

  window.calcYard = function () {
    let cost = +document.getElementById("meterCost").value;
    let meters = +document.getElementById("meters").value;

    let yards = meters * 1.09361;

    document.getElementById("yardResult").innerHTML =
      `<b>Total Fabric Cost:</b> ₹${(cost * meters).toFixed(2)}<br>
       <b>Total Yards:</b> ${yards.toFixed(2)}`;
  };

  return div;
}
