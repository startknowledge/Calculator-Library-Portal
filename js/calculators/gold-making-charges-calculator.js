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