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
    <br>
    <p><u>Explanation about Endurance Calculator</u> :</p>
    <p>The Endurance Calculator is a tool designed to help pilots and aviation enthusiasts estimate the endurance of an aircraft based on its fuel consumption rate and fuel capacity. Endurance refers to the maximum time an aircraft can remain airborne on a full tank of fuel under specific conditions.</p>
    <p>To use the calculator, simply input the fuel consumption rate in gallons per hour and the total fuel capacity in gallons. After clicking the "Calculate Endurance" button, the tool will compute and display the endurance in hours.</p>
    <p>This calculator is particularly useful for flight planning, allowing pilots to assess how long they can stay aloft before needing to refuel. By understanding their aircraft's endurance, pilots can make informed decisions about flight routes, altitudes, and fuel management strategies.</p>
    <p>In summary, the Endurance Calculator is a valuable resource for anyone involved in aviation, providing clarity on flight duration capabilities and aiding in effective flight planning.</p>
    <p><b>Note:</b> This calculator provides an estimate of endurance based on the inputs provided and assumes constant fuel consumption rates. Actual endurance may vary due to factors such as weather conditions, aircraft weight, and flight maneuvers.</p>
    <p>For personalized advice and detailed flight planning, consider consulting with a certified flight instructor or aviation expert.</p> 
    <p>Happy Calculating!</p>
    <P>/-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified aviation professional for critical flight planning decisions.</p>
    <br>
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