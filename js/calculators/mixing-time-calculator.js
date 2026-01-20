export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mixing Time = Tank Volume ÷ Flow Rate</h3>

    <label>Tank Volume (m³)</label>
    <input id="vol" value="10">

    <label>Flow Rate (m³/min)</label>
    <input id="flow" value="0.5">

    <button onclick="calcMix()">Calculate</button>
    <p id="mixResult"></p>
  `;

  window.calcMix = function () {
    let vol = +document.getElementById("vol").value;
    let flow = +document.getElementById("flow").value;

    mixResult.innerHTML =
      `<b>Mixing Time:</b> ${(vol / flow).toFixed(2)} minutes`;
  };

  return div;
}
