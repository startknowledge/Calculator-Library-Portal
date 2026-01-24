export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Customer Lifetime Value (LTV) Calculator</h3>
    <p>
      Calculate the Customer Lifetime Value (LTV) based on average purchase value,
      purchase frequency, and customer lifespan.
    </p>

    <form id="ltv-calculator-form">
      <label for="avg-purchase-value">Average Purchase Value (₹ / $):</label>
      <input type="number" id="avg-purchase-value" required>

      <label for="purchase-frequency">Purchase Frequency (per year):</label>
      <input type="number" id="purchase-frequency" required>

      <label for="customer-lifespan">Customer Lifespan (years):</label>
      <input type="number" id="customer-lifespan" required>

      <button type="submit">Calculate</button>
    </form>

    <h3 id="calculated-ltv"></h3>
    <br>

    <p>
      The Customer Lifetime Value (LTV) metric helps businesses understand how much
      revenue a customer is expected to generate during their entire relationship.
    </p>

    <p><b>How to Use:</b></p>
    <p>
      Enter the average amount a customer spends per purchase, how often they buy in a year,
      and how many years they typically remain a customer. Click <b>Calculate</b> to view the LTV.
    </p>

    <p><b>Formula:</b></p>
    <p>
      Customer Lifetime Value (LTV) =  
      Average Purchase Value × Purchase Frequency × Customer Lifespan
    </p>

    <p><b>Example:</b></p>
    <p>
      If Average Purchase Value = ₹2,000, Purchase Frequency = 6 times/year,
      Customer Lifespan = 5 years,<br>
      LTV = 2000 × 6 × 5 = <b>₹60,000</b>
    </p>

    <p><b>Why LTV is Important:</b></p>
    <p>
      LTV helps businesses decide customer acquisition budgets, marketing strategies,
      and long-term growth planning.
    </p>

    <p><b>Note:</b> This calculation estimates revenue, not net profit.</p>
    <p><b>Disclaimer:</b> Results are indicative and should be used for planning purposes only.</p>
  `;

  div.querySelector("#ltv-calculator-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const avgPurchaseValue = parseFloat(
      div.querySelector("#avg-purchase-value").value
    ) || 0;

    const purchaseFrequency = parseFloat(
      div.querySelector("#purchase-frequency").value
    ) || 0;

    const customerLifespan = parseFloat(
      div.querySelector("#customer-lifespan").value
    ) || 0;

    const calculatedLTV =
      avgPurchaseValue * purchaseFrequency * customerLifespan;

    div.querySelector("#calculated-ltv").innerHTML =
      `Customer Lifetime Value (LTV): <b>₹${calculatedLTV.toLocaleString("en-IN")}</b>`;
  });

  return div;
}
