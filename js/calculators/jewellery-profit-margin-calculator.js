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
        <br>
        <p><b>How to Use:</b> Enter the cost price and selling price of the jewelry in the respective fields, then click the "Calculate Profit Margin" button to see the profit and profit margin displayed below.</p>
        <p><b>Inputs:</b></p>
        <ul>
          <li><b>Cost Price (₹):</b> The cost price of the jewelry item.</li>
          <li><b>Selling Price (₹):</b> The selling price of the jewelry item.</li>
        </ul>
        <p><b>Outputs:</b></p>
        <ul>
          <li><b>Profit:</b> The profit made on the sale of the jewelry item.</li>
          <li><b>Profit Margin:</b> The profit margin percentage based on the cost price.</li>
        </ul>
        <p><b>Example:</b> If the cost price is ₹5000 and the selling price is ₹7000, the profit would be ₹2000 and the profit margin would be 40%.</p>
        <p><b>Formula:</b> 
            <br>Profit = Selling Price - Cost Price
            <br>Profit Margin (%) = (Profit / Cost Price) × 100
        </p>
        <p><b>Disclaimer:</b> This calculator provides an estimate and actual profit margins may vary based on additional factors such as taxes, discounts, and other costs associated with the sale of jewelry items.</p>
        <br>
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