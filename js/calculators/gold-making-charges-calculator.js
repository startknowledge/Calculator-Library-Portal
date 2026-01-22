export default function () {
  const div = document.createElement("div");    
    div.innerHTML = `
        
        <p>This calculator helps you determine the making charges for gold jewelry based on its weight and the making charge rate per gram. Making charges are fees charged by jewelers for crafting jewelry from raw gold.</p>

        <div class="calculator-form">
            <label for="goldWeight">Gold Weight (grams):</label>
            <input type="number" id="goldWeight" placeholder="Enter gold weight in grams" />
            <label for="makingChargeRate">Making Charge Rate (per gram):</label>
            <input type="number" id="makingChargeRate" placeholder="Enter making charge rate per gram" />
            <button id="calculateBtn">Calculate Making Charges</button>
        </div>
        <div class="calculator-result" id="result"></div>
        <br>
        <p><b>How to Use the Gold Making Charges Calculator:</b></p>
        <ol>
            <li>Enter the weight of the gold in grams.</li>
            <li>Enter the making charge rate per gram in rupees.</li>
            <li>Click the "Calculate Making Charges" button to compute the total making charges.</li>
        </ol>
        <p><b>Example:</b> If the gold weight is 10 grams and the making charge rate is ₹50 per gram, the total making charges would be ₹500.</p>
        <p><b>Formula:</b> Total Making Charges (₹) = Gold Weight (grams) × Making Charge Rate (₹/gram)</p>
        <p><b>Disclaimer:</b> This calculator provides an estimate and actual making charges may vary based on additional factors such as design complexity, labor costs, and jeweler policies.</p> 
        <br>
    `;
    window.calculateGoldMakingCharges = function() {
        const goldWeight = parseFloat(document.getElementById("goldWeight").value);
        const makingChargeRate = parseFloat(document.getElementById("makingChargeRate").value);
        if (isNaN(goldWeight) || isNaN(makingChargeRate) || goldWeight < 0 || makingChargeRate < 0) {
            document.getElementById("result").innerText = "Please enter valid positive numbers for gold weight and making charge rate.";
            return;
        }
        const makingCharges = goldWeight * makingChargeRate;
        document.getElementById("result").innerText = `Total Making Charges: ₹${makingCharges.toFixed(2)}`;
    }
    setTimeout(() => {
        document.getElementById("calculateBtn").addEventListener("click", calculateGoldMakingCharges);
    }
    , 100);
    return div;
}