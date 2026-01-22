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
    <br>
    <p>The Fluid Flow Rate Calculator computes the flow rate of a fluid through a pipe based on the cross-sectional area of the pipe and the velocity of the fluid. Enter the pipe area in square meters and the fluid velocity in meters per second, then click "Calculate" to see the flow rate in cubic meters per second.</p>
    <p>This calculator is useful for engineers, plumbers, and anyone involved in fluid dynamics or pipe system design. It helps in determining the efficiency and capacity of fluid transport systems.</p>
    <p><b>Note:</b> Ensure that the area and velocity inputs are accurate to get a reliable flow rate.</p>
    <p><b>Example:</b> For a pipe with an area of 0.05 m² and a fluid velocity of 3 m/s, the flow rate would be 0.15 m³/s.</p>
    <p><b>Formula:</b> Flow Rate (m³/s) = Pipe Area (m²) × Fluid Velocity (m/s)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual flow rates may vary based on additional factors such as pipe roughness, fluid viscosity, and turbulence.</p>
    <br>
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
