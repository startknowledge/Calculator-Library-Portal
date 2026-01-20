export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Panel Wattage (W)</label>
    <input type="number" id="panelWatt">

    <label>Sunlight Hours / Day</label>
    <input type="number" id="sunHours">

    <button onclick="calcSolar()">Calculate</button>
    <p id="solarResult"></p>
  `;

  window.calcSolar = function () {
    let output = +panelWatt.value * +sunHours.value;
    solarResult.innerHTML = `<b>Daily Output:</b> ${output} Wh`;
  };

  return div;
}
