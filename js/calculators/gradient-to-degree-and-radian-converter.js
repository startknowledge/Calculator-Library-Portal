export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter Gradient:</label>
    <input type="number" id="gradValue" placeholder="Enter gradient">

    <button onclick="gradConvert()">Convert</button>
    <p id="gradResult"></p>
    <br>
    <h3>Gradient to Degree and Radian Converter</h3>
    <p>Calculate degrees and radians from gradients using this converter tool.</p>
    <p><b>Explanation:</b></p>
    <p>Gradients (or grads) are mainly used in surveying, mapping, and some European engineering systems.</p>
    <p>To convert gradients to degrees and radians, the following formulas are used:</p>
    <p><b>Formula:</b></p>
    <p>
      Degree = Gradient × 0.9<br>
      Radian = Gradient × π / 200
    </p>
    <p>Relationships between gradients, degrees, and radians are crucial for accurate angular measurements.</p>
    <p><b>Example:</b>  
    If you enter <b>100 gradients</b>, the output will be <b>90°</b> and <b>1.5708 radians</b>.</p>
    <p>Based on the input gradient value, it calculates the equivalent degree and radian values.</p>
    <p><b>Note:</b> Gradients divide a right angle into 100 equal parts.</p>
    <P>It is essential to understand how gradients relate to degrees and radians for accurate conversions.</P>
    <p><b>Disclaimer:</b> Minor rounding differences may occur.</p>
    <br>
  `;

  window.gradConvert = function () {
    const grad = parseFloat(document.getElementById("gradValue").value);
    if (isNaN(grad)) return;

    const deg = (grad * 0.9).toFixed(6);
    const rad = (grad * Math.PI / 200).toFixed(6);

    document.getElementById("gradResult").innerHTML =
      `<b>Degrees:</b> ${deg}<br><b>Radians:</b> ${rad}`;
  };

  return div;
}
