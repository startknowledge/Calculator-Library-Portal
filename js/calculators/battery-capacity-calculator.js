export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Load (Watt)</label>
    <input type="number" id="load">

    <label>Backup Time (Hours)</label>
    <input type="number" id="hours">

    <label>Battery Voltage (V)</label>
    <input type="number" id="volt" value="12">

    <button onclick="calcBattery()">Calculate</button>
    <p id="batteryResult"></p>
  `;

  window.calcBattery = function () {
    let ah = (load.value * hours.value) / volt.value;
    batteryResult.innerHTML =
      `<b>Required Battery:</b> ${ah.toFixed(2)} Ah`;
  };

  return div;
}
