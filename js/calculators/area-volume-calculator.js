export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br>
  <h3>Area = Length × Width</h3>
  <h3>Volume = Area × Height</h3>
    <label>Length</label>
    <input type="number" id="L">

    <label>Width</label>
    <input type="number" id="W">

    <label>Height</label>
    <input type="number" id="H">

    <button onclick="calcAreaVol()">Calculate</button>
    <p id="areaVolResult"></p>
  `;

  window.calcAreaVol = function () {
    let area = L.value * W.value;
    let volume = area * H.value;

    areaVolResult.innerHTML =
      `<b>Area:</b> ${area} sq.m<br>
       <b>Volume:</b> ${volume} m³`;
  };

  return div;
}
