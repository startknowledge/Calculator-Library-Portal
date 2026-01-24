export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Customer Lifetime Value (LTV) Calculator</h3>
    <small>Formula: Average Purchase × Purchase Frequency × Customer Lifespan</small>
    <br><br>

    <label>Average Purchase Value (₹)</label>
    <input id="apv" type="number" value="1500">

    <label>Purchase Frequency / Year</label>
    <input id="freq" type="number" value="5">

    <label>Customer Lifespan (Years)</label>
    <input id="life" type="number" value="4">

    <button onclick="calcLTV()">Calculate</button>
    <p id="ltvResult"></p>
    <br>

    <p>The Customer Lifetime Value (LTV) Calculator helps businesses estimate the total revenue generated from a customer over the entire relationship period.</p>
    <p>It is widely used in marketing, sales strategy, budgeting, and customer acquisition planning.</p>

    <p><b>How to Use:</b></p>
    <p>
      Enter the average purchase value, number of purchases per year, and expected customer lifespan.
      Click the <b>Calculate</b> button to view the estimated customer lifetime value.
    </p>

    <p><b>Formula:</b></p>
    <p>
      Customer Lifetime Value = Average Purchase Value × Purchase Frequency × Customer Lifespan
    </p>

    <p><b>Example:</b></p>
    <p>
      If Average Purchase = ₹1,500, Frequency = 5 purchases/year,
      Lifespan = 4 years,<br>
      LTV = 1500 × 5 × 4 = <b>₹30,000</b>
    </p>

    <p><b>Why LTV Matters:</b></p>
    <p>
      Understanding LTV helps businesses decide how much they can spend on acquiring new customers
      while still remaining profitable.
    </p>

    <p><b>Note:</b> This calculator estimates revenue, not profit. Operational costs are not included.</p>
    <p><b>Disclaimer:</b> Results are estimates for planning and analysis purposes only.</p>
    <br>
  `;

  window.calcLTV = function () {
    let apv = parseFloat(document.getElementById("apv").value) || 0;
    let freq = parseFloat(document.getElementById("freq").value) || 0;
    let life = parseFloat(document.getElementById("life").value) || 0;

    let ltv = apv * freq * life;

    document.getElementById("ltvResult").innerHTML =
      `<b>Customer Lifetime Value:</b> ₹${ltv.toLocaleString("en-IN")}`;
  };

  return div;
}
