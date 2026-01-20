export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Pesticide = Water (L/acre) × Area × Dose (ml/L)</h3>

    <label>Land Area (Acre)</label>
    <input id="area" value="1">

    <label>Water per Acre (Liters)</label>
    <input id="water" value="200">

    <label>Pesticide Dose (ml per Liter)</label>
    <input id="dose" value="2">

    <button onclick="calcPest()">Calculate</button>
    <p id="pestResult"></p>
  `;

  window.calcPest = function () {
    let total = area.value * water.value * dose.value;
    pestResult.innerHTML =
      `<b>Total Pesticide Required:</b> ${total} ml`;
  };

  return div;
}
