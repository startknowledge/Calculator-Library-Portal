export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <h3>Ohm's Law Calculator</h3>
  <h3>Voltage (V) = Current (I) × Resistance (R)</h3><br>
    <label>Current (I in Ampere)</label>
    <input type="number" id="current">

    <label>Resistance (R in Ohm)</label>
    <input type="number" id="resistance">

    <button onclick="calcOhm()">Calculate</button>
    <p id="ohmResult"></p>
  `;

  window.calcOhm = function () {
    let I = +current.value;
    let R = +resistance.value;
    let V = I * R;

    ohmResult.innerHTML = `<b>Voltage:</b> ${V} Volt`;
  };

  return div;
}
