export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Steel Weight Calculator</h3>
      <p>Calculate the weight of steel based on diameter and length.</p>

      <label>Steel Diameter (mm)</label>
      <input type="number" id="d" placeholder="e.g. 12">

      <label>Length (m)</label>
      <input type="number" id="len" placeholder="e.g. 6">

      <button id="steelBtn">Calculate</button>
      <p id="steelResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator computes the weight of steel rods using a standard formula.</p>
      <p><b>For example:</b> A rod of diameter 12 mm and length 6 m weighs (12² × 6)/162 = 5.33 kg.</p>
      <p><b>Formula:</b> Weight (kg) = (Diameter² × Length) / 162</p>
      <p>Calculator is a tool to quickly estimate steel weight for construction planning.</p>
      <p>Relative accuracy depends on correct input of diameter (in mm) and length (in meters).</p>
      <p>To use the calculator, enter diameter and length, then click "Calculate".</p>
      <p><b>Note:</b> Ensure numeric input; negative or zero values will produce incorrect results.</p>
      <p><b>Disclaimer:</b> This calculator provides approximate values and should be used for reference only.</p>
      <br>
    </div>
  `;

  div.querySelector("#steelBtn").onclick = () => {
    const diameter = parseFloat(document.getElementById("d").value);
    const length = parseFloat(document.getElementById("len").value);

    if (!diameter || !length || diameter <= 0 || length <= 0) {
      steelResult.innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    const weight = (diameter * diameter * length) / 162;
    steelResult.innerHTML = `<b>Steel Weight:</b> ${weight.toFixed(2)} kg`;
  };

  return div;
}
