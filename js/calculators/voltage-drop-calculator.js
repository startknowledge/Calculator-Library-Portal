export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Current (Ampere)</label>
    <input type="number" id="vdCurrent">

    <label>Wire Resistance (Ohm)</label>
    <input type="number" id="vdResistance">

    <button onclick="calcVD()">Calculate</button>
    <p id="vdResult"></p>
  `;

  window.calcVD = function () {
    let drop = +vdCurrent.value * +vdResistance.value;
    vdResult.innerHTML = `<b>Voltage Drop:</b> ${drop} Volt`;
  };

  return div;
}
