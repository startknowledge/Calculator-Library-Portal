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
    <br>
    <h4>References:</h4>
    <ul>
        <li>Mechanical Engineering Design, 10th Edition, J.E. Shigley</li>
        <li>Roark's Formulas for Stress and Strain, 8th Edition, Warren C. Young</li>
        <li>https://www.engineeringtoolbox.com/safety-factors-d_950.html</li>
    </ul>
    <p>Calculate the safety margin of a structure or system.</p>
    <p><b>Explanation:</b></p>
    <p>Safety factor shows how much stronger a system is than required.</p>
    <p><b>Formula:</b></p>
    <p>Safety Factor = Maximum Load ÷ Working Load</p>
    <p>Based on material strength and applied load.</p>
    <p>It indicates reliability and safety.</p>
    <p><b>Example:</b>  
    100 kN ÷ 50 kN = <b>2.0</b>.</p>
    <p><b>Disclaimer:</b> Engineering judgment is required for final decisions.</p>
    <br>
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