export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Load = Area × Load per m²</h3>

    <label>Area (m²)</label>
    <input id="area" value="50">

    <label>Load per m² (kg)</label>
    <input id="load" value="400">

    <button onclick="calcLoad()">Calculate</button>
    <p id="loadResult"></p>
  `;

  window.calcLoad = function () {
    let totalLoad = area.value * load.value;

    loadResult.innerHTML =
      `<b>Total Load:</b> ${totalLoad} kg`;
  };

  return div;
}
