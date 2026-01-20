export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Safety Factor Calculator</h3>
    <p>This calculator computes the safety factor based on material strength and applied load.</p>
    <form id="safetyFactorCalcForm">
        <label for="materialStrength">Material Strength (N):</label><br>
        <input type="number" id="materialStrength" name="materialStrength" required><br><br>
        
        <label for="appliedLoad">Applied Load (N):</label><br>
        <input type="number" id="appliedLoad" name="appliedLoad" required><br><br>
        
        <button type="button" onclick="calculateSafetyFactor()">Calculate Safety Factor</button>
    </form>
    <div id="safetyFactorResult"></div>
`;
    // Function to calculate safety factor
    function calculateSafetyFactor() {
        const materialStrength = parseFloat(document.getElementById("materialStrength").value); 
        const appliedLoad = parseFloat(document.getElementById("appliedLoad").value);
        if (isNaN(materialStrength) || isNaN(appliedLoad) || appliedLoad === 0) {
            document.getElementById("safetyFactorResult").innerHTML = "Please enter valid numbers for material strength and applied load (applied load must be greater than 0).";
            return;
        }
        const safetyFactor = materialStrength / appliedLoad;
        document.getElementById("safetyFactorResult").innerHTML = `
            <h4>Results:</h4>
            <p>Safety Factor: ${safetyFactor.toFixed(2)}</p>
        `;
    }
    // Attach the calculateSafetyFactor function to the window object
    window.calculateSafetyFactor = calculateSafetyFactor;
    return div;
}