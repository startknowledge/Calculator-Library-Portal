export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Cement Bags = (Concrete Volume × Cement Ratio) ÷ 0.035<br>(1 cement bag ≈ 0.035 m³)</h3>

    <label>Concrete Volume (m³)</label>
    <input id="vol" value="1">

    <label>Cement Ratio (e.g. 1 for 1:2:4)</label>
    <input id="ratio" value="1">

    <button onclick="calcCement()">Calculate</button>
    <p id="cementResult"></p>
  `;

  window.calcCement = function () {
    let vol = +vol.value;
    let ratio = +ratio.value;

    let bags = (vol * ratio) / 0.035;

    cementResult.innerHTML =
      `<b>Cement Required:</b> ${bags.toFixed(2)} Bags`;
  };

  return div;
}
