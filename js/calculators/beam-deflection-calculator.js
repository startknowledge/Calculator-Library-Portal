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
    <p id="beamResult"></p><br>
    <p><u>Explanation about Beam Deflection Calculation</u> :</p>
    <p>The maximum deflection of a simply supported beam with a central load can be calculated using the formula:</p> 
    <p><b>Deflection (δ) = (W × L³) / (48 × E × I)</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>W</b> is the load applied at the center of the beam (in Newtons).</li>
      <li><b>L</b> is the length of the beam (in meters).</li>
      <li><b>E</b> is the modulus of elasticity of the beam material (in Pascals).</li>
      <li><b>I</b> is the moment of inertia of the beam's cross-sectional area (in meters to the fourth power).</li>
    </ul>
    <p>For example, if a beam has a load of 10 kN (10000 N), length of 5 m, elasticity of 200 GPa (200 × 10⁹ Pa), and moment of inertia of 0.0001 m⁴, the deflection would be calculated as follows:</p>
    <p>Deflection = (10000 N × (5 m)³) / (48 × 200 × 10⁹ Pa × 0.0001 m⁴) = 0.0002604 m</p>
    <p>This means the maximum deflection of the beam under the given load is approximately 0.0002604 meters (or 0.2604 mm).</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of beam deflection calculation. For specific engineering applications, please consult a qualified structural engineer or refer to official
    technical resources.</p>
    <br>


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
