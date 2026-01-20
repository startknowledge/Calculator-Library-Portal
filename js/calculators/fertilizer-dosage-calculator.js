export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Fertilizer = Area × Dosage per Acre</h3>

    <label>Land Area (Acre)</label>
    <input id="area" value="2">

    <label>Fertilizer per Acre (kg)</label>
    <input id="rate" value="50">

    <button onclick="calcFert()">Calculate</button>
    <p id="fertResult"></p>
  `;

  window.calcFert = function () {
    fertResult.innerHTML =
      `<b>Total Fertilizer Required:</b> ${area.value * rate.value} kg`;
  };

  return div;
}
