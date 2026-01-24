export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Gradient to Degree and Radian Converter</h3>
    <p>Convert gradients (grads) into degrees and radians accurately.</p>

    <label>Enter Gradient:</label>
    <input type="number" id="gradValue" placeholder="Enter gradient">

    <button id="gradBtn">Convert</button>
    <p id="gradResult"></p>

    <h4>Explanation:</h4>
    <p>Gradients (or grads) are mainly used in surveying, mapping, and some European engineering systems.</p>
    <p>Conversion formulas:</p>
    <ul>
      <li><b>Degree = Gradient × 0.9</b></li>
      <li><b>Radian = Gradient × π / 200</b></li>
    </ul>
    <p>Relationships between gradients, degrees, and radians are crucial for accurate angular measurements.</p>
    <p><b>Example:</b> If you enter <b>100 gradients</b>, the output will be <b>90°</b> and <b>1.5708 radians</b>.</p>
    <p><b>Note:</b> Gradients divide a right angle into 100 equal parts.</p>
    <p><b>Disclaimer:</b> Minor rounding differences may occur.</p>
    <br>
  `;

  // Attach calculation
  div.querySelector("#gradBtn").onclick = () => {
    const grad = parseFloat(document.getElementById("gradValue").value);

    if (isNaN(grad)) {
      document.getElementById("gradResult").innerHTML = "Please enter a valid number!";
      return;
    }

    const deg = (grad * 0.9).toFixed(6);
    const rad = (grad * Math.PI / 200).toFixed(6);

    document.getElementById("gradResult").innerHTML = `
      <b>Degrees:</b> ${deg}°<br>
      <b>Radians:</b> ${rad} rad
    `;
  };

  return div;
}
