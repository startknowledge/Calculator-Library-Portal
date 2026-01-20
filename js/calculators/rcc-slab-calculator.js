export default function () {
  const div = document.createElement("div");

  div.innerHTML = `    
    <label>Length (Feet)</label>
    <input id="l" value="10">

    <label>Width (Feet)</label>
    <input id="w" value="10">

    <label>Thickness (Inches)</label>
    <input id="t" value="5">

    <label>Concrete Grade</label>
    <select id="grade">
      <option value="M15">M15 (1:2:4)</option>
      <option value="M20" selected>M20 (1:1.5:3)</option>
      <option value="M25">M25 (1:1:2)</option>
    </select>

    <button onclick="calcSlab()">Calculate</button>
    <div id="slabResult"></div>

    <P><B><U>Example Output</U></B><BR> For 10 ft × 10 ft × 5 inch slab:<BR>
    Concrete Volume: 1.18 m³<BR>
    Cement: 9.26 bags<BR>
    Sand: 0.32 m³<BR>
    Aggregate (Sariya/Stone): 0.63 m³
    <BR>
    Grade selector (M15 / M20 / M25)<BR>
    Grade Ratios:<BR>
    M15 → 1 : 2 : 4<BR>
    M20 → 1 : 1.5 : 3<BR>
    M25 → 1 : 1 : 2</P>
  `;
  

  window.calcSlab = function () {
    let l = +document.getElementById("l").value;
    let w = +document.getElementById("w").value;
    let tInch = +document.getElementById("t").value;
    let grade = document.getElementById("grade").value;

    // Convert thickness inch → feet
    let t = tInch / 12;

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

    // 1 cement bag ≈ 1.25 ft³
    let cementBags = cementFt / 1.25;

    document.getElementById("slabResult").innerHTML = `
      <b>Concrete Volume:</b> ${volumeFt.toFixed(2)} ft³<br><br>

      <b>Cement:</b> ${cementBags.toFixed(2)} bags<br>
      <b>Sand:</b> ${sandFt.toFixed(2)} ft³<br>
      <b>Aggregate (Sariya/Stone):</b> ${aggFt.toFixed(2)} ft³
    `;
  };

  return div;
}