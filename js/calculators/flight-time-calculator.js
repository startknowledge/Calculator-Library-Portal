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
    <br>
    <hr>
    <h4>References:</h4>
    <ul>
        <li>Flight Planning and Navigation, 2020 Edition, Federal Aviation Administration (FAA)</li>
        <li>International Civil Aviation Organization (ICAO) Flight Planning Standards</li>
        <li>Aircraft Performance Manual, Boeing 737-800</li>
    </ul>
</div>   
<br>
<br>
    <p><u>Explanation about Flight Time Calculator</u> :</p>
    <p>The Flight Time Calculator is a tool designed to help individuals and businesses calculate the flight time of an aircraft based on the distance and ground speed. By inputting the distance in nautical miles and the ground speed in knots, users can quickly determine the flight time in hours.</p>
    <p>The calculator uses the following formula:</p>
    <p>Flight Time (hours) = Distance (nautical miles) / Ground Speed (knots)</p>
    <p>To use the calculator, simply enter the distance in nautical miles and the ground speed in knots in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the flight time in hours.</p>
    <p>This calculator is particularly useful for pilots, flight planners, and aviation enthusiasts who need to estimate flight durations for planning purposes. It helps in scheduling, fuel planning, and overall flight management.</p>
    <p>Note: This calculator provides a simplified estimation of flight time and does not account for factors such as wind speed, air traffic control restrictions, or specific aircraft performance characteristics. For precise flight planning, always refer to official aviation resources and guidelines.</p>  
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator is intended for educational and informational purposes only. Always consult with a certified aviation professional for accurate flight planning and calculations.</p>    
    <br>
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