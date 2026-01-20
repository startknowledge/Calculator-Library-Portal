export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Water = Area × Water per Acre</h3>

    <label>Land Area (Acre)</label>
    <input id="area" value="3">

    <label>Water per Acre (Liters)</label>
    <input id="rate" value="5000">

    <button onclick="calcWater()">Calculate</button>
    <p id="waterResult"></p>
  `;

  window.calcWater = function () {
    waterResult.innerHTML =
      `<b>Total Water Required:</b> ${area.value * rate.value} Liters`;
  };

  return div;
}
