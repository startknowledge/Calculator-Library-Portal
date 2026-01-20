export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
      
        
    <form id="rangeCalcForm">
        <label for="fuelCapacity">Fuel Capacity (gallons):</label><br>
        <input type="number" id="fuelCapacity" name="fuelCapacity" required><br><br>
        <label for="fuelConsumptionRate">Fuel Consumption Rate (gallons per hour):</label><br>
        <input type="number" id="fuelConsumptionRate" name="fuelConsumptionRate" required><br><br>
        <button type="button" onclick="calculateRange()">Calculate Range</button>
    </form>
    <div id="rangeResult"></div>
`;
    // Function to calculate range
    function calculateRange() {
        const fuelCapacity = parseFloat(document.getElementById("fuelCapacity").value);
        const fuelConsumptionRate = parseFloat(document.getElementById("fuelConsumptionRate").value);
        if (isNaN(fuelCapacity) || isNaN(fuelConsumptionRate) || fuelConsumptionRate === 0) {
            document.getElementById("rangeResult").innerHTML = "Please enter valid numbers.";
            return;
        }   
        // Simplified calculation for demonstration purposes
        const endurance = fuelCapacity / fuelConsumptionRate;
        const averageSpeed = 150; // Assume an average speed of 150 mph for calculation
        const range = endurance * averageSpeed;
        document.getElementById("rangeResult").innerHTML = `
            <h3>Results:</h3>
            <p>Range: ${range.toFixed(2)} miles</p>
            <br><h3><b><u>Note</u>:</b>"Range" in aviation means the maximum distance an aircraft can fly on a full tank of fuel, a critical factor for flight planning, while Range Aviation (also linked to Lanyi Aviation) is a company providing private jet charters, aircraft management, and acquisition services, focusing on personalized, high-end travel. The physics of range involves balancing fuel burn with speed, typically maximizing the lift-to-drag ratio (L/D) for distance, contrasting with endurance (maximum time in air), which requires minimum power. 
            Aviation Range (Physics) <b><u>Definition</u>:</b> The farthest an aircraft can fly from takeoff to landing, limited by fuel capacity, weight, and efficiency.
            Maximum Range: Achieved at the speed where the ratio of airspeed to fuel consumption (specific range) is highest, often near the maximum lift-to-drag (L/D) ratio.
            Factors Influencing Range: Fuel weight, aircraft weight, air density, altitude, and wind.
            Range vs. Endurance: Range is distance; endurance is time. To maximize endurance (time), fly at minimum power; for maximum range (distance), fly at maximum 
            </h3>
        `;
    }   
    // Attach the calculateRange function to the window object
    window.calculateRange = calculateRange;
    return div;
}
