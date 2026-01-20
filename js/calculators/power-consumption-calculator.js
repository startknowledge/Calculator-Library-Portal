export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <h3>Power Consumption Calculator (P = V × I)</h3><br>
    <label>Voltage (V)</label>
    <input type="number" id="pcVoltage">

    <label>Current (A)</label>
    <input type="number" id="pcCurrent">

    <button onclick="calcPower()">Calculate</button>
    <p id="powerResult"></p>
  `;

  window.calcPower = function () {
    let power = +pcVoltage.value * +pcCurrent.value;
    powerResult.innerHTML = `<b>Power:</b> ${power} Watt`;
  };

  return div;
}
