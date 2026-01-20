export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Convert land area between square feet, square meter, square inch, and acres</h3>
    <h4>Area = Width × Length</h4><br>

    <label>Width of Land</label>
    <input type="number" id="width" value="20">

    <label>Length of Land</label>
    <input type="number" id="length" value="50">

    <label>Unit</label>
    <select id="unit">
      <option value="m">Meter</option>
      <option value="ft">Feet</option>      
      <option value="in">Inch</option>
    </select>

    <button onclick="convertArea()">Calculate</button>

    <p id="areaResult"></p>
    <div><h3><b> <u>Note</u>:</b> 1 sq ft = 0.092903 sq meter, 1 sq ft = 144 sq inch, 1 acre = 43,560 sq ft</h3></div>
  `;

  window.convertArea = function () {
    let w = +document.getElementById("width").value;
    let l = +document.getElementById("length").value;
    let unit = document.getElementById("unit").value;

    // convert width & length to feet
    if (unit === "m") {
      w *= 3.28084;
      l *= 3.28084;
    }
    if (unit === "in") {
      w /= 12;
      l /= 12;
    }

    let sqft = w * l;
    let sqm = sqft * 0.092903;
    let sqinch = sqft * 144;
    let acres = sqft / 43560;

    document.getElementById("areaResult").innerHTML = `
      <b>Area in Square Meter:</b> ${sqm.toFixed(2)} sq mtr<br>
      <b>Area in Square Feet:</b> ${sqft.toFixed(2)} sq ft<br>      
      <b>Area in Square Inch:</b> ${sqinch.toFixed(2)} sq in<br>
      <b>Area in Acres:</b> ${acres.toFixed(4)} acres
    `;
  };

  return div;
}
