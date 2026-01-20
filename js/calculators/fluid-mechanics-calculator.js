export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fluid Flow Rate = Pipe Area × Fluid Velocity<br>

    <label>Pipe Area (m²)</label>
    <input id="area" value="0.05">

    <label>Fluid Velocity (m/s)</label>
    <input id="vel" value="3">

    <button onclick="calcFlow()">Calculate</button>
    <p id="flowResult"></p>
  `;

  window.calcFlow = function () {
    let area = +document.getElementById("area").value;
    let vel = +document.getElementById("vel").value;

    let flow = area * vel;

    flowResult.innerHTML =
      `<b>Flow Rate:</b> ${flow.toFixed(3)} m³/s`;
  };

  return div;
}
