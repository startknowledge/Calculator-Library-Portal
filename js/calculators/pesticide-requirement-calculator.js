export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Pesticide Requirement Calculator</h3>
    <p>Calculate the total pesticide required based on land area, water usage, and dose.</p>
    <p><b>Formula:</b> Total Pesticide (ml) = Water per Acre (L) × Area (acre) × Dose (ml/L)</p>

    <label>Land Area (acre)</label>
    <input id="area" type="number" value="1" min="0">

    <label>Water per Acre (Liters)</label>
    <input id="water" type="number" value="200" min="0">

    <label>Pesticide Dose (ml per Liter)</label>
    <input id="dose" type="number" value="2" min="0">

    <button onclick="calcPest()">Calculate</button>
    <p id="pestResult"></p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only. Follow manufacturer instructions and safety guidelines when applying pesticides.</p>
    <br>
  `;

  window.calcPest = function () {
    const areaVal = parseFloat(document.getElementById("area").value);
    const waterVal = parseFloat(document.getElementById("water").value);
    const doseVal = parseFloat(document.getElementById("dose").value);

    if (isNaN(areaVal) || isNaN(waterVal) || isNaN(doseVal) || areaVal <= 0 || waterVal <= 0 || doseVal <= 0) {
      pestResult.innerHTML = "Please enter valid positive numbers for all fields.";
      return;
    }

    const total = areaVal * waterVal * doseVal;
    pestResult.innerHTML = `<b>Total Pesticide Required:</b> ${total.toFixed(2)} ml`;
  };

  return div;
}
