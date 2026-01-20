export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Rate of Descent Calculator</h3>
    <p>This calculator determines the rate of descent of an aircraft based on vertical speed and time.</p>
    <form id="rateOfDescentCalcForm">
        <label for="verticalSpeed">Vertical Speed (feet per minute):</label><br>
        <input type="number" id="verticalSpeed" name="verticalSpeed" required><br><br>
        <label for="time">Time (minutes):</label><br>
        <input type="number" id="time" name="time" required><br><br>
        <button type="button" onclick="calculateRateOfDescent()">Calculate Rate of Descent</button>
    </form>
    <div id="rateOfDescentResult"></div>
`;

    // Function to calculate rate of descent
    function calculateRateOfDescent() {
        const verticalSpeed = parseFloat(document.getElementById("verticalSpeed").value);
        const time = parseFloat(document.getElementById("time").value);

        if (isNaN(verticalSpeed) || isNaN(time)) {
            document.getElementById("rateOfDescentResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const rateOfDescent = verticalSpeed / time;

        document.getElementById("rateOfDescentResult").innerHTML = `
            <h4>Results:</h4>
            <p>Rate of Descent: ${rateOfDescent.toFixed(2)} feet per minute</p>
        `;
    }
    // Attach the calculateRateOfDescent function to the window object
    window.calculateRateOfDescent = calculateRateOfDescent;
    return div;
}