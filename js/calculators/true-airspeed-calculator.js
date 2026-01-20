export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
        <h3>True Airspeed Calculator</h3>
        <p>This calculator determines the true airspeed of an aircraft based on indicated airspeed, pressure altitude, and temperature.</p>
        <form id="tasCalcForm">
            <label for="indicatedAirspeed">Indicated Airspeed (knots):</label><br>
            <input type="number" id="indicatedAirspeed" name="indicatedAirspeed" required><br><br>
            <label for="pressureAltitude">Pressure Altitude (feet):</label><br>
            <input type="number" id="pressureAltitude" name="pressureAltitude" required><br><br>
            <label for="temperature">Temperature (°F):</label><br>
            <input type="number" id="temperature" name="temperature" required><br><br>
            <button type="button" onclick="calculateTrueAirspeed()">Calculate True Airspeed</button>
        </form>
        <div id="tasResult"></div>
    `;

    // Function to calculate true airspeed
    function calculateTrueAirspeed() {
        const indicatedAirspeed = parseFloat(document.getElementById("indicatedAirspeed").value);
        const pressureAltitude = parseFloat(document.getElementById("pressureAltitude").value);
        const temperature = parseFloat(document.getElementById("temperature").value);

        if (isNaN(indicatedAirspeed) || isNaN(pressureAltitude) || isNaN(temperature)) {
            document.getElementById("tasResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const trueAirspeed = indicatedAirspeed + (0.02 * pressureAltitude) - (0.01 * temperature);

        document.getElementById("tasResult").innerHTML = `
            <h4>Results:</h4>
            <p>True Airspeed: ${trueAirspeed.toFixed(2)} knots</p>
        `;
    }
    // Attach the calculateTrueAirspeed function to the window object
    window.calculateTrueAirspeed = calculateTrueAirspeed;
    return div;
}