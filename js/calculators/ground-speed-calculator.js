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
    <br>
    <p>The Ground Speed Calculator helps pilots and aviation enthusiasts determine the actual speed of an aircraft over the ground by considering both the true airspeed and the wind speed. By inputting these values, users can calculate the ground speed in knots.</p>
    <p>This calculator is particularly useful for flight planning, navigation, and performance analysis. Understanding ground speed is essential for accurate time estimates, fuel calculations, and overall flight efficiency.</p> 
    <p><b>Note:</b> Ensure that the true airspeed and wind speed inputs are accurate to get a reliable ground speed.</p>
    <p><b>Example:</b> For a true airspeed of 150 knots and a wind speed of 20 knots, the ground speed would be 170 knots.</p>
    <p><b>Formula:</b> Ground Speed = True Airspeed + Wind Speed</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual ground speed may vary based on additional factors such as wind direction, aircraft weight, and atmospheric conditions.</p>
    <br>
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