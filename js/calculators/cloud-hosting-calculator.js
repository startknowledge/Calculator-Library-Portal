export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Cost = Monthly Cost × Months</h3>

    <label>Monthly Cost (₹)</label>
    <input id="cost" value="2500">

    <label>Duration (Months)</label>
    <input id="months" value="12">

    <button onclick="calcCloud()">Calculate</button>
    <p id="cloudResult"></p>
    <br>
    <p><u>Explanation about Cloud Hosting Cost Calculator</u> :</p>
    <p>The Cloud Hosting Cost Calculator is a tool designed to help businesses and individuals estimate the total cost of cloud hosting services over a specified period. By inputting the monthly cost of the cloud hosting service and the duration in months, users can quickly calculate the overall expense associated with their cloud hosting needs.</p>
    <p>To use the calculator, simply enter the monthly cost charged by your cloud service provider and the number of months you plan to use the service. The calculator will then multiply these two values to provide you with the total hosting cost.</p>
    <p>This calculator is particularly useful for budgeting and financial planning, allowing users to understand their cloud hosting expenses upfront. It can help in comparing different cloud service providers and selecting the most cost-effective option based on projected usage.</p>
    <p>Please note that this calculator provides a basic estimate and may not account for additional costs such
  as data transfer fees, storage costs, or other service charges that may apply depending on the cloud hosting provider and the specific services utilized.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed cost analysis from cloud service providers.</p>
    <br>
  `;

  window.calcCloud = function () {
    document.getElementById("cloudResult").innerHTML =
      `<b>Total Hosting Cost:</b> ₹${document.getElementById("cost").value * document.getElementById("months").value}`;
  };

  return div;
}
