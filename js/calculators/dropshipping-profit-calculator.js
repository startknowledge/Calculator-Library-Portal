export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Dropshipping Profit Calculator</h3>

    <label>Product Selling Price (₹)</label>
    <input id="sp" value="1500">

    <label>Supplier Cost (₹)</label>
    <input id="sc" value="900">

    <label>Marketing Cost per Unit (₹)</label>
    <input id="mc" value="150">

    <label>Units Sold</label>
    <input id="qty" value="40">

    <button onclick="calcDrop()">Calculate</button>
    <p id="dropResult"></p>
  `;

  window.calcDrop = function () {
    let sp = +document.getElementById("sp").value;
    let sc = +document.getElementById("sc").value;
    let mc = +document.getElementById("mc").value;
    let qty = +document.getElementById("qty").value;

    let profit = (sp - sc - mc) * qty;

    document.getElementById("dropResult").innerHTML =
      `<b>Total Profit:</b> ₹${profit}`;
  };

  return div;
}
