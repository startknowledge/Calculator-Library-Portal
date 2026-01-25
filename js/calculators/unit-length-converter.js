export default function() {
  const div = document.createElement("div");

  div.innerHTML = `<h2>Length Conversion Calculator</h2>
    <p>This calculator converts a length value from one unit to another using standard conversion factors.</p>

    <label>From Unit:</label>
    <select id="fromUnitL">
      <option value="mm">Millimeter</option>
      <option value="cm">Centimeter</option>
      <option value="m">Meter</option>
      <option value="km">Kilometer</option>
      <option value="inch">Inch</option>
      <option value="ft">Feet</option>
    </select>
    <br><br>

    <label>To Unit:</label>
    <select id="toUnitL">
      <option value="mm">Millimeter</option>
      <option value="cm">Centimeter</option>
      <option value="m">Meter</option>
      <option value="km">Kilometer</option>
      <option value="inch">Inch</option>
      <option value="ft">Feet</option>
    </select>
    <br><br>

    <label>Value:</label>
    <input type="number" id="valueL" placeholder="Enter value">
    <br><br>  
    <button onclick="convertLength()">Convert</button>

    <p id="resultL"></p>

    <br>
    <p><b>Explanation:</b> This calculator converts lengths between different units by using a common base (millimeters) for calculations.</p>
    <p><b>Formula:</b> <i>Converted Value = Input Value × (From Factor ÷ To Factor)</i></p>
    <p><b>Calculator is a tool:</b> Useful for engineers, students, and anyone needing quick unit conversions.</p>
    <p><b>Relative Note:</b> Conversion factors are based on standard SI and imperial units.</p>
    <p><b>Based On:</b> Standard metric and imperial length units.</p>
    <p><b>To Use the Calculator:</b> Select the source and target units, enter the value, and click "Convert".</p>
    <p><b>Note:</b> Ensure the value is numeric. Negative values are accepted for relative measurements.</p>
    <p><b>It is important:</b> This tool is for general reference and may not account for context-specific adjustments.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for any errors or decisions based on this calculator. Always verify critical measurements manually if necessary.</p>
    <br><hr>
  `;

  window.convertLength = function () {
    let from = document.getElementById("fromUnitL").value;
    let to = document.getElementById("toUnitL").value;
    let value = parseFloat(document.getElementById("valueL").value);

    if (isNaN(value)) {
      document.getElementById("resultL").innerHTML = "❌ Please enter a valid number.";
      return;
    }

    const factor = {
      mm: 1,
      cm: 10,
      m: 1000,
      km: 1000000,
      inch: 25.4,
      ft: 304.8
    };

    let mmValue = value * factor[from];
    let converted = mmValue / factor[to];

    document.getElementById("resultL").innerHTML = `<b>Result:</b> ${converted}`;
  };

  return div;
}
