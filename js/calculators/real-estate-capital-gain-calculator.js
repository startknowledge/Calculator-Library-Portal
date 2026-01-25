export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Real Estate Capital Gain Calculator</h3>

    <p>
      This calculator helps you determine the capital gain earned from selling
      a property by comparing the purchase price and selling price.
    </p>

    <label>Purchase Price (₹)</label>
    <input type="number" id="buy" value="3000000">

    <label>Selling Price (₹)</label>
    <input type="number" id="sell" value="5000000">

    <button onclick="calcCG()">Calculate</button>
    <div id="cgResult"></div>

    <hr>

    <h4>Explanation</h4>
    <p>
      Capital gain refers to the profit earned when a property is sold at a price
      higher than its purchase cost. This value is important for financial
      planning and tax assessment.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Capital Gain = Selling Price − Purchase Price</b>
    </p>

    <h4>How to Use</h4>
    <p>
      1. Enter the original purchase price of the property.<br>
      2. Enter the selling price of the property.<br>
      3. Click the Calculate button to get the capital gain.
    </p>

    <h4>Example</h4>
    <p>
      Purchase Price = ₹30,00,000<br>
      Selling Price = ₹50,00,000<br>
      Capital Gain = ₹20,00,000
    </p>

    <h4>Note</h4>
    <p>
      This calculator shows gross capital gain only. It does not include indexation,
      exemptions, registration costs, or improvement expenses.
    </p>

    <h4>Disclaimer</h4>
    <p>
      The result is for informational purposes only. Actual capital gains tax
      calculations may vary based on holding period, tax laws, and applicable
      deductions. Please consult a tax professional for accurate assessment.
    </p>
  `;

  window.calcCG = function () {
    let buy = parseFloat(document.getElementById("buy").value);
    let sell = parseFloat(document.getElementById("sell").value);

    if (isNaN(buy) || isNaN(sell)) {
      document.getElementById("cgResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let gain = sell - buy;

    document.getElementById("cgResult").innerHTML =
      `<b>Capital Gain:</b> ₹${gain.toLocaleString("en-IN")}`;
  };

  return div;
}
