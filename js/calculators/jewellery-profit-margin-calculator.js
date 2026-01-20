export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Jewellery Profit Margin Calculator</h3>
        <p>This calculator helps you determine the profit margin on jewelry sales based on the cost price and selling price. It is useful for jewelers and sellers to assess their profitability.</p>

        <div class="calculator-form">
            <label for="costPrice">Cost Price (₹):</label>
            <input type="number" id="costPrice" placeholder="Enter cost price" />
            <label for="sellingPrice">Selling Price (₹):</label>    
            <input type="number" id="sellingPrice" placeholder="Enter selling price" />
            <button id="calculateBtn">Calculate Profit Margin</button>
        </div>
        <div class="calculator-result" id="result"></div>
    `;
    window.calculateJewelleryProfitMargin = function() {
        const costPrice = parseFloat(document.getElementById("costPrice").value);
        const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
        if (isNaN(costPrice) || isNaN(sellingPrice) || costPrice <= 0 || sellingPrice < 0) {
            document.getElementById("result").innerText = "Please enter valid positive numbers for cost price and selling price.";
            return;
        }   
        const profit = sellingPrice - costPrice;
        const profitMargin = (profit / costPrice) * 100;
        document.getElementById("result").innerText = `Profit: ₹${profit.toFixed(2)} | Profit Margin: ${profitMargin.toFixed(2)}%`;
    }
    setTimeout(() => {
        document.getElementById("calculateBtn").addEventListener("click", calculateJewelleryProfitMargin);
    }, 100);
    return div;
}