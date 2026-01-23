export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter Degree:</label>
    <input type="number" id="degValue" placeholder="Enter degree">

    <button onclick="degConvert()">Convert</button>
    <p id="degResult"></p>
    <br>
    <p><b>Explanation:</b></p>
    <ul>
      <li><b>Degree:</b> A unit of angle measurement where a full circle equals 360°.</li>
      <li><b>Radian:</b> The standard unit of angular measure used in mathematics.</li>
      <li><b>Gradient (Grad):</b> An angle unit where a full circle equals 400 grads.</li>
    </ul>
    <p>This calculator converts degrees into radians and gradients using standard mathematical formulas.</p>
    <p>Based on the input degree value, it calculates the equivalent radian and gradient values.</p>
    <p>Calculations are performed using the following formulas:</p>
    <p><b>Formula:</b></p>
    <p>
      Radian = Degree × π / 180<br>
      Gradient = Degree × 10 / 9
    </p>
    <p><b>Example:</b>  
    If you enter <b>90°</b>, the result will be <b>1.5708 radians</b> and <b>100 gradients</b>.</p>
    <p><b>Note:</b> Degree-based calculations are commonly used in geometry and trigonometry.</p>
    <p><b>Disclaimer:</b> Results are rounded for simplicity and educational use.</p>
    <br>
  `;

  window.degConvert = function () {
    const deg = parseFloat(document.getElementById("degValue").value);
    if (isNaN(deg)) return;

    const rad = (deg * Math.PI / 180).toFixed(6);
    const grad = (deg * 10 / 9).toFixed(6);

    document.getElementById("degResult").innerHTML =
      `<b>Radians:</b> ${rad}<br><b>Gradients:</b> ${grad}`;
  };

  return div;
}
