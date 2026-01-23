export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter roof area (sq. meters):</label>
    <input type="number" id="roofArea" placeholder="Enter area">

    <label>Enter annual rainfall (mm):</label>
    <input type="number" id="rainfall" placeholder="Enter rainfall">

    <button onclick="calculateRainwater()">Calculate</button>
    <p id="rainwaterResult"></p>
    <br>
    <h3>Rainwater Harvesting Calculator</h3>
    <p>Estimate the total rainwater that can be collected from your roof.</p>
    <p><b>Explanation:</b></p>
    <p>Rainwater harvesting helps in conserving water by collecting rainwater from roofs.</p>
    <p><b>Formula:</b></p>
    <p>Water Collected (liters) = Roof Area × Rainfall × 0.8</p>
    <p><b>Example:</b>  
    For <b>50 sq.m</b> roof and <b>1000 mm</b> rainfall, water collected = <b>40,000 liters</b>.</p>
    <p> based on the input roof area and rainfall, it estimates the total rainwater that can be harvested.</p>
    <p>This calculation assumes an efficiency factor of 0.8 to account for losses.</p>
    <p>Related Concepts: Rainwater Harvesting, Water Conservation, Sustainable Living.</p>
    <p>Importance: Helps reduce dependency on traditional water sources and promotes sustainability.</p>
    <p><b>Disclaimer:</b> Efficiency factor assumed as 0.8; actual may vary.</p>
    <br>
  `;

  window.calculateRainwater = function () {
    const area = parseFloat(document.getElementById("roofArea").value);
    const rain = parseFloat(document.getElementById("rainfall").value);
    if (isNaN(area) || isNaN(rain)) return;

    const water = (area * rain * 0.8).toFixed(2);
    document.getElementById("rainwaterResult").innerHTML =
      `<b>Estimated Rainwater:</b> ${water} liters`;
  };

  return div;
}
