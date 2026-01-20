export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Descent Rate Calculator</h3>
    <p>This calculator determines the descent rate of an aircraft based on thrust, weight, and atmospheric conditions.</p>
    <form id="descentRateCalcForm">
        <label for="thrust">Thrust (lbs):</label><br>
        <input type="number" id="thrust" name="thrust" required><br><br>
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>
        <label for="temperature">Temperature (°F):</label><br>
        <input type="number" id="temperature" name="temperature" required><br><br>
        <button type="button" onclick="calculateDescentRate()">Calculate Descent Rate</button>
    </form>
    <div id="descentRateResult"></div>
`;

    // Function to calculate descent rate
    function calculateDescentRate() {
        const thrust = parseFloat(document.getElementById("thrust").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const temperature = parseFloat(document.getElementById("temperature").value);

        if (isNaN(thrust) || isNaN(weight) || isNaN(temperature)) {
            document.getElementById("descentRateResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const descentRate = (thrust - weight) / 100 - (0.01 * temperature);

        document.getElementById("descentRateResult").innerHTML = `
            <h4>Results:</h4>
            <p>Descent Rate: ${descentRate.toFixed(2)} feet per minute</p>
        `;
    }
    // Attach the calculateDescentRate function to the window object
    window.calculateDescentRate = calculateDescentRate;
    return div;
}