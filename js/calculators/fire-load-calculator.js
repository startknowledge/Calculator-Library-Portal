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