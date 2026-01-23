export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter number of plastic items used per week:</label>
    <input type="number" id="plasticCount" placeholder="Enter number of items">

    <button onclick="calculatePlastic()">Calculate</button>
    <p id="plasticResult"></p>
    <br>
    <h3>Plastic Footprint Calculator</h3>
    <p>Estimate your annual plastic consumption in kilograms.</p>
    <p><b>Explanation:</b></p>
    <p>This helps understand your impact on plastic pollution.</p>
    <p><b>Formula:</b></p>
    <p>Annual Plastic (kg) = Weekly Usage × 52 × 0.01</p>
    <p>This assumes an average weight of 10 grams per plastic item.</p>
    <p>Based on the number of plastic items you use weekly, this calculator estimates your annual plastic footprint in kilograms.</p>
    <p>To use the calculator, simply input the number of plastic items you use each week and click "Calculate" to see your estimated annual plastic consumption.</p>
    <p>It is important to be aware of your plastic usage to make informed decisions about reducing waste and promoting sustainability.</p>
    <p><b>Example:</b>  
    200 items/week ≈ <b>104 kg/year</b>.</p>
    <p><b>Disclaimer:</b> Average weight per item assumed as 10g; actual may vary.</p>
    <br>
  `;

  window.calculatePlastic = function () {
    const items = parseFloat(document.getElementById("plasticCount").value);
    if (isNaN(items)) return;

    const plastic = (items * 52 * 0.01).toFixed(2);
    document.getElementById("plasticResult").innerHTML =
      `<b>Estimated Annual Plastic:</b> ${plastic} kg`;
  };

  return div;
}
