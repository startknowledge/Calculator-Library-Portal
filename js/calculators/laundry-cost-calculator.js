export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Laundry Cost Calculator</h3>

    <label>Cost per Cloth (₹)</label>
    <input id="rate" type="number" value="30">

    <label>Number of Clothes</label>
    <input id="qty" type="number" value="60">

    <button id="calcBtn">Calculate</button>
    <p id="laundryResult"></p>
    <br>
    <p>The Laundry Cost Calculator helps you determine the total cost of laundry services based on the cost per cloth and the number of clothes. By entering these values, users can quickly calculate the overall expense.</p>
    <p>This calculator is useful for individuals and businesses who want to budget for laundry expenses.</p>
    <p>Ensure that all inputs are accurate to get a reliable cost estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the cost per cloth in the "Cost per Cloth" field and the number of clothes in the "Number of Clothes" field, then click the "Calculate" button to see the total laundry cost displayed below.</p>
    <p><b>Formula:</b> Total Cost = Cost per Cloth × Number of Clothes</p>
    <p><b>Example:</b> If the cost per cloth is ₹30 and you have 60 clothes, the total laundry cost would be: 30 × 60 = ₹1800.</p>
    <p><b>Note:</b> This calculator provides an estimate and should be used for budgeting purposes. Actual costs may vary based on additional factors such as service charges and discounts.</p>
    <p>For more detailed laundry cost management, consider consulting with laundry service providers for accurate pricing.</p>
    <p>Feel free to share this tool with colleagues or friends who might find it useful!</p>
    <p>Disclaimer: This calculator is provided for informational purposes only and does not constitute professional advice. Users should verify calculations and consider all relevant factors when budgeting for laundry expenses.</p>
    <br>
  `;

  div.querySelector("#calcBtn").onclick = function () {
    let rate = +document.getElementById("rate").value;
    let qty = +document.getElementById("qty").value;

    document.getElementById("laundryResult").innerHTML =
      `<b>Total Laundry Cost:</b> ₹${rate * qty}`;
  };

  return div;
}
