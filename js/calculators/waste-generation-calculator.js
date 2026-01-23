export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter number of people in household:</label>
    <input type="number" id="householdCount" placeholder="Enter number of people">

    <button onclick="calculateWaste()">Calculate</button>
    <p id="wasteResult"></p>
    <br>
    <h3>Waste Generation Calculator</h3>
    <p>Estimate household waste generated per year.</p>
    <p>Calculates annual waste based on number of people.</p>
    <p>Based on average waste generation rates.</p>
    <p>It helps in understanding and managing household waste production.</p>
    <p>Note: Actual waste may vary based on lifestyle and region.</p>
    <p><b>Explanation:</b></p>
    <p>Average person generates about 0.74 kg of waste daily.</p>
    <p><b>Formula:</b></p>
    <p>Annual Waste (kg) = People × 0.74 × 365</p>
    <p><b>Example:</b>  
    4 people generate ≈ <b>1,080 kg/year</b>.</p>
    <p><b>Disclaimer:</b> Waste generation varies with lifestyle and region.</p>
    <br>
  `;

  window.calculateWaste = function () {
    const people = parseFloat(document.getElementById("householdCount").value);
    if (isNaN(people)) return;

    const waste = (people * 0.74 * 365).toFixed(2);
    document.getElementById("wasteResult").innerHTML =
      `<b>Estimated Annual Waste:</b> ${waste} kg`;
  };

  return div;
}
