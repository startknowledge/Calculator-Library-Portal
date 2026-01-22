export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Clothing Brand Valuation Calculator</h3>

    <label>Annual Revenue (₹)</label>
    <input id="rev" value="5000000">

    <label>Valuation Multiple</label>
    <input id="mul" value="3">

    <button onclick="calcBrand()">Calculate</button>
    <p id="brandResult"></p>
    <br>
    <p><u>Explanation about Clothing Brand Valuation Calculator</u> :</p>
    <p>The Clothing Brand Valuation Calculator is a tool designed to estimate the market value of a clothing brand based on its annual revenue and a valuation multiple. This calculator is particularly useful for entrepreneurs, investors, and business owners in the fashion industry who are looking to assess the worth of their brand.</p>
    <p>To use the calculator, simply input the brand's annual revenue in Indian Rupees (₹) and select an appropriate valuation multiple. The valuation multiple is typically determined by factors such as market conditions, brand reputation, growth potential, and industry standards. A common range for valuation multiples in the clothing industry is between 2 to 5 times the annual revenue.</p>
    <p>Once the inputs are provided, the calculator will compute the estimated brand value by multiplying the annual revenue by the selected valuation multiple. This estimation can help stakeholders make informed decisions regarding investments, sales
    strategies, and business growth plans.</p>
    <p>For example, if a clothing brand has an annual revenue of ₹5,000,000 and a valuation multiple of 3, the estimated brand value would be ₹15,000,000 (₹5,000,000 × 3).</p>
    <p>Please note that while this calculator provides a useful estimate, it is advisable to consult with financial experts or business valuators for a comprehensive assessment of a brand's value, taking into account various qualitative and quantitative factors.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or valuation services.</p>
    <br>
  `;

  window.calcBrand = function () {
    let rev = +document.getElementById("rev").value;
    let mul = +document.getElementById("mul").value;

    document.getElementById("brandResult").innerHTML =
      `<b>Estimated Brand Value:</b> ₹${(rev * mul).toFixed(0)}`;
  };

  return div;
}
