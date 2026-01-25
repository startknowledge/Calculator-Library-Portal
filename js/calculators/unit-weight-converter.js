export default function() {
  const div = document.createElement("div");

  div.innerHTML = `<h2>Weight Conversion Calculator</h2>
    <p>This calculator converts weights between Milligrams, Grams, Kilograms, and Pounds.</p>

    <label>From Unit:</label>
    <select id="fromUnitW">
      <option value="mg">Milligram</option>
      <option value="g">Gram</option>
      <option value="kg">Kilogram</option>
      <option value="lb">Pound</option>
    </select>
    <br><br>

    <label>To Unit:</label>
    <select id="toUnitW">
      <option value="mg">Milligram</option>
      <option value="g">Gram</option>
      <option value="kg">Kilogram</option>
      <option value="lb">Pound</option>
    </select>
    <br><br>

    <label>Value:</label>
    <input type="number" id="valueW" placeholder="Enter value">
    <br><br>

    <button onclick="convertWeight()">Convert</button>
    <p id="resultW"></p>

    <br>
    <p><b>Explanation:</b> This calculator converts weights from one unit to another using standard conversion factors.</p>
    <p><b>Formula:</b> <i>Converted Value = Input Value × (From Factor ÷ To Factor)</i></p>
    <p><b>Calculator is a tool:</b> Useful for scientists, engineers, students, and daily conversions.</p>
    <p><b>Relative Note:</b> Conversion is based on standard SI units and pounds as 453,592 mg.</p>
    <p><b>Based On:</b> International weight standards.</p>
    <p><b>To Use the Calculator:</b> Select the source and target units, enter the value, and click "Convert".</p>
    <p><b>Note:</b> Negative values are allowed if representing weight loss or reduction.</p>
    <p><b>It is important:</b> Use this calculator for reference only; verify critical measurements with certified instruments if necessary.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for decisions or errors based on this calculator. Use at your own discretion.</p>
    <br><hr>
  `;

  window.convertWeight = function () {
    const from = document.getElementById("fromUnitW").value;
    const to = document.getElementById("toUnitW").value;
    const value = parseFloat(document.getElementById("valueW").value);

    if (isNaN(value)) {
      document.getElementById("resultW").innerHTML = "❌ Please enter a valid number.";
      return;
    }

    const factor = {
      mg: 1,
      g: 1000,
      kg: 1000000,
      lb: 453592
    };

    const mgValue = value * factor[from];
    const converted = mgValue / factor[to];

    document.getElementById("resultW").innerHTML = `<b>Result:</b> ${converted.toFixed(4)} ${to}`;
  };

  return div;
}
