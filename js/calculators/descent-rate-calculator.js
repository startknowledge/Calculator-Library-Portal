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
    <br>
    <p><u>Explanation about Descent Rate Calculator</u> :</p>
    <p>The Descent Rate Calculator is a tool designed to help pilots and aviation enthusiasts estimate the descent rate of an aircraft based on key parameters such as thrust, weight, and atmospheric temperature. By inputting these values, users can gain insights into how these factors influence the rate at which an aircraft descends during flight.</p>
    <p>To use the calculator, simply enter the thrust in pounds, the aircraft's weight in pounds, and the ambient temperature in degrees Fahrenheit. The calculator will then process these inputs to provide an estimated descent rate in feet per minute.</p>
    <p>This tool is particularly useful for pilots during flight planning and for understanding the dynamics of aircraft performance under varying conditions. It aids in making informed decisions to ensure safe and efficient descents.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute
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