export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <h3>Cement Calculator<br><br>Cement (bags) = (Concrete Volume × Cement Ratio × 1440) / 50</h3>
    <label>Concrete Volume (m³)</label>
    <input type="number" id="vol">

    <label>Cement Ratio</label>
    <input type="number" id="ratio">

    <button onclick="calcCement()">Calculate</button>
    <p id="cementResult"></p>
  `;

  window.calcCement = function () {
    let v = +vol.value;
    let r = +ratio.value;

    let bags = (v * r * 1440) / 50;

    cementResult.innerHTML =
      `<b>Cement Required:</b> ${bags.toFixed(2)} bags`;
  };

  return div;
}
