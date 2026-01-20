export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
   
    <p>Calculate the pricing for your Software as a Service (SaaS) product based on various factors such as features, user tiers, and market trends.</p>
    <form id="saas-pricing-form">
      <label for="base-price">Base Price ($ / ₹):</label>
      <input type="number" id="base-price" name="base-price" required><br><br>
        <label for="num-users">Number of Users:</label>
        <input type="number" id="num-users" name="num-users" required><br><br>
        <label for="feature-tier">Feature Tier:</label>
        <select id="feature-tier" name="feature-tier" required>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select><br><br>
        <label for="market-trend">Market Trend Adjustment (%):</label>
        <input type="number" id="market-trend" name="market-trend" value="0" required><br><br>
        <input type="submit" value="Calculate Pricing">
    </form>
    <h3 id="calculated-price"></h3>
    `;
    div.querySelector("#saas-pricing-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const basePrice = parseFloat(div.querySelector("#base-price").value);
      const numUsers = parseInt(div.querySelector("#num-users").value);
      const featureTier = div.querySelector("#feature-tier").value;
      const marketTrend = parseFloat(div.querySelector("#market-trend").value) / 100;
        let tierMultiplier = 1;
        if (featureTier === "standard") {
          tierMultiplier = 1.5;
        } else if (featureTier === "premium") {
          tierMultiplier = 2;
        }
        const calculatedPrice = basePrice * numUsers * tierMultiplier * (1 + marketTrend);
        div.querySelector("#calculated-price").textContent = `Calculated Price: ($ / ₹) ${calculatedPrice.toFixed(2)}`;    
    });
    return div;
}   