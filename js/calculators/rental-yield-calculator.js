export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rental Yield Calculator</h3>

    <p>
      The Rental Yield Calculator helps property owners and investors
      measure how much annual rental income a property generates
      relative to its market value.
    </p>

    <label>Annual Rent (₹)</label>
    <input id="rent" value="240000">

    <label>Property Value (₹)</label>
    <input id="value" value="6000000">

    <button onclick="calcYield()">Calculate</button>
    <p id="yieldResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      Rental yield is a key real estate metric used to evaluate the
      income-generating potential of a property. It shows the percentage
      return earned from rent each year compared to the property's value.
      Higher rental yield generally indicates better cash flow.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Rental Yield (%)</b> = (Annual Rent ÷ Property Value) × 100
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the total annual rent received from the property.<br>
      2. Enter the current market value of the property.<br>
      3. Click on the Calculate button to get the rental yield percentage.
    </p>

    <h4>Example</h4>
    <p>
      Annual Rent = ₹2,40,000<br>
      Property Value = ₹60,00,000<br>
      Rental Yield = (2,40,000 ÷ 60,00,000) × 100 = <b>4%</b>
    </p>

    <h4>Note</h4>
    <p>
      Rental yield does not include expenses such as maintenance,
      property tax, insurance, vacancy losses, or loan EMIs.
      Net rental yield may be lower after expenses.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an approximate estimate for educational
      and informational purposes only. Actual investment decisions
      should consider market conditions, risks, taxes, and professional
      financial advice.
    </p>
  `;

  window.calcYield = function () {
    let rent = parseFloat(document.getElementById("rent").value);
    let value = parseFloat(document.getElementById("value").value);

    if (isNaN(rent) || isNaN(value) || value === 0) {
      document.getElementById("yieldResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let yieldPct = (rent / value) * 100;

    document.getElementById("yieldResult").innerHTML =
      `<b>Rental Yield:</b> ${yieldPct.toFixed(2)} %`;
  };

  return div;
}
