export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br><br>
  <h3>Weight = (D² (Diameter (mm)) × Length) / 162</h3>
  <br><br>
    <label>Steel Diameter (mm)</label>
    <input type="number" id="d">

    <label>Length (m)</label>
    <input type="number" id="len">

    <button onclick="calcSteel()">Calculate</button>
    <p id="steelResult"></p>
  `;

  window.calcSteel = function () {
    let wt = (d.value * d.value * len.value) / 162;

    steelResult.innerHTML =
      `<b>Steel Weight:</b> ${wt.toFixed(2)} kg`;
  };

  return div;
}
