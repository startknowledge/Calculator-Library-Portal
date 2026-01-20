export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Beam Deflection Calculator</h3>

    <label>Load (W) in kN</label>
    <input id="beamW" value="10">

    <label>Beam Length (L) in m</label>
    <input id="beamL" value="5">

    <label>Elasticity (E) in GPa</label>
    <input id="beamE" value="200">

    <label>Moment of Inertia (I) (m⁴)</label>
    <input id="beamI" value="0.0001">

    <button onclick="calcBeam()">Calculate</button>
    <p id="beamResult"></p>
  `;

  window.calcBeam = function () {
    let W = +document.getElementById("beamW").value * 1000; // kN → N
    let L = +document.getElementById("beamL").value;       // m
    let E = +document.getElementById("beamE").value * 1e9; // GPa → Pa
    let I = +document.getElementById("beamI").value;       // m⁴

    // Simply Supported Beam with Central Load
    let deflection = (W * Math.pow(L, 3)) / (48 * E * I);

    document.getElementById("beamResult").innerHTML =
      `<b>Maximum Deflection:</b> ${deflection.toExponential(4)} m`;
  };

  return div;
}
