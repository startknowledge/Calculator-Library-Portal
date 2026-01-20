export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Endurance Calculator</h3>
    <p>This calculator determines the endurance of an aircraft based on fuel consumption and fuel capacity.</p>
    <form id="enduranceCalcForm">
        <label for="fuelConsumption">Fuel Consumption (gallons per hour):</label><br>
        <input type="number" id="fuelConsumption" name="fuelConsumption" required><br><br>
        <label for="fuelCapacity">Fuel Capacity (gallons):</label><br>
        <input type="number" id="fuelCapacity" name="fuelCapacity" required><br><br>
        <button type="button" onclick="calculateEndurance()">Calculate Endurance</button>
    </form>
    <div id="enduranceResult"></div>
`;

    // Function to calculate endurance
    function calculateEndurance() {
        const fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
        const fuelCapacity = parseFloat(document.getElementById("fuelCapacity").value);

        if (isNaN(fuelConsumption) || isNaN(fuelCapacity)) {
            document.getElementById("enduranceResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const endurance = fuelCapacity / fuelConsumption;

        document.getElementById("enduranceResult").innerHTML = `
            <h4>Results:</h4>
            <p>Endurance: ${endurance.toFixed(2)} hours</p>
        `;
    }
    // Attach the calculateEndurance function to the window object
    window.calculateEndurance = calculateEndurance;
    return div;
}