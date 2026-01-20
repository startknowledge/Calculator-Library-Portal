export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Battery Ah</label>
    <input type="number" id="ah">

    <label>Battery Voltage</label>
    <input type="number" id="volt" value="12">

    <label>Load (Watt)</label>
    <input type="number" id="load">

    <button onclick="calcUPS()">Calculate</button>
    <p id="upsResult"></p>
  `;

  window.calcUPS = function () {
    let time = (ah.value * volt.value) / load.value;
    upsResult.innerHTML =
      `<b>Backup Time:</b> ${time.toFixed(2)} Hours`;
  };

  return div;
}
