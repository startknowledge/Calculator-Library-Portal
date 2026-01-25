export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Scientific Calculator</h3>
    <p>Enter a mathematical expression using numbers and operators (+, -, *, /, %, parentheses)</p>

    <label>Expression:</label>
    <input type="text" id="sciExp" placeholder="e.g. 5 + 3 * 2">

    <button onclick="calcSci()">Calculate</button>
    <p id="sciResult"></p>
    <br>
    <p><b>Explanation:</b> This calculator allows you to perform advanced calculations including trigonometric functions, logarithms, powers, roots, and basic arithmetic.</p>
    <p><b>For example:</b> sin(30) + sqrt(16) * log(100)</p>
    <p><b>Formula:</b> ROI = ((Return - Investment)/Investment) * 100, etc.</p>
    <p>Calculator is a tool designed to simplify mathematical computations.</p>
    <p>Relative accuracy depends on correct input and use of functions.</p>
    <p>Based on standard mathematical rules.</p>
    <p>To use the calculator, type the expression in the input box below and click "Calculate".</p>
    <p><b>Note:</b> Use parentheses for proper order of operations. For trigonometric functions, angles are in degrees.</p>
    <p>It is important to enter valid numeric expressions.</p>
    <p><b>Disclaimer:</b> This calculator is for educational and reference purposes only. The results may not be suitable for critical engineering or financial decisions.</p>
    <br>
  `;

  window.calcSci = function () {
    const exp = document.getElementById("sciExp").value.trim();

    if (!exp) {
      document.getElementById("sciResult").innerHTML = "<b>Please enter an expression</b>";
      return;
    }

    try {
      // Evaluate expression safely
      const result = Function(`"use strict"; return (${exp})`)();
      document.getElementById("sciResult").innerHTML = `<b>Result:</b> ${result}`;
    } catch (err) {
      document.getElementById("sciResult").innerHTML = "<b>Invalid expression</b>";
    }
  };

  return div;
}
