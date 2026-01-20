export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Rate of Climb Calculator</h3>
    <p>This calculator determines the rate of climb of an aircraft based on vertical speed and time.</p>
    <form id="rateOfClimbCalcForm">
        <label for="verticalSpeed">Vertical Speed (feet per minute):</label><br>
        <input type="number" id="verticalSpeed" name="verticalSpeed" required><br><br>
        <label for="time">Time (minutes):</label><br>
        <input type="number" id="time" name="time" required><br><br>
        <button type="button" onclick="calculateRateOfClimb()">Calculate Rate of Climb</button>
    </form>
    <div id="rateOfClimbResult"></div>
`;

    // Function to calculate rate of climb
    function calculateRateOfClimb() {
        const verticalSpeed = parseFloat(document.getElementById("verticalSpeed").value);
        const time = parseFloat(document.getElementById("time").value);

        if (isNaN(verticalSpeed) || isNaN(time)) {
            document.getElementById("rateOfClimbResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const rateOfClimb = verticalSpeed / time;

        document.getElementById("rateOfClimbResult").innerHTML = `
            <h4>Results:</h4>
            <p>Rate of Climb: ${rateOfClimb.toFixed(2)} feet per minute</p>
        `;
    }
    // Attach the calculateRateOfClimb function to the window object
    window.calculateRateOfClimb = calculateRateOfClimb;
    return div;
}