export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Clothing Inventory Calculator</h3>

    <label>Opening Stock</label>
    <input id="open" value="500">

    <label>Purchased</label>
    <input id="buy" value="300">

    <label>Sold</label>
    <input id="sold" value="450">

    <button onclick="calcInv()">Calculate</button>
    <p id="invResult"></p>
  `;

  window.calcInv = function () {
    let open = +document.getElementById("open").value;
    let buy = +document.getElementById("buy").value;
    let sold = +document.getElementById("sold").value;

    let closing = open + buy - sold;

    document.getElementById("invResult").innerHTML =
      `<b>Closing Stock:</b> ${closing} units`;
  };

  return div;
}
