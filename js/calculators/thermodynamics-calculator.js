export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Mass (kg)</label>
    <input id="m" value="5" placeholder="e.g. 5">

    <label>Specific Heat (J/kg°C)</label>
    <input id="c" value="4186" placeholder="e.g. 4186 for water">

    <label>Temperature Change (°C)</label>
    <input id="t" value="20" placeholder="e.g. 20">

    <button onclick="calcHeat()">Calculate</button>
    <p id="heatResult"></p>

    <br>
    <h3>Heat Energy Calculator</h3>
    <p>This calculator computes the heat energy required to change the temperature of a substance.</p>
    <h4>Formula: Q = m × c × ΔT</h4>
    <p><b>Explanation:</b> This calculator finds the amount of heat energy (Q) required to change the temperature of a given mass (m) of a substance with a known specific heat capacity (c) by a certain temperature difference (ΔT).</p>
    <p><b>For example:</b> Heating 5 kg of water by 20°C requires 5 × 4186 × 20 = 418,600 Joules.</p>
    <p>Calculator simplifies heat energy computations.</p>
    <p>Accuracy depends on correct input of mass, specific heat, and temperature change.</p>
    <p>Based on standard physics formula Q = m × c × ΔT.</p>
    <p>To use the calculator, enter the mass, specific heat, and temperature change, then click "Calculate".</p>
    <p><b>Note:</b> Ensure units are correct: mass in kg, specific heat in J/kg°C, temperature in °C.</p>
    <p>It is important to enter valid numeric values.</p>
    <p><b>Disclaimer:</b> This calculator is for educational and reference purposes only. Real-world scenarios may require additional considerations such as phase changes or heat losses.</p>
  `;

  window.calcHeat = function () {
    const m = parseFloat(document.getElementById("m").value);
    const c = parseFloat(document.getElementById("c").value);
    const t = parseFloat(document.getElementById("t").value);

    if (isNaN(m) || isNaN(c) || isNaN(t)) {
      document.getElementById("heatResult").innerHTML = "<b>Please enter valid numbers</b>";
      return;
    }

    const q = m * c * t;

    document.getElementById("heatResult").innerHTML =
      `<b>Heat Energy:</b> ${q.toFixed(2)} Joules`;
  };

  return div;
}
