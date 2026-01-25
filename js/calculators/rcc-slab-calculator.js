export default function () {
  const div = document.createElement("div");

  div.innerHTML = `    
    <h3>Concrete Slab Calculator</h3>

    <label>Length (Feet)</label>
    <input id="l" value="10">

    <label>Width (Feet)</label>
    <input id="w" value="10">

    <label>Thickness (Inches)</label>
    <input id="t" value="5">

    <label>Concrete Grade</label>
    <select id="grade">
      <option value="M15">M15 (1 : 2 : 4)</option>
      <option value="M20" selected>M20 (1 : 1.5 : 3)</option>
      <option value="M25">M25 (1 : 1 : 2)</option>
    </select>

    <button onclick="calcSlab()">Calculate</button>
    <div id="slabResult"></div>

    <hr>

    <h4>Explanation</h4>
    <p>
      This calculator is a tool used to estimate the quantity of concrete
      materials required for casting a slab such as a roof slab, floor slab,
      or platform. It calculates cement, sand, and aggregate based on slab size
      and selected concrete grade.
    </p>

    <h4>Formula</h4>
    <p>
      Concrete Volume = Length × Width × Thickness<br>
      Dry Volume = Wet Volume × 1.54<br>
      Material Quantity = (Dry Volume × Ratio) ÷ Total Ratio
    </p>

    <h4>Grade selector (M15 / M20 / M25)<BR>Grade Ratios</h4>
    <p>
      M15 → 1 : 2 : 4<br>
      M20 → 1 : 1.5 : 3<br>
      M25 → 1 : 1 : 2
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter slab length and width in feet.<br>
      2. Enter slab thickness in inches.<br>
      3. Select the concrete grade.<br>
      4. Click on the Calculate button to get material quantities.
    </p>

    <h4><P><B><U>Example Output</U></B><BR> For 10 ft × 10 ft × 5 inch slab:<BR></p></h4>
    <p>
      For a 10 ft × 10 ft × 5 inch slab (M20 grade):<br>
      Concrete Volume ≈ 41.67 ft³<br>
      Cement ≈ 9.26 bags<br>
      Sand ≈ 32.0 ft³<br>
      Aggregate ≈ 63.0 ft³
      
    Concrete Volume: 1.18 m³<BR>
    Cement: 9.26 bags<BR>
    Sand: 0.32 m³<BR>
    Aggregate (Sariya/Stone): 0.63 m³
    <BR>
      </p>

    <h4>Note</h4>
    <p>
      Cement calculation is based on 1 bag ≈ 1.25 ft³.
      Actual site requirement may vary due to wastage and workmanship.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an approximate estimate for planning purposes only.
      Actual material consumption may vary based on site conditions,
      workmanship, and construction practices.
    </p>
    <br>     
  `;

  window.calcSlab = function () {
    let l = +document.getElementById("l").value;
    let w = +document.getElementById("w").value;
    let tInch = +document.getElementById("t").value;
    let grade = document.getElementById("grade").value;
    // Convert thickness inch → feet
    let t = tInch / 12; // inch → feet
    // Concrete volume in cubic feet
    let volumeFt = l * w * t;
    // Dry volume factor
    let dryVolume = volumeFt * 1.54;
    // Mix ratios
    let ratios = {
      M15: { c: 1, s: 2, a: 4 },
      M20: { c: 1, s: 1.5, a: 3 },
      M25: { c: 1, s: 1, a: 2 }
    };

    let r = ratios[grade];
    let total = r.c + r.s + r.a;

    let cementFt = (dryVolume * r.c) / total;
    let sandFt = (dryVolume * r.s) / total;
    let aggFt = (dryVolume * r.a) / total;

    let cementBags = cementFt / 1.25;

    document.getElementById("slabResult").innerHTML = `
      <b>Concrete Volume:</b> ${volumeFt.toFixed(2)} ft³<br><br>
      <b>Cement:</b> ${cementBags.toFixed(2)} bags<br>
      <b>Sand:</b> ${sandFt.toFixed(2)} ft³<br>
      <b>Aggregate (Stone):</b> ${aggFt.toFixed(2)} ft³
    `;
  };

  return div;   

}