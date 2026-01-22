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
    <h3 id="calculated-price"></h3><br>
    <p>The IaaS Pricing Calculator helps you estimate the cost of your Infrastructure as a Service (IaaS) based on various parameters such as resource allocation, usage duration, and service levels. By entering these values, users can quickly calculate their expected pricing.</p>
    <p>This calculator is useful for businesses and individuals who want to understand the cost implications of their IaaS usage. It provides a quick way to evaluate how much they need to budget for their cloud infrastructure needs.</p>
    <p>Ensure that the base price, resource units, usage duration, and service level inputs are accurate to get a reliable pricing estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your desired base price in the "Base Price" field, the number of resource units in the "Resource Units" field, the usage duration in hours in the "Usage Duration" field, and select the service level from the dropdown menu. Click the "Calculate Pricing" button to see the estimated price displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Base Price ($ / ₹):</b> The cost per unit of resource.</li>
      <li><b>Resource Units:</b> The total number of resource units being utilized.</li>
      <li><b>Usage Duration (Hours):</b> The total duration for which the resources are used.</li>
      <li><b>Service Level:</b> The level of service chosen (Standard or Premium), which affects the pricing.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Calculated Price ($ / ₹):</b> The estimated total cost for the IaaS based on the provided inputs.</li>
    </ul>
    <p><b>Note:</b> Ensure that the base price, resource units, usage duration, and service level inputs are accurate to get a reliable pricing estimate.</p>
    <p><b>Example:</b> For a base price of $0.10 per unit, 100 resource units, a usage duration of 24 hours, and selecting the Premium service level, the calculated price would be $360.00.</p>
    <p><b>Formula:</b> Calculated Price = Base Price × Resource Units × Usage Duration × Service Level Multiplier (1 for Standard, 1.5 for Premium)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual pricing may vary based on additional factors such as discounts, taxes, and specific service agreements with the IaaS provider.</p>
    <br>
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