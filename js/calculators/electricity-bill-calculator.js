export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Units Consumed (kWh)</label>
    <input type="number" id="unit">

    <label>Rate per Unit (₹)</label>
    <input type="number" id="rate">

    <button onclick="calcBill()">Calculate</button>
    <p id="billResult"></p>
    <br>
    <p><u>Explanation about Electricity Bill Calculator</u> :</p>
    <p>The Electricity Bill Calculator is a simple tool designed to help users estimate their monthly electricity expenses based on their energy consumption and the rate charged per unit of electricity. By inputting the total units consumed in kilowatt-hours (kWh) and the cost per unit, users can quickly calculate their total electricity bill.</p>
    <p>To use the calculator, simply enter the number of units consumed during the billing period and the rate charged by the electricity provider per unit. After clicking the "Calculate" button, the tool will compute and display the total electricity bill amount.</p>
    <p>This calculator is particularly useful for households and businesses looking to manage their energy costs effectively. By understanding their electricity consumption patterns and associated costs, users can make informed decisions about energy usage, potentially leading to cost savings and more efficient energy management.</p>
    <p>In summary, the Electricity Bill Calculator is a valuable resource for anyone seeking to estimate their electricity expenses, providing clarity on monthly payment requirements and aiding in effective budget planning.</p>
    <p><b>Note:</b> This calculator provides an estimate of the electricity bill based on the inputs provided and does not account for additional charges such as taxes, surcharges, or fixed fees that may be included in the final bill.</p>
    <p>For more accurate billing information, consider reviewing your electricity provider's tariff structure or consulting with their customer service.</p>  
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with your electricity provider for precise billing details.</p>
    <br>
  `;

  window.calcBill = function () {
    let bill = unit.value * rate.value;
    billResult.innerHTML =
      `<b>Electricity Bill:</b> ₹${bill.toFixed(2)}`;
  };

  return div;
}
