export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter number of people in sector:</label>
    <input type="number" id="waterPeople" placeholder="Enter number of people">

    <label>Enter average daily water consumption per person (liters):</label>
    <input type="number" id="waterPerPerson" placeholder="Liters per person">

    <button onclick="calculateWater()">Calculate</button>
    <p id="waterResult"></p>
    <br>
    <h3>Water Consumption per Sector Calculator</h3>
    <p>Estimate total water usage for a specific sector of a city.</p>
    <p>Calculates water consumption based on population and per-person usage.</p>
    <p>This tool is useful for urban planners and environmental analysts.</p>
    <p>Note: Values are approximate and may vary based on local conditions.</p>
    <p><b>Explanation:</b></p>
    <p>This calculator helps city planners monitor water usage and plan distribution efficiently.</p>
    <p><b>Formula:</b></p>
    <p>Total Water (liters/day) = People × Water per person</p>
    <p><b>Example:</b>  
    1000 people × 150 liters/person/day = <b>150,000 liters/day</b>.</p>
    <p><b>Disclaimer:</b> Consumption rates may vary based on lifestyle and season.</p>
    <br>
  `;

  window.calculateWater = function () {
    const people = parseFloat(document.getElementById("waterPeople").value);
    const perPerson = parseFloat(document.getElementById("waterPerPerson").value);
    if (isNaN(people) || isNaN(perPerson)) return;

    const totalWater = (people * perPerson).toFixed(2);
    document.getElementById("waterResult").innerHTML =
      `<b>Estimated Water Consumption:</b> ${totalWater} liters/day`;
  };

  return div;
}
