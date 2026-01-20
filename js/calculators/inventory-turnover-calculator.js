export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Inventory Turnover Calculator</h3>

    <label>Cost of Goods Sold (₹)</label>
    <input id="cogs" value="500000">

    <label>Average Inventory (₹)</label>
    <input id="avgInv" value="100000">

    <button onclick="calcInventory()">Calculate</button>
    <p id="invResult"></p>
  `;

  window.calcInventory = function () {
    let cogs = +document.getElementById("cogs").value;
    let avg = +document.getElementById("avgInv").value;

    let turnover = cogs / avg;

    document.getElementById("invResult").innerHTML =
      `<b>Inventory Turnover Ratio:</b> ${turnover.toFixed(2)}`;
  };

  return div;
}
