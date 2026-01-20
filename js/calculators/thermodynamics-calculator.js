export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Heat Energy = Mass × Specific Heat × Temperature Change<br>
    Q = m × c × ΔT</h3>

    <label>Mass (kg)</label>
    <input id="m" value="5">

    <label>Specific Heat (J/kg°C)</label>
    <input id="c" value="4186">

    <label>Temperature Change (°C)</label>
    <input id="t" value="20">

    <button onclick="calcHeat()">Calculate</button>
    <p id="heatResult"></p>
  `;

  window.calcHeat = function () {
    let m = +document.getElementById("m").value;
    let c = +document.getElementById("c").value;
    let t = +document.getElementById("t").value;

    let q = m * c * t;

    heatResult.innerHTML =
      `<b>Heat Energy:</b> ${q.toFixed(2)} Joules`;
  };

  return div;
}
