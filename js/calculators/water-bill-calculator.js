export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Water Usage (Litres)</label>
    <input type="number" id="litres">

    <label>Rate per Litre (₹)</label>
    <input type="number" id="rate">

    <button onclick="calcWaterBill()">Calculate</button>
    <p id="waterResult"></p>
  `;

  window.calcWaterBill = function () {
    let bill = +litres.value * +rate.value;

    waterResult.innerHTML =
      `<b>Water Bill:</b> ₹${bill.toFixed(2)}`;
  };

  return div;
}
