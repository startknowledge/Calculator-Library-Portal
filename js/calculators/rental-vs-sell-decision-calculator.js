export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rental vs Sell Decision Calculator</h3>

    <p>
      This calculator helps property owners decide whether it is financially
      better to rent out a property or sell it, based on rental income and
      expected annual property appreciation.
    </p>

    <label>Property Market Value (₹)</label>
    <input id="value" value="5000000">

    <label>Monthly Rent (₹)</label>
    <input id="rent" value="25000">

    <label>Expected Annual Appreciation (%)</label>
    <input id="rate" value="6">

    <button onclick="calcRentSell()">Calculate</button>
    <p id="rsResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      Property owners often face a decision between renting their property for
      regular income or selling it to benefit from capital appreciation.
      This calculator compares annual rental income with the annual increase
      in property value to help make a simple financial comparison.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Annual Rent</b> = Monthly Rent × 12<br>
      <b>Annual Appreciation</b> = Property Value × Appreciation Rate
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the current market value of the property.<br>
      2. Enter the expected monthly rent from the property.<br>
      3. Enter the expected annual appreciation rate.<br>
      4. Click Calculate to see whether renting or selling is financially better.
    </p>

    <h4>Example</h4>
    <p>
      Property Value = ₹50,00,000<br>
      Monthly Rent = ₹25,000<br>
      Appreciation Rate = 6%<br>
      Annual Rent = ₹3,00,000<br>
      Annual Appreciation = ₹3,00,000<br>
      In this case, both options provide similar financial benefits.
    </p>

    <h4>Note</h4>
    <p>
      This calculator compares only rental income and appreciation.
      Expenses such as maintenance, taxes, vacancy periods, transaction costs,
      and tax implications are not included.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This tool provides an approximate financial comparison for educational
      purposes only. Real estate decisions should consider market risks,
      liquidity needs, tax laws, and professional financial advice.
    </p>
  `;

  window.calcRentSell = function () {
    let value = parseFloat(document.getElementById("value").value);
    let monthlyRent = parseFloat(document.getElementById("rent").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;

    if (isNaN(value) || isNaN(monthlyRent) || isNaN(rate)) {
      document.getElementById("rsResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let annualRent = monthlyRent * 12;
    let annualAppreciation = value * rate;

    let decision =
      annualRent > annualAppreciation
        ? "👉 Renting is better (Higher Cash Flow)"
        : "👉 Selling is better (Higher Appreciation)";

    document.getElementById("rsResult").innerHTML = `
      <b>Annual Rent:</b> ₹${annualRent.toFixed(0)}<br>
      <b>Annual Appreciation:</b> ₹${annualAppreciation.toFixed(0)}<br><br>
      <b>Decision:</b> ${decision}
    `;
  };

  return div;
}
