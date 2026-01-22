export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Business Valuation Calculator</h3>

    <label>Annual Profit (₹)</label>
    <input id="profit" value="300000">

    <label>Valuation Multiple</label>
    <input id="multiple" value="4">

    <button onclick="calcVal()">Calculate</button>
    <p id="valResult"></p><br>
    <p><u>Explanation about Business Valuation</u> :</p>
    <p>Business Valuation is the process of determining the economic value of a business or company. It is a critical aspect for various purposes such as mergers and acquisitions, investment analysis, financial reporting, and strategic planning. One common method of business valuation is the use of valuation multiples, which relate a company's financial metrics to its market value.</p>
    <p>The formula to estimate Business Value using the valuation multiple method is:</p>
    <p><b>Business Value = Annual Profit × Valuation Multiple</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>Annual Profit</b> is the net profit earned by the business in a year.</li>
      <li><b>Valuation Multiple</b> is a factor used to estimate the value of a business based on its financial performance.</li>
    </ul>
    <p>For example, if a business has an annual profit of ₹300,000 and uses a valuation multiple of 4, the estimated business value would be calculated as follows:</p>
    <p>Business Value = ₹300,000 × 4 = ₹1,200,000</p>
    <p>This means the estimated value of the business is ₹1,200,000. It is important to note that this method provides an estimate and actual valuations may vary based on market conditions and other factors.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of Business Valuation. For specific financial assessments, please consult a qualified financial professional.</p>
    <br>
    `;

  window.calcVal = function () {
    let p = +profit.value;
    let m = +multiple.value;

    valResult.innerHTML =
      `<b>Estimated Business Value:</b> ₹${(p * m).toLocaleString()}`;
  };

  return div;
}
