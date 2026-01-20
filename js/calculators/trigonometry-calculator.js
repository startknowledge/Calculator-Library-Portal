export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Angle (in degrees)</label>
    <input type="number" id="triAngle">

    <button onclick="calcTrig()">Calculate</button>
    <p id="triResult"></p>
  `;

  window.calcTrig = function () {
    let deg = document.getElementById("triAngle").value;
    let rad = deg * Math.PI / 180;

    document.getElementById("triResult").innerHTML = `
      <b>SIN:</b> ${Math.sin(rad).toFixed(4)} <br>
      <b>COS:</b> ${Math.cos(rad).toFixed(4)} <br>
      <b>TAN:</b> ${Math.tan(rad).toFixed(4)}
    `;
  };

  return div;
}
