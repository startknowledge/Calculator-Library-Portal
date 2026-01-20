export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>lifetime Value (LTV) Calculator</h3>
    <p>Calculate the Lifetime Value (LTV) of a customer based on average purchase value, purchase frequency, and customer lifespan.</p>
    <form id="ltv-calculator-form">
        <label for="avg-purchase-value">Average Purchase Value ($ / ₹):</label>
        <input type="number" id="avg-purchase-value" name="avg-purchase-value" required><br><br>
        <label for="purchase-frequency">Purchase Frequency (per year):</label>
        <input type="number" id="purchase-frequency" name="purchase-frequency" required><br><br>
        <label for="customer-lifespan">Customer Lifespan (years):</label>
        <input type="number" id="customer-lifespan" name="customer-lifespan" required><br><br>
        <input type="submit" value="Calculate LTV">
    </form>
    <h3 id="calculated-ltv"></h3>
    `;
    div.querySelector("#ltv-calculator-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const avgPurchaseValue = parseFloat(div.querySelector("#avg-purchase-value").value);  
        const purchaseFrequency = parseInt(div.querySelector("#purchase-frequency").value);
        const customerLifespan = parseInt(div.querySelector("#customer-lifespan").value);
        const calculatedLTV = avgPurchaseValue * purchaseFrequency * customerLifespan;
        div.querySelector("#calculated-ltv").textContent = `Lifetime Value (LTV): ($ / ₹) ${calculatedLTV.toFixed(2)}`;    
    });
    return div;
}