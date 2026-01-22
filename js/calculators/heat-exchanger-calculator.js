export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Q = m × Cp × ΔT</h3>

    <label>Mass Flow Rate (kg/s)</label>
    <input id="m" value="2">

    <label>Specific Heat Cp (kJ/kg°C)</label>
    <input id="cp" value="4.18">

    <label>Temperature Difference ΔT (°C)</label>
    <input id="dt" value="30">

    <button onclick="calcHeat()">Calculate</button>
    <p id="heatResult"></p>
    <br>
    <p>The Heat Exchanger Calculator helps you determine the heat transfer rate (Q) in a heat exchanger based on the mass flow rate, specific heat capacity, and temperature difference. By entering these values, users can easily calculate the amount of heat transferred in kilowatts (kW).</p>
    <p>This calculator is useful for engineers, HVAC professionals, and students who need to analyze heat exchanger performance. It aids in designing and optimizing heat exchange systems for various applications.</p>
    <p><b>Note:</b> Ensure that the mass flow rate, specific heat capacity, and temperature difference inputs are accurate to get a reliable heat transfer calculation.</p>
    <p><b>Example:</b> For a mass flow rate of 2 kg/s, specific heat capacity of 4.18 kJ/kg°C, and temperature difference of 30°C, the heat transfer would be 250.80 kW.</p>
    <p><b>Formula:</b> Q = m × Cp × ΔT</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual heat transfer rates may vary based on specific system configurations, fluid properties, and operational conditions.</p>
    <br>
  `;

  window.calcHeat = function () {
    let m = +document.getElementById("m").value;
    let cp = +document.getElementById("cp").value;
    let dt = +document.getElementById("dt").value;

    let Q = m * cp * dt;

    heatResult.innerHTML =
      `<b>Heat Transfer:</b> ${Q.toFixed(2)} kW`;
  };

  return div;
}
