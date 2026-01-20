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