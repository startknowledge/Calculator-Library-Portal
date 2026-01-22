export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Break Even Calculator</h3>

    <label>Fixed Cost (₹)</label>
    <input id="fixed" value="50000">

    <label>Selling Price per Unit (₹)</label>
    <input id="sp" value="500">

    <label>Variable Cost per Unit (₹)</label>
    <input id="vc" value="300">

    <button onclick="calcBE()">Calculate</button>
    <p id="beResult"></p><br>
    <p><u>Explanation about Break Even Point (BEP)</u> :</p>
    <p>The Break Even Point (BEP) is the point at which total revenue equals total costs, resulting in neither profit nor loss. It is a crucial financial metric for businesses as it helps determine the minimum sales volume required to cover all expenses. Understanding the BEP allows businesses to make informed decisions regarding pricing, cost management, and sales targets.</p>
    <p>The formula to calculate the Break Even Point in units is:</p>
    <p><b>Break Even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>Fixed Costs</b> are the expenses that do not change with the level of production or sales, such as rent, salaries, and insurance.</li>
      <li><b>Selling Price per Unit</b> is the amount charged to customers for each unit of product sold.</li>
      <li><b>Variable Cost per Unit</b> is the cost that varies directly with the production volume, such as raw materials and direct labor.</li>
    </ul>
    <p>For example, if a business has fixed costs of ₹50,000, a selling price of ₹500 per unit, and a variable cost of ₹300 per unit, the Break Even Point would be calculated as follows:</p>
    <p>Break Even Units = 50,000 / (500 - 300) = 250 units</p>
    <p>This means the business needs to sell at least 250 units to cover all its costs. Any sales beyond this point will contribute to profit.</p>
    <p>It is important for businesses to regularly analyze their Break Even Point to adapt to changes in costs, pricing strategies, and market conditions. This analysis can aid in setting sales targets and making strategic decisions to enhance profitability.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of Break Even Analysis. For specific financial assessments, please consult a qualified financial professional.</p>
    <br>
  `;

  window.calcBE = function () {
    let fixed = +document.getElementById("fixed").value;
    let sp = +document.getElementById("sp").value;
    let vc = +document.getElementById("vc").value;

    let units = fixed / (sp - vc);

    document.getElementById("beResult").innerHTML =
      `<b>Break Even Units:</b> ${units.toFixed(0)}`;
  };

  return div;
}
