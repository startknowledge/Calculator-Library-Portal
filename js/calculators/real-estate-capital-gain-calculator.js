export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Real Estate Capital Gain Calculator</h3>

    <label>Purchase Price (₹)</label>
    <input id="buy" value="3000000">

    <label>Selling Price (₹)</label>
    <input id="sell" value="5000000">

    <button onclick="calcCG()">Calculate</button>
    <p id="cgResult"></p>
  `;

  window.calcCG = function () {
    let buy = +document.getElementById("buy").value;
    let sell = +document.getElementById("sell").value;

    let gain = sell - buy;

    document.getElementById("cgResult").innerHTML =
      `<b>Capital Gain:</b> ₹${gain}`;
  };

  return div;
}
