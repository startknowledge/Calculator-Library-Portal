export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Commission Earnings Calculator</h3>

    <label>Policy Premium (₹)</label>
    <input type="number" id="commPremium">

    <label>Commission Rate (%)</label>
    <input type="number" id="commRate">

    <button onclick="calcCommission()">Calculate</button>
    <p id="commResult"></p>
    <br>
    <p><u>Explanation about Commission Earnings Calculator</u> :</p>
    <p>The Commission Earnings Calculator is a tool designed to help insurance agents, brokers, and financial advisors calculate the commission they earn based on the policy premium and commission rate. This calculator is particularly useful for professionals in the insurance industry who work on a commission basis and want to estimate their earnings from policy sales.</p>
    <p>To use the calculator, simply input the total policy premium in Indian Rupees (₹) and the commission rate as a percentage (%). The calculator will then compute the commission earned by multiplying the policy premium by the commission rate divided by 100.</p>
    <p>This calculator is beneficial for both agents and brokers, as it provides a clear understanding of earnings based on policy sales performance. It can help in setting sales targets, motivating sales teams, and managing financial planning.</p>
    <p>Please note that this calculator provides a basic estimate and may not account for additional factors such as taxes or deductions that may apply to commission earnings. It is advisable to consider these factors when calculating actual take-home pay.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed commission calculations.</p>
    <br>
  `;

  window.calcCommission = function () {
    let premium = parseFloat(document.getElementById("commPremium").value);
    let rate = parseFloat(document.getElementById("commRate").value);

    let commission = (premium * rate) / 100;

    document.getElementById("commResult").innerHTML =
      `<b>Commission Earned:</b> ₹${commission.toFixed(2)}`;
  };

  return div;
}
