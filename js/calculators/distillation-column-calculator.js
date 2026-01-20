export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Number of Plates ≈ log separation / log relative volatility</h3>

    <label>Separation Factor</label>
    <input id="sep" value="20">

    <label>Relative Volatility</label>
    <input id="alpha" value="2">

    <button onclick="calcDist()">Calculate</button>
    <p id="distResult"></p>
  `;

  window.calcDist = function () {
    let sep = +document.getElementById("sep").value;
    let alpha = +document.getElementById("alpha").value;

    let stages = Math.log(sep) / Math.log(alpha);

    distResult.innerHTML =
      `<b>Required Stages:</b> ${stages.toFixed(1)}`;
  };

  return div;
}
