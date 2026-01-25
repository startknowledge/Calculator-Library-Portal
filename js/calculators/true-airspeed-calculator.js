export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>True Airspeed (TAS) Calculator</h2>
    <p>This calculator determines the true airspeed of an aircraft based on indicated airspeed, pressure altitude, and temperature.</p>

    <label>Indicated Airspeed (knots):</label>
    <input type="number" id="indicatedAirspeed" value="120"><br><br>

    <label>Pressure Altitude (feet):</label>
    <input type="number" id="pressureAltitude" value="5000"><br><br>

    <label>Temperature (°F):</label>
    <input type="number" id="temperature" value="59"><br><br>

    <button onclick="calculateTrueAirspeed()">Calculate True Airspeed</button>
    <p id="tasResult"></p>

    <br>
    <p><b>Explanation:</b> True airspeed is the actual speed of the aircraft relative to the air mass. It accounts for altitude and temperature effects on air density.</p>
    <p><b>Formula (Simplified):</b> <i>TAS ≈ IAS + 0.02 × Pressure Altitude - 0.01 × Temperature</i></p>
    <p><b>Calculator is a tool:</b> Useful for pilots, flight planners, and aviation enthusiasts to estimate aircraft speed in different conditions.</p>
    <p><b>Relative Note:</b> This calculation is an approximation and assumes standard atmospheric conditions.</p>
    <p><b>Based On:</b> Indicated Airspeed, Pressure Altitude, and Temperature in °F.</p>
    <p><b>To Use the Calculator:</b> Enter the indicated airspeed, pressure altitude, and temperature, then click "Calculate True Airspeed".</p>
    <p><b>Note:</b> The temperature should be in °F and altitude in feet. Ensure all inputs are positive numbers.</p>
    <p><b>It is important:</b> Use this calculator for reference only. For precise flight planning, refer to official aircraft manuals and performance charts.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for any decisions made based on this calculator. Always verify critical flight data with official sources.</p>
    <br><hr>
  `;

  // Calculation function
  window.calculateTrueAirspeed = function () {
    const indicatedAirspeed = parseFloat(document.getElementById("indicatedAirspeed").value);
    const pressureAltitude = parseFloat(document.getElementById("pressureAltitude").value);
    const temperature = parseFloat(document.getElementById("temperature").value);

    if (isNaN(indicatedAirspeed) || isNaN(pressureAltitude) || isNaN(temperature)) {
      document.getElementById("tasResult").innerHTML = "❌ Please enter valid numbers.";
      return;
    }

    // Simplified formula
    const trueAirspeed = indicatedAirspeed + (0.02 * pressureAltitude) - (0.01 * temperature);

    document.getElementById("tasResult").innerHTML = `
      <b>True Airspeed (TAS):</b> ${trueAirspeed.toFixed(2)} knots
    `;
  };

  return div;
}
