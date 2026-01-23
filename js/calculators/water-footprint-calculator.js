export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter daily water usage per person (liters):</label>
    <input type="number" id="dailyWater" placeholder="e.g. 150">

    <label>Enter number of people:</label>
    <input type="number" id="peopleCount" placeholder="Enter number of people">

    <button onclick="calculateWaterFootprint()">Calculate</button>
    <p id="waterFootprintResult"></p>
    <br>
    <h3>Water Footprint Calculator</h3>
    <p>Estimate total annual water consumption of a household.</p>
    <p>Helps in understanding water usage and conservation needs.</p>
    <p><b>Explanation:</b></p>
    <p>Water footprint represents the total amount of freshwater used directly or indirectly.</p>
    <p>This calculator focuses on direct household water consumption.</p>
    <p><b>Formula:</b></p>
    <p>
      Annual Water Footprint (liters) =  
      Daily Water × Number of People × 365
    </p>
    <p><b>Example:</b>  
    150 liters × 4 people × 365 = <b>219,000 liters/year</b>.</p>
    <p><b>Disclaimer:</b> Actual water usage may vary based on lifestyle and region.</p>
    <br>
  `;

  window.calculateWaterFootprint = function () {
    const daily = parseFloat(document.getElementById("dailyWater").value);
    const people = parseFloat(document.getElementById("peopleCount").value);
    if (isNaN(daily) || isNaN(people)) return;

    const annualWater = (daily * people * 365).toFixed(2);
    document.getElementById("waterFootprintResult").innerHTML =
      `<b>Annual Water Footprint:</b> ${annualWater} liters`;
  };

  return div;
}
