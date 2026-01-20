export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Ground Speed Calculator</h3>
    <p>This calculator determines the ground speed of an aircraft based on true airspeed and wind speed.</p>
    <form id="groundSpeedCalcForm">
        <label for="trueAirspeed">True Airspeed (knots):</label><br>
        <input type="number" id="trueAirspeed" name="trueAirspeed" required><br><br>
        <label for="windSpeed">Wind Speed (knots):</label><br>
        <input type="number" id="windSpeed" name="windSpeed" required><br><br>
        <button type="button" onclick="calculateGroundSpeed()">Calculate Ground Speed</button>
    </form>
    <div id="groundSpeedResult"></div>
`;

    // Function to calculate ground speed
    function calculateGroundSpeed() {
        const trueAirspeed = parseFloat(document.getElementById("trueAirspeed").value);
        const windSpeed = parseFloat(document.getElementById("windSpeed").value);

        if (isNaN(trueAirspeed) || isNaN(windSpeed)) {
            document.getElementById("groundSpeedResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const groundSpeed = trueAirspeed + windSpeed;

        document.getElementById("groundSpeedResult").innerHTML = `
            <h4>Results:</h4>
            <p>Ground Speed: ${groundSpeed.toFixed(2)} knots</p>
        `;
    }
    // Attach the calculateGroundSpeed function to the window object
    window.calculateGroundSpeed = calculateGroundSpeed;
    return div;
}