export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Mach Speed Calculator</h3>
    <p>This calculator determines the Mach speed of an aircraft based on true airspeed and speed of sound.</p>
    <form id="machSpeedCalcForm">
        <label for="trueAirspeed">True Airspeed (knots):</label><br>
        <input type="number" id="trueAirspeed" name="trueAirspeed" required><br><br>
        <label for="speedOfSound">Speed of Sound (knots):</label><br>
        <input type="number" id="speedOfSound" name="speedOfSound" required><br><br>
        <button type="button" onclick="calculateMachSpeed()">Calculate Mach Speed</button>
    </form>
    <div id="machSpeedResult"></div>
`;

    // Function to calculate mach speed
    function calculateMachSpeed() {
        const trueAirspeed = parseFloat(document.getElementById("trueAirspeed").value);
        const speedOfSound = parseFloat(document.getElementById("speedOfSound").value);

        if (isNaN(trueAirspeed) || isNaN(speedOfSound)) {
            document.getElementById("machSpeedResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const machSpeed = trueAirspeed / speedOfSound;

        document.getElementById("machSpeedResult").innerHTML = `
            <h4>Results:</h4>
            <p>Mach Speed: ${machSpeed.toFixed(2)}</p>
        `;
    }
    // Attach the calculateMachSpeed function to the window object
    window.calculateMachSpeed = calculateMachSpeed;
    return div;
}