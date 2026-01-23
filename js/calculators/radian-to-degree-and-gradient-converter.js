export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter Radian:</label>
    <input type="number" id="radValue" placeholder="Enter radian">

    <button onclick="radConvert()">Convert</button>
    <p id="radResult"></p>
    <br>
    <p><b>Explanation:</b></p>
    <p>Radians are widely used in advanced mathematics, physics, and engineering calculations.</p>
    <p>To convert radians to degrees and gradients, the following formulas are used:</p>
    <p>It is important to understand the relationship between these units of angular measurement.</p>
    <p><b>Formula:</b></p>
    <p>
      Degree = Radian × 180 / π<br>
      Gradient = Radian × 200 / π
    </p>
    <p><b>Example:</b>  
    If the radian value is <b>π/2</b>, the output will be <b>90°</b> and <b>100 gradients</b>.</p>
    <p><b>Note:</b> Radians provide more natural results in calculus and trigonometry.</p>
    <p>Based on the input radian value, it calculates the equivalent degree and gradient values.</p>
    <p><b>Disclaimer:</b> This calculator is intended for educational and general use.</p>
    <br>
  `;

  window.radConvert = function () {
    const rad = parseFloat(document.getElementById("radValue").value);
    if (isNaN(rad)) return;

    const deg = (rad * 180 / Math.PI).toFixed(6);
    const grad = (rad * 200 / Math.PI).toFixed(6);

    document.getElementById("radResult").innerHTML =
      `<b>Degrees:</b> ${deg}<br><b>Gradients:</b> ${grad}`;
  };

  return div;
}
