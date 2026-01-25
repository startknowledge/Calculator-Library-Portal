export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Trigonometry Calculator</h2>
    <p>This calculator computes the sine, cosine, and tangent of an angle given in degrees.</p>

    <label>Angle (in degrees)</label>
    <input type="number" id="triAngle" value="45">

    <button onclick="calcTrig()">Calculate</button>
    <p id="triResult"></p>

    <br>
    <p><b>Explanation:</b> The calculator converts the input angle from degrees to radians and then uses standard trigonometric functions to calculate SIN, COS, and TAN.</p>
    <p><b>Formula:</b> 
      <i>
        radians = degrees × π / 180 <br>
        SIN(θ) = sin(radians) <br>
        COS(θ) = cos(radians) <br>
        TAN(θ) = tan(radians)
      </i>
    </p>
    <p><b>Calculator is a tool:</b> Useful for students, engineers, and anyone working with angles in math, physics, or engineering.</p>
    <p><b>Relative Note:</b> The results are based on standard mathematical definitions of trigonometric functions.</p>
    <p><b>Based On:</b> Radian measure of angles and JavaScript Math library functions.</p>
    <p><b>To Use the Calculator:</b> Enter an angle in degrees and click "Calculate". The SIN, COS, and TAN values will appear below.</p>
    <p><b>Note:</b> Ensure the angle is entered in degrees. TAN(90° + n*180°) will be very large or undefined due to division by zero.</p>
    <p><b>It is important:</b> This calculator provides approximate values rounded to 4 decimal places.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for errors or decisions made based on this calculator. Always verify critical calculations manually if needed.</p>
    <br><hr>
  `;

  window.calcTrig = function () {
    const deg = parseFloat(document.getElementById("triAngle").value);
    if (isNaN(deg)) {
      document.getElementById("triResult").innerHTML = "❌ Please enter a valid number";
      return;
    }

    const rad = deg * Math.PI / 180;

    document.getElementById("triResult").innerHTML = `
      <b>SIN:</b> ${Math.sin(rad).toFixed(4)} <br>
      <b>COS:</b> ${Math.cos(rad).toFixed(4)} <br>
      <b>TAN:</b> ${Math.tan(rad).toFixed(4)}
    `;
  };

  return div;
}
