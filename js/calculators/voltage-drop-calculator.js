export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Voltage Drop Calculator</h2>
    <p>This calculator computes the voltage drop across a wire based on the current flowing and the wire's resistance.</p>

    <div class="form-group">
      <label>Current (Ampere)</label>
      <input type="number" id="vdCurrent" placeholder="Enter current in Amperes">
    </div>

    <div class="form-group">
      <label>Wire Resistance (Ohm)</label>
      <input type="number" id="vdResistance" placeholder="Enter resistance in Ohms">
    </div>

    <button onclick="calcVD()">Calculate</button>
    <p id="vdResult"></p>

    <br>
    <p><b>Explanation:</b> Voltage drop is the reduction in voltage in a circuit due to the resistance of the wire.</p>
    <p><b>Formula:</b> <i>Voltage Drop (V) = Current (I) × Resistance (R)</i></p>
    <p><b>Calculator is a tool:</b> Helps electricians and engineers estimate voltage losses in electrical circuits.</p>
    <p><b>Relative Note:</b> The result assumes constant current and purely resistive wire.</p>
    <p><b>Based On:</b> Ohm's Law (V = I × R).</p>
    <p><b>To Use the Calculator:</b> Enter the current in Amperes and the wire resistance in Ohms, then click "Calculate".</p>
    <p><b>Note:</b> Ensure units are correct. This calculator does not account for AC reactance or temperature effects.</p>
    <p><b>It is important:</b> Use this result for estimation only. Actual voltage drop may vary with wire material, length, and conditions.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for decisions or errors based on this calculator. Always verify critical electrical calculations manually.</p>
    <br><hr>
  `;

  window.calcVD = function () {
    const current = parseFloat(document.getElementById("vdCurrent").value);
    const resistance = parseFloat(document.getElementById("vdResistance").value);

    if (isNaN(current) || isNaN(resistance) || current <= 0 || resistance < 0) {
      vdResult.innerHTML = "❌ Please enter valid positive numbers for current and resistance.";
      return;
    }

    const drop = current * resistance;
    vdResult.innerHTML = `<b>Voltage Drop:</b> ${drop.toFixed(2)} Volt`;
  };

  return div;
}
