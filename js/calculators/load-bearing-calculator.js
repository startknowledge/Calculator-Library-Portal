export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Structural Load Calculator</h3>

    <p>
      This calculator helps determine the total structural load
      based on area and load per square meter.
    </p>

    <label>Area (m²)</label>
    <input type="number" id="area" value="50" min="0">

    <label>Load per m² (kg)</label>
    <input type="number" id="load" value="400" min="0">

    <button onclick="calcLoad()">Calculate</button>

    <p id="loadResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>Total Load = Area × Load per m²</p>

    <p><b>Example:</b></p>
    <p>
      Area = 50 m²<br>
      Load per m² = 400 kg<br>
      <b>Total Load = 20,000 kg</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for building design, floor load estimation,
      warehouse planning, and structural safety analysis.
    </p>

    <p><b>Disclaimer:</b>
      This calculator provides an estimate only.
      Always consult a structural engineer for safety-critical designs.
    </p>
  `;

  window.calcLoad = function () {
    const area = parseFloat(document.getElementById("area").value);
    const load = parseFloat(document.getElementById("load").value);

    if (isNaN(area) || isNaN(load) || area <= 0 || load <= 0) {
      document.getElementById("loadResult").innerHTML =
        "<b>Please enter valid positive values.</b>";
      return;
    }

    const totalLoad = area * load;

    document.getElementById("loadResult").innerHTML =
      `<b>Total Load:</b> ${totalLoad.toLocaleString()} kg`;
  };

  return div;
}
