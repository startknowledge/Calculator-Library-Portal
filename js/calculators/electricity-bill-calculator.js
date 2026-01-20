export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Units Consumed (kWh)</label>
    <input type="number" id="unit">

    <label>Rate per Unit (₹)</label>
    <input type="number" id="rate">

    <button onclick="calcBill()">Calculate</button>
    <p id="billResult"></p>
  `;

  window.calcBill = function () {
    let bill = unit.value * rate.value;
    billResult.innerHTML =
      `<b>Electricity Bill:</b> ₹${bill.toFixed(2)}`;
  };

  return div;
}
