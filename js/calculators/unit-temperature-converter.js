export default function() {
  const div = document.createElement("div");

  div.innerHTML = `<h2>Temperature Conversion Calculator</h2>
    <p>This calculator converts temperatures between Celsius, Fahrenheit, and Kelvin.</p>

    <label>From Unit:</label>
    <select id="tempFrom">
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
      <option value="K">Kelvin</option>
    </select>
    <br><br>

    <label>To Unit:</label>
    <select id="tempTo">
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
      <option value="K">Kelvin</option>
    </select>
    <br><br>

    <label>Value:</label>
    <input type="number" id="tempValue" placeholder="Enter value">
    <br><br>

    <button onclick="convertTemp()">Convert</button>
    <p id="tempResult"></p>

    <br>
    <p><b>Explanation:</b> This calculator converts temperatures from one unit to another using standard conversion formulas.</p>
    <p><b>Formula:</b></p>
    <ul>
      <li>Celsius to Fahrenheit: F = (C × 9/5) + 32</li>
      <li>Fahrenheit to Celsius: C = (F - 32) × 5/9</li>
      <li>Celsius to Kelvin: K = C + 273.15</li>
      <li>Kelvin to Celsius: C = K - 273.15</li>
    </ul>
    <p><b>Calculator is a tool:</b> Useful for scientists, students, engineers, and daily temperature conversions.</p>
    <p><b>Relative Note:</b> This tool assumes standard temperature scales and does not account for local measurement anomalies.</p>
    <p><b>Based On:</b> Standard international temperature scales (Celsius, Fahrenheit, Kelvin).</p>
    <p><b>To Use the Calculator:</b> Select the source and target units, enter the temperature, and click "Convert".</p>
    <p><b>Note:</b> Negative values are valid for Celsius and Fahrenheit.</p>
    <p><b>It is important:</b> This tool is for reference only. Check critical measurements with certified instruments if needed.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for decisions based on this calculator. Use at your own discretion.</p>
    <br><hr>
  `;

  window.convertTemp = function () {
    const from = document.getElementById("tempFrom").value;
    const to = document.getElementById("tempTo").value;
    const value = parseFloat(document.getElementById("tempValue").value);

    if (isNaN(value)) {
      document.getElementById("tempResult").innerHTML = "❌ Please enter a valid number.";
      return;
    }

    let C; // Convert input to Celsius first
    if (from === "C") C = value;
    if (from === "F") C = (value - 32) * 5/9;
    if (from === "K") C = value - 273.15;

    let result;
    if (to === "C") result = C;
    if (to === "F") result = (C * 9/5) + 32;
    if (to === "K") result = C + 273.15;

    document.getElementById("tempResult").innerHTML = `<b>Result:</b> ${result.toFixed(2)} ${to}`;
  };

  return div;
}
