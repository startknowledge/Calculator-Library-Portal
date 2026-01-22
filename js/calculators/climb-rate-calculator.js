export default function () {
  const div = document.createElement("div");
    div.innerHTML = `   
    <h3>Climb Rate Calculator</h3>
    <p>This calculator determines the climb rate of an aircraft based on thrust, weight, and atmospheric conditions.</p>
    <form id="climbRateCalcForm">
        <label for="thrust">Thrust (lbs):</label><br>
        <input type="number" id="thrust" name="thrust" required><br><br>
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>
        <label for="temperature">Temperature (°F):</label><br>
        <input type="number" id="temperature" name="temperature" required><br><br>
        <button type="button" onclick="calculateClimbRate()">Calculate Climb Rate</button>
    </form>
    <div id="climbRateResult"></div>
    <br>
    <p><u>Explanation about Climb Rate Calculator</u> :</p>
    <p>The Climb Rate Calculator is designed to help pilots and aviation enthusiasts estimate the climb rate of an aircraft based on key parameters such as thrust, weight, and temperature. Climb rate is a critical performance metric that indicates how quickly an aircraft can gain altitude.</p>
    <p>To use the calculator, input the thrust produced by the aircraft's engines in pounds (lbs), the total weight of the aircraft in pounds (lbs), and the ambient temperature in degrees Fahrenheit (°F). The calculator will then compute the estimated climb rate in feet per minute (fpm).</p>
    <p>Understanding climb rate is essential for flight planning and safety, as it affects takeoff performance, obstacle clearance, and overall flight efficiency. Pilots can use this information to make informed decisions during various phases of flight.</p>
    <p>Please note that this calculator provides an estimate based on simplified assumptions and may not account for all variables affecting climb performance, such as altitude, humidity, and aircraft configuration. For precise performance data, refer to the aircraft's official performance charts and manuals.</p>
    <p>Disclaimer: This tool is intended for educational and informational purposes only and should not be used as a substitute for professional aviation advice or official aircraft performance data.</p>
    <br>
`;

    // Function to calculate climb rate
    function calculateClimbRate() {
        const thrust = parseFloat(document.getElementById("thrust").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const temperature = parseFloat(document.getElementById("temperature").value);

        if (isNaN(thrust) || isNaN(weight) || isNaN(temperature)) {
            document.getElementById("climbRateResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const climbRate = (thrust - weight) / 100 + (0.01 * temperature);

        document.getElementById("climbRateResult").innerHTML = `
            <h4>Results:</h4>
            <p>Climb Rate: ${climbRate.toFixed(2)} feet per minute</p>
        `;
    }
    // Attach the calculateClimbRate function to the window object
    window.calculateClimbRate = calculateClimbRate;
    return div;
}