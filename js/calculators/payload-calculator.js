export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Payload Calculator</h3>
    <p>This calculator determines the payload of an aircraft based on weight and fuel capacity.</p>
    <form id="payloadCalcForm">
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>
        <label for="fuelCapacity">Fuel Capacity (gallons):</label><br>
        <input type="number" id="fuelCapacity" name="fuelCapacity" required><br><br>
        <button type="button" onclick="calculatePayload()">Calculate Payload</button>
    </form>
    <div id="payloadResult"></div>
`;

    // Function to calculate payload
    function calculatePayload() {
        const weight = parseFloat(document.getElementById("weight").value);
        const fuelCapacity = parseFloat(document.getElementById("fuelCapacity").value);

        if (isNaN(weight) || isNaN(fuelCapacity)) {
            document.getElementById("payloadResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const payload = weight - (fuelCapacity * 6.7); // Assuming 6.7 lbs per gallon of fuel

        document.getElementById("payloadResult").innerHTML = `
            <h4>Results:</h4>
            <p>Payload: ${payload.toFixed(2)} lbs</p>
        `;
    }
    // Attach the calculatePayload function to the window object
    window.calculatePayload = calculatePayload;
    return div;
}