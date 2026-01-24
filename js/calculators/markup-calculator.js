export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Markup Calculator</h3>

    <p>
      This calculator helps you determine the selling price of an item
      based on its cost price and desired markup percentage.
    </p>

    <label>Cost Price (₹)</label>
    <input type="number" id="costM" min="0" value="1000" placeholder="Enter cost price">

    <label>Markup (%)</label>
    <input type="number" id="markup" min="0" value="20" placeholder="Enter markup %">

    <button onclick="calcMarkup()">Calculate</button>

    <p id="markupResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>
      Selling Price = Cost Price + (Cost Price × Markup ÷ 100)
    </p>

    <p><b>Example:</b></p>
    <p>
      Cost Price = ₹1000<br>
      Markup = 20%<br>
      <b>Selling Price = ₹1200</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for retailers, small business owners,
      and pricing products for profit.
    </p>

    <p><b>Disclaimer:</b>
      This calculator provides an estimate for planning purposes.
    </p>
  `;

  window.calcMarkup = function () {
    const cost = parseFloat(document.getElementById("costM").value);
    const mark = parseFloat(document.getElementById("markup").value);

    if (isNaN(cost) || isNaN(mark) || cost < 0 || mark < 0) {
      document.getElementById("markupResult").innerHTML =
        "<b>Please enter valid input values.</b>";
      return;
    }

    const price = cost + (cost * mark / 100);

    document.getElementById("markupResult").innerHTML =
      `<b>Selling Price:</b> ₹${price.toFixed(2)}`;
  };

  return div;
}
