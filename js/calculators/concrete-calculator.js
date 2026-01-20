export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br>
  <h3>Concrete Volume Calculator</h3>
  <h3>Concrete Volume (m³) = Length (m) × Width (m) × Height (m)</h3>
    <label>Length (m)</label>
    <input type="number" id="l">

    <label>Width (m)</label>
    <input type="number" id="w">

    <label>Height (m)</label>
    <input type="number" id="h">

    <button onclick="calcConcrete()">Calculate</button>
    <p id="concResult"></p>
  `;

  window.calcConcrete = function () {
    let volume = l.value * w.value * h.value;

    concResult.innerHTML =
      `<b>Concrete Volume:</b> ${volume.toFixed(2)} m³`;
  };

  return div;
}
