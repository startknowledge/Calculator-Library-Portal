export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
     
    <p>Calculate the pricing for your Platform as a Service (PaaS) offering based on resource usage, service tiers, and additional features.</p>
    <form id="paas-pricing-form">
      <label for="base-price">Base Price ($ / ₹):</label>
        <input type="number" id="base-price" name="base-price" required><br><br>
        <label for="resource-usage">Resource Usage (Units):</label>
        <input type="number" id="resource-usage" name="resource-usage" required><br><br>
        <label for="service-tier">Service Tier:</label>
        <select id="service-tier" name="service-tier" required>
          <option value="standard">Standard</option>
          <option value="enterprise">Enterprise</option>
        </select><br><br>
        <label for="additional-features">Additional Features Cost ($ / ₹):</label>
        <input type="number" id="additional-features" name="additional-features" value="0" required><br><br>
        <input type="submit" value="Calculate Pricing">
    </form>
    <h3 id="calculated-price"></h3>
    `;
    div.querySelector("#paas-pricing-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const basePrice = parseFloat(div.querySelector("#base-price").value);
        const resourceUsage = parseInt(div.querySelector("#resource-usage").value);
        const serviceTier = div.querySelector("#service-tier").value;
        const additionalFeatures = parseFloat(div.querySelector("#additional-features").value);
        let tierMultiplier = 1;
        if (serviceTier === "enterprise") {
          tierMultiplier = 2;
        }
        const calculatedPrice = basePrice * resourceUsage * tierMultiplier + additionalFeatures;
        div.querySelector("#calculated-price").textContent = `Calculated Price: ($ / ₹) ${calculatedPrice.toFixed(2)}`; 
    });
    return div;
}   