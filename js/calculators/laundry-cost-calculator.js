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
  `;

  div.querySelector("#calcBtn").onclick = function () {
    let rate = +document.getElementById("rate").value;
    let qty = +document.getElementById("qty").value;

    document.getElementById("laundryResult").innerHTML =
      `<b>Total Laundry Cost:</b> ₹${rate * qty}`;
  };

  return div;
}
