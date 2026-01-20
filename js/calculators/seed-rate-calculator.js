export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Seed = Area × Seed Rate per Acre</h3>

    <label>Land Area (Acre)</label>
    <input id="area" value="2">

    <label>Seed Rate per Acre (kg)</label>
    <input id="rate" value="20">

    <button onclick="calcSeed()">Calculate</button>
    <p id="seedResult"></p>
  `;

  window.calcSeed = function () {
    seedResult.innerHTML =
      `<b>Total Seed Required:</b> ${area.value * rate.value} kg`;
  };

  return div;
}
