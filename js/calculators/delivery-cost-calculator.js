export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Delivery Cost Calculator</h3>

    <label>Distance (km)</label>
    <input id="dist" value="50">

    <label>Cost per km (₹)</label>
    <input id="rate" value="12">

    <button onclick="calcDelivery()">Calculate</button>
    <p id="deliveryResult"></p>
    <br>
    <p><u>Explanation about Delivery Cost Calculator</u> :</p>
    <p>The Delivery Cost Calculator is a tool designed to help businesses and individuals estimate the total cost of delivering goods or services over a specified distance. By inputting the distance and the cost per kilometer, users can quickly determine the total delivery cost.</p>
    <p>To use the calculator, simply enter the distance in kilometers and the cost per kilometer in Indian Rupees (₹). The calculator will then multiply these two values to provide the total delivery cost.</p>
    <p>This tool is particularly useful for logistics companies, e-commerce businesses, and anyone involved in transportation planning. It helps in budgeting for delivery expenses and making informed decisions about shipping options.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional logistics advice or detailed delivery cost analysis.</p>
    <br>
  `;

  window.calcDelivery = function () {
    let d = +document.getElementById("dist").value;
    let r = +document.getElementById("rate").value;

    let cost = d * r;

    document.getElementById("deliveryResult").innerHTML =
      `<b>Total Delivery Cost:</b> ₹${cost}`;
  };

  return div;
}
