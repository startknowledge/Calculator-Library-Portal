export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
        <h3>Aircraft Fuel Requirement Calculator</h3>
        <p>This calculator estimates the fuel required for an aircraft based on distance, fuel consumption rate, and reserve fuel percentage.</p>
        <form id="fuelCalcForm">
            <label for="distance">Distance (in nautical miles):</label><br>     
            <input type="number" id="distance" name="distance" required><br><br>
            <label for="consumptionRate">Fuel Consumption Rate (gallons per nautical mile):</label><br>
            <input type="number" id="consumptionRate" name="consumptionRate" step="0.01" required><br><br>
            <label for="reserveFuel">Reserve Fuel Percentage (%):</label><br>
            <input type="number" id="reserveFuel" name="reserveFuel" step="0.01" required><br><br>
            <button type="button" onclick="calculateFuel()">Calculate Fuel Requirement</button>
        </form>
        <div id="fuelResult"></div>
    `;

    // Function to calculate fuel requirement
    function calculateFuel() {
        const distance = parseFloat(document.getElementById("distance").value);
        const consumptionRate = parseFloat(document.getElementById("consumptionRate").value);
        const reserveFuelPercentage = parseFloat(document.getElementById("reserveFuel").value);

        if (isNaN(distance) || isNaN(consumptionRate) || isNaN(reserveFuelPercentage)) {
            document.getElementById("fuelResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        const fuelRequired = distance * consumptionRate;
        const reserveFuel = (fuelRequired * reserveFuelPercentage) / 100;
        const totalFuelRequired = fuelRequired + reserveFuel;

        document.getElementById("fuelResult").innerHTML = `
            <h4>Results:</h4>
            <p>Fuel Required for Flight: ${fuelRequired.toFixed(2)} gallons</p>
            <p>Reserve Fuel: ${reserveFuel.toFixed(2)} gallons</p>
            <p>Total Fuel Required: ${totalFuelRequired.toFixed(2)} gallons</p>
        `;
    }
    // Attach the calculateFuel function to the window object
    window.calculateFuel = calculateFuel;
    return div;
}

