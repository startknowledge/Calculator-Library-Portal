export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Markup Calculator</h3>

    <label>Cost Price (₹)</label>
    <input id="costM" value="1000">

    <label>Markup (%)</label>
    <input id="markup" value="20">

    <button onclick="calcMarkup()">Calculate</button>
    <p id="markupResult"></p>
  `;

  window.calcMarkup = function () {
    let cost = +costM.value;
    let mark = +markup.value;

    let price = cost + (cost * mark / 100);

    markupResult.innerHTML =
      `<b>Selling Price:</b> ₹${price}`;
  };

  return div;
}
