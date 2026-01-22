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
    <br>
    <p><u>Explanation about Clothing Inventory Calculator</u> :</p>
    <p>The Clothing Inventory Calculator is a tool designed to help clothing retailers and manufacturers determine their closing inventory levels. It calculates the closing stock by adding the opening stock and purchases, then subtracting the number of units sold during a specific period.</p>
    <p>To use the calculator, input the opening stock (the number of units available at the beginning of the period), the number of units purchased during the period, and the number of units sold during the same period. The calculator will then compute the closing stock, which represents the remaining inventory at the end of that period.</p>
    <p>This calculation is essential for inventory management, financial reporting, and ensuring that businesses maintain optimal stock levels to meet customer demand without overstocking or understocking.</p>
    <p>For example, if a clothing store starts with 500 units in opening stock, purchases 300 more units, and sells 450 units during a month, the closing stock would be 350 units (500 + 300 - 450).</p>
    <p>Please note that this calculator provides a basic estimate and should be used in conjunction with more detailed inventory tracking systems for accurate business operations.</p>
    <br>
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
