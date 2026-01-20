export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Bricks Calculator</h3>
    <p><small>Formula: Wall Volume × 500 (Approx. 500 bricks per m³)</small></p>

    <label>Wall Volume (m³)</label>
    <input id="wallVol" type="number" value="2">

    <button id="calcBtn">Calculate</button>
    <p id="brickResult"></p>
  `;

  div.querySelector("#calcBtn").onclick = function () {
    const vol = +div.querySelector("#wallVol").value;
    const bricks = vol * 500;

    div.querySelector("#brickResult").innerHTML =
      `<b>Total Bricks Required:</b> ${bricks}`;
  };

  return div;
}
