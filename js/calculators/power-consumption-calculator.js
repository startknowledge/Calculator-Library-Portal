export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Power Consumption Calculator (P = V × I)</h3>
    <p>Calculate the power consumed by a device based on voltage and current.</p>
    <label>Voltage (V)</label>
    <input type="number" id="pcVoltage" min="0" placeholder="Enter voltage in volts">

    <label>Current (A)</label>
    <input type="number" id="pcCurrent" min="0" placeholder="Enter current in amperes">

    <button onclick="calcPower()">Calculate</button>
    <p id="powerResult"></p>

    <p><b>Disclaimer:</b> This calculation is for estimation purposes only. Actual power consumption may vary based on device characteristics.</p>
    <br>
  `;

  window.calcPower = function () {
    const voltage = parseFloat(document.getElementById("pcVoltage").value);
    const current = parseFloat(document.getElementById("pcCurrent").value);

    if (isNaN(voltage) || voltage < 0) {
      powerResult.innerHTML = "Please enter a valid voltage.";
      return;
    }

    if (isNaN(current) || current < 0) {
      powerResult.innerHTML = "Please enter a valid current.";
      return;
    }

    const power = voltage * current;

    powerResult.innerHTML = `<b>Power:</b> ${power.toFixed(2)} Watt`;
  };

  return div;
}
