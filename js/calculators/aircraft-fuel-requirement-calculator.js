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
        <div id="fuelResult"></div><br>
        p><u>Explanation about Aircraft Fuel Requirement</u> :</p>
        <p>The Aircraft Fuel Requirement Calculator is a tool designed to help pilots and aviation professionals estimate the amount of fuel needed for a flight. 
        It takes into account several key factors including the distance to be traveled, the aircraft's fuel consumption rate, and the required reserve fuel percentage.</p>
        <p>To use the calculator, users input the total distance of the flight in nautical miles, the fuel consumption rate of the aircraft in gallons per nautical mile, and the percentage of reserve fuel they wish to carry.
        The calculator then computes the total fuel required for the flight, including both the fuel needed for the journey and the additional reserve fuel.</p>
        <p>Understanding fuel requirements is crucial for flight planning and safety. Adequate fuel ensures that the aircraft can reach its destination while also having enough reserve to handle unexpected situations such as diversions or delays.
        Pilots must comply with aviation regulations that mandate minimum fuel reserves to ensure safe operations.</p>
        <p>Overall, the Aircraft Fuel Requirement Calculator serves as a valuable resource for aviation professionals, aiding in efficient flight planning and promoting safety in air travel.</p>
        <p>For more detailed information, please refer to aviation resources or regulatory guidelines.</p>
        <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of aircraft fuel requirements. For specific details, please consult official aviation resources or regulatory bodies.</p>
        <br>
        
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

