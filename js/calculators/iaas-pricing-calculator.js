export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
     
    <p>Calculate the pricing for your Infrastructure as a Service (IaaS) offering based on resource allocation, usage duration, and service levels.</p>
    <form id="iaas-pricing-form">
      <label for="base-price">Base Price ($ / ₹):</label>
        <input type="number" id="base-price" name="base-price" required><br><br>
        <label for="resource-units">Resource Units (e.g., CPU hours, GB storage):</label>
        <input type="number" id="resource-units" name="resource-units" required><br><br>
        <label for="usage-duration">Usage Duration (Hours):</label>
        <input type="number" id="usage-duration" name="usage-duration" required><br><br>
        <label for="service-level">Service Level:</label>
        <select id="service-level" name="service-level" required>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select><br><br>
        <input type="submit" value="Calculate Pricing">
    </form>
    <h3 id="calculated-price"></h3>
    `;
    div.querySelector("#iaas-pricing-form").addEventListener("submit", function (e) {
      e.preventDefault();
        const basePrice = parseFloat(div.querySelector("#base-price").value);
        const resourceUnits = parseInt(div.querySelector("#resource-units").value);
        const usageDuration = parseInt(div.querySelector("#usage-duration").value);
        const serviceLevel = div.querySelector("#service-level").value;
        let levelMultiplier = 1;
        if (serviceLevel === "premium") {
          levelMultiplier = 1.5;
        }
        const calculatedPrice = basePrice * resourceUnits * usageDuration * levelMultiplier;
        div.querySelector("#calculated-price").textContent = `Calculated Price: ($ / ₹) ${calculatedPrice.toFixed(2)}`; 
    });
    return div;
}