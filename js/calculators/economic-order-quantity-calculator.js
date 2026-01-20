export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Economic Order Quantity (EOQ) Calculator</h3>
    <h3>EOQ = √((2 × Demand × Ordering Cost) ÷ Holding Cost)</h3><br>

    <label>Annual Demand (Units)</label>
    <input id="demand" value="10000">

    <label>Ordering Cost per Order (₹)</label>
    <input id="orderCost" value="500">

    <label>Holding Cost per Unit / Year (₹)</label>
    <input id="holdCost" value="20">

    <button onclick="calcEOQ()">Calculate</button>
    <p id="eoqResult"></p>
  `;

  window.calcEOQ = function () {
    let demand = +document.getElementById("demand").value;
    let orderCost = +document.getElementById("orderCost").value;
    let holdCost = +document.getElementById("holdCost").value;

    let eoq = Math.sqrt((2 * demand * orderCost) / holdCost);

    document.getElementById("eoqResult").innerHTML =
      `<b>Optimal Order Quantity (EOQ):</b> ${eoq.toFixed(0)} units`;
  };

  return div;
}
