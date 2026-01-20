export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Runway Length Calculator</h3>
    <p>This calculator determines the required runway length for an aircraft based on takeoff speed and acceleration.</p>
    <form id="runwayLengthCalcForm">
        <label for="takeoffSpeed">Takeoff Speed (knots):</label><br>
        <input type="number" id="takeoffSpeed" name="takeoffSpeed" required><br><br>
        <label for="acceleration">Acceleration (feet per second squared):</label><br>
        <input type="number" id="acceleration" name="acceleration" required><br><br>
        <button type="button" onclick="calculateRunwayLength()">Calculate Runway Length</button>
    </form>
    <div id="runwayLengthResult"></div>
`;

    // Function to calculate runway length
    function calculateRunwayLength() {
        const takeoffSpeed = parseFloat(document.getElementById("takeoffSpeed").value);
        const acceleration = parseFloat(document.getElementById("acceleration").value);

        if (isNaN(takeoffSpeed) || isNaN(acceleration)) {
            document.getElementById("runwayLengthResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const runwayLength = (takeoffSpeed * takeoffSpeed) / (2 * acceleration);

        document.getElementById("runwayLengthResult").innerHTML = `
            <h4>Results:</h4>
            <p>Required Runway Length: ${runwayLength.toFixed(2)} feet</p>
        `;
    }
    // Attach the calculateRunwayLength function to the window object
    window.calculateRunwayLength = calculateRunwayLength;
    return div;
}