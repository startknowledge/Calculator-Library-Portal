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
    <br>
    <p>This Land Area Converter helps you convert the area of a piece of land between different units including square feet, square meters, square inches, and acres. By entering the width and length of the land along with the unit of measurement, users can quickly determine the area in various units.</p>
    <p>This calculator is useful for real estate professionals, land surveyors, architects, and anyone involved in land measurement or property transactions.</p>
    <p>Ensure that all inputs are accurate to get reliable area conversions.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the width and length of the land in the respective fields, select the unit of measurement (meters, feet, or inches), and click the "Calculate" button to see the area displayed in square meters, square feet, square inches, and acres.</p>
    <p><b>Formula:</b> Area = Width × Length</p>
    <p><b>Example:</b> If you have a piece of land that is 20 feet wide and 50 feet long, the area would be: 20 × 50 = 1000 sq ft. This converts to approximately 92.90 sq meters, 144000 sq inches, and 0.02296 acres.</p>
    <p><b>Note:</b> This calculator provides an estimate and should be used for planning purposes. Actual measurements may vary based on additional factors such as terrain and measurement accuracy.</p>
    <p>For more detailed land measurement, consider consulting with a professional surveyor or using specialized land measurement tools.</p>
    <p>Feel free to share this tool with colleagues or friends who might find it useful!</p>
    <p>Disclaimer: This calculator is provided for informational purposes only and does not constitute professional advice. Users should verify calculations and consider all relevant factors when measuring land area.</p>
    <br>
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
