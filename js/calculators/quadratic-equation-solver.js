export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Quadratic Equation Solver</h3>
    <p>Solve equations of the form <b>ax² + bx + c = 0</b>.</p>

    <label>a</label>
    <input type="number" id="qa" placeholder="Enter a">

    <label>b</label>
    <input type="number" id="qb" placeholder="Enter b">

    <label>c</label>
    <input type="number" id="qc" placeholder="Enter c">

    <button onclick="solveQuad()">Solve</button>
    <p id="quadResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator finds the roots of a quadratic equation using the quadratic formula.</p>

    <h4>Formula:</h4>
    <p>Roots = (-b ± √(b² - 4ac)) / 2a</p>

    <h4>Note:</h4>
    <p>If the discriminant (b² - 4ac) is negative, the roots will be complex numbers.</p>

    <h4>Disclaimer:</h4>
    <p>This calculator is for educational purposes only. Verify results for critical applications.</p>
  `;

  window.solveQuad = function () {
    const a = parseFloat(document.getElementById("qa").value);
    const b = parseFloat(document.getElementById("qb").value);
    const c = parseFloat(document.getElementById("qc").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      quadResult.innerHTML = "Please enter valid numbers. 'a' cannot be 0.";
      return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant >= 0) {
      const r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      quadResult.innerHTML = `<b>Roots:</b> ${r1.toFixed(2)}, ${r2.toFixed(2)}`;
    } else {
      const realPart = (-b / (2 * a)).toFixed(2);
      const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      quadResult.innerHTML = `<b>Roots:</b> ${realPart} + ${imagPart}i, ${realPart} - ${imagPart}i`;
    }
  };

  return div;
}
