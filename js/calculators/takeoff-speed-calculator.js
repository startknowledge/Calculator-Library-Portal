export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Takeoff Speed Calculator</h3>
    <p>This calculator determines the takeoff speed of an aircraft based on weight, runway length, and atmospheric conditions.</p>
    <form id="takeoffCalcForm">
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>
        <label for="runwayLength">Runway Length (ft):</label><br>
        <input type="number" id="runwayLength" name="runwayLength" required><br><br>
        <label for="temperature">Temperature (°F):</label><br>
        <input type="number" id="temperature" name="temperature" required><br><br>
        <button type="button" onclick="calculateTakeoffSpeed()">Calculate Takeoff Speed</button>
    </form>
    <div id="takeoffResult"></div>
`;

    // Function to calculate takeoff speed
    function calculateTakeoffSpeed() {
        const weight = parseFloat(document.getElementById("weight").value);
        const runwayLength = parseFloat(document.getElementById("runwayLength").value);
        const temperature = parseFloat(document.getElementById("temperature").value);

        if (isNaN(weight) || isNaN(runwayLength) || isNaN(temperature)) {
            document.getElementById("takeoffResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const takeoffSpeed = 100 + (0.01 * weight) + (0.02 * runwayLength) - (0.01 * temperature);

        document.getElementById("takeoffResult").innerHTML = `
            <h4>Results:</h4>
            <p>Takeoff Speed: ${takeoffSpeed.toFixed(2)} knots</p>
        `;
    }
    // Attach the calculateTakeoffSpeed function to the window object
    window.calculateTakeoffSpeed = calculateTakeoffSpeed;
    return div;
}