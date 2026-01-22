export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Commission Calculator</h3>

    <label>Sales Amount (₹)</label>
    <input type="number" id="saleAmt" value="100000">

    <label>Commission Rate (%)</label>
    <input type="number" id="comRate" value="5">

    <button onclick="calcCommission()">Calculate</button>
    <p id="comResult"></p>
    <br>
    <p><u>Explanation about Commission Calculator</u> :</p>
    <p>The Commission Calculator is a tool designed to help sales professionals, business owners, and entrepreneurs calculate the commission earned based on sales amount and commission rate. This calculator is particularly useful for individuals who work on a commission basis or businesses that want to determine the commission payouts for their sales teams.</p>
    <p>To use the calculator, simply input the total sales amount in Indian Rupees (₹) and the commission rate as a percentage (%). The calculator will then compute the commission earned by multiplying the sales amount by the commission rate divided by 100.</p>
    <p>This calculator is beneficial for both employees and employers, as it provides a clear understanding of earnings based on sales performance. It can help in setting sales targets, motivating sales teams, and managing financial planning.</p>
    <p>Please note that this calculator provides a basic estimate and may not account for additional factors such as taxes
    or deductions that may apply to commission earnings. It is advisable to consider these factors when calculating actual take-home pay.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed commission calculations.</p>
    <br>
  `;

  window.calcCommission = function () {
    let sales = +document.getElementById("saleAmt").value;
    let rate = +document.getElementById("comRate").value;

    let commission = (sales * rate) / 100;

    document.getElementById("comResult").innerHTML =
      `<b>Commission Earned:</b> ₹${commission.toFixed(2)}`;
  };

  return div;
}
