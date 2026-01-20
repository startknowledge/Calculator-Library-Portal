export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Favourable Outcomes</label>
    <input type="number" id="fav">

    <label>Total Outcomes</label>
    <input type="number" id="total">

    <button onclick="calcProb()">Calculate</button>
    <p id="probResult"></p>
  `;

  window.calcProb = function () {
    let p = fav.value / total.value;

    probResult.innerHTML =
      `<b>Probability:</b> ${p.toFixed(2)}`;
  };

  return div;
}
