export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Crop Yield Calculator</h3>

    <label>Land Area (Acre)</label>
    <input id="landArea" value="5">

    <label>Yield per Acre (kg)</label>
    <input id="yieldPerAcre" value="800">

    <button onclick="calcYield()">Calculate</button>
    <p id="yieldResult"></p>
  `;

  window.calcYield = function () {
    let area = +document.getElementById("landArea").value;
    let yieldPerAcre = +document.getElementById("yieldPerAcre").value;

    let totalYield = area * yieldPerAcre;

    document.getElementById("yieldResult").innerHTML =
      `<b>Total Crop Yield:</b> ${totalYield} kg`;
  };

  return div;
}
