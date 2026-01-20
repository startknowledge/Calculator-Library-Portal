export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Load (Watt)</label>
    <input type="number" id="load">

    <button onclick="calcInv()">Calculate</button>
    <p id="invResult"></p>
  `;

  window.calcInv = function () {
    let va = load.value / 0.8;
    invResult.innerHTML =
      `<b>Required Inverter:</b> ${va.toFixed(0)} VA`;
  };

  return div;
}
