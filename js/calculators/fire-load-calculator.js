export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>fire load calculator</h3>
    <p>This calculator estimates the fire load based on material type and quantity.</p>
    <form id="fireLoadCalcForm">
        <label for="materialType">Material Type:</label><br>    
        <select id="materialType" name="materialType">
            <option value="wood">Wood</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
        </select><br><br>
        
        <label for="quantity">Quantity (kg):</label><br>
        <input type="number" id="quantity" name="quantity" required><br><br>
        
        <button type="button" onclick="calculateFireLoad()">Calculate Fire Load</button>
    </form>
    <div id="fireLoadResult"></div>
    <br>
    <hr>
    <h4>References:</h4>
    <ul>
        <li>Fire Protection Handbook, 20th Edition, National Fire Protection Association (NFPA)</li>
        <li>International Building Code (IBC) - Section 706</li>
        <li>Underwriters Laboratories (UL) Fire Safety Standards</li>
    </ul>
</div>   
<br>
    <p><u>Explanation about Fire Load Calculator</u> :</p>
    <p>The Fire Load Calculator is a tool designed to help individuals and businesses calculate the total fire load based on the type of material and its quantity. By inputting the material type and quantity in kilograms, users can quickly determine the total fire load in megajoules (MJ).</p>
    <p>The calculator uses the following formulas:</p>
    <p>Total Fire Load (MJ) = Fire Load per kg (MJ/kg) * Quantity (kg)</p>
    <p>To use the calculator, simply select the material type and enter the quantity in kilograms in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the total fire load in megajoules.</p>
    <p>This calculator is particularly useful for fire safety engineers, building designers, and facility managers who need to assess fire hazards and plan appropriate fire protection measures. By knowing the total fire load, users can make informed decisions about fire suppression systems and safety protocols.</p>
    <p>In summary, the Fire Load Calculator is a valuable resource for anyone involved in fire safety or building design, providing clarity on fire hazards to aid in effective risk management.</p>
    <p><b>Note:</b> This calculator provides an estimate of the fire load based on the inputs provided. Actual fire loads may vary depending on material properties, combustion efficiency, and other factors.</p>
    <p>For personalized advice and detailed fire load analysis, consider consulting with a fire safety expert or building designer.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
 `;

    // Function to calculate fire load
    function calculateFireLoad() {
        const materialType = document.getElementById("materialType").value;
        const quantity = parseFloat(document.getElementById("quantity").value);
        if (isNaN(quantity)) {
            document.getElementById("fireLoadResult").innerHTML = "Please enter a valid quantity.";
            return;
        }   
        let fireLoadPerKg;
        switch (materialType) {
            case "wood":
                fireLoadPerKg = 18; // MJ/kg
                break;
            case "plastic":
                fireLoadPerKg = 30; // MJ/kg
                break;
            case "metal":
                fireLoadPerKg = 5; // MJ/kg (approximate)
                break;
            default:
                fireLoadPerKg = 0;
        }
        const totalFireLoad = fireLoadPerKg * quantity;
        document.getElementById("fireLoadResult").innerHTML = `
            <h4>Results:</h4>
            <p>Total Fire Load: ${totalFireLoad.toFixed(2)} MJ</p>
            <br>
            <p><b><u>Note</u>:</b> Fire load values are approximate and can vary based on specific material properties. A total fire load of ${totalFireLoad.toFixed(2)} MJ represents the total potential heat energy that can be released if all combustible materials within a specific compartment or room were to burn completely. 
            indicates the total energy, but its significance in terms of fire hazard (low, moderate, or high) depends entirely on the floor area of the space it occupies. The critical metric used in fire safety design is the <b>Fire Load Density = Total Heat (MJ) / Total Area (m²)</b>, measured in megajoules per square meter (MJ/m²). </p>
        `;
    }   
    // Attach the calculateFireLoad function to the window object
    window.calculateFireLoad = calculateFireLoad;
    return div;
}