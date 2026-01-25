export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>SaaS Pricing Calculator</h3>
    <p>Calculate the pricing for your Software as a Service (SaaS) product based on base price, number of users, feature tier, and market trends.</p>

    <h4>Formula</h4>
    <p>
      Calculated Price = Base Price × Number of Users × Feature Tier Multiplier × (1 + Market Trend Adjustment)
    </p>

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

    <h4>Example</h4>
    <p>
      Base Price: $10, Users: 50, Feature Tier: Premium, Market Trend: 10%<br>
      Calculated Price = 10 × 50 × 2 × (1 + 0.10) = $1100
    </p>

    <h4>Note</h4>
    <p>
      The Feature Tier Multiplier adjusts the price based on additional features offered. Market Trend Adjustment allows for seasonal or market-based pricing changes.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides approximate pricing for planning purposes only. Actual pricing should consider additional costs, taxes, and business strategies.
    </p>
  `;

  div.querySelector("#saas-pricing-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const basePrice = parseFloat(div.querySelector("#base-price").value);
    const numUsers = parseInt(div.querySelector("#num-users").value);
    const featureTier = div.querySelector("#feature-tier").value;
    const marketTrend = parseFloat(div.querySelector("#market-trend").value) / 100;

    if (isNaN(basePrice) || isNaN(numUsers) || isNaN(marketTrend) || numUsers <= 0 || basePrice < 0) {
      div.querySelector("#calculated-price").textContent = "Please enter valid positive numbers.";
      return;
    }

    let tierMultiplier = 1;
    if (featureTier === "standard") tierMultiplier = 1.5;
    else if (featureTier === "premium") tierMultiplier = 2;

    const calculatedPrice = basePrice * numUsers * tierMultiplier * (1 + marketTrend);

    div.querySelector("#calculated-price").textContent = `Calculated Price: ($ / ₹) ${calculatedPrice.toFixed(2)}`;
  });

  return div;
}
