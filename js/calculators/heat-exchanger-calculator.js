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
