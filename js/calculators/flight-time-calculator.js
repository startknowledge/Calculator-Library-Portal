export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Flight Time Calculator</h3>
    <p>This calculator determines the flight time of an aircraft based on distance and ground speed.</p>
    <form id="flightTimeCalcForm">
        <label for="distance">Distance (nautical miles):</label><br>
        <input type="number" id="distance" name="distance" required><br><br>
        <label for="groundSpeed">Ground Speed (knots):</label><br>
        <input type="number" id="groundSpeed" name="groundSpeed" required><br><br>
        <button type="button" onclick="calculateFlightTime()">Calculate Flight Time</button>
    </form>
    <div id="flightTimeResult"></div>
`;

    // Function to calculate flight time
    function calculateFlightTime() {
        const distance = parseFloat(document.getElementById("distance").value);
        const groundSpeed = parseFloat(document.getElementById("groundSpeed").value);

        if (isNaN(distance) || isNaN(groundSpeed)) {
            document.getElementById("flightTimeResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const flightTime = distance / groundSpeed;

        document.getElementById("flightTimeResult").innerHTML = `
            <h4>Results:</h4>
            <p>Flight Time: ${flightTime.toFixed(2)} hours</p>
        `;
    }
    // Attach the calculateFlightTime function to the window object
    window.calculateFlightTime = calculateFlightTime;
    return div;
}