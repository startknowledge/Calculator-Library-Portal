export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>a</label><input id="a">
    <label>b</label><input id="b">
    <label>c</label><input id="c">

    <button onclick="solveEq()">Calculate</button>
    <p id="eqResult"></p>
    <br>
    <p><u>Explanation about Equation Solver</u> :</p>
    <p>The Equation Solver is a mathematical tool designed to help users find the roots of a quadratic equation of the form ax² + bx + c = 0. By inputting the coefficients a, b, and c, users can quickly calculate the values of x that satisfy the equation.</p>
    <p>The roots are calculated using the quadratic formula: x = [-b ± √(b² - 4ac)] / 2a. This formula takes into account both the coefficients and the discriminant (D = b² - 4ac) to determine the nature of the roots, whether they are real or complex.</p>
    <p>To use the calculator, simply enter the values for a, b, and c in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the roots of the equation.</p>
    <p>This calculator is particularly useful for students, educators, and professionals who need to solve quadratic equations as part of their studies or work. By understanding the roots of the equation, users can analyze various mathematical problems and applications.</p>
    <p>In summary, the Equation Solver is a valuable resource for anyone dealing with quadratic equations, providing clarity on root values and aiding in effective problem-solving.</p>
    <p><b>Note:</b> This calculator provides an estimate of the roots based on the inputs provided and assumes real number solutions. Complex roots are not handled in this version.</p>
    <p>For personalized advice and detailed mathematical explanations, consider consulting with a mathematics educator or professional.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a mathematics professional for critical calculations.</p>
    <br>
  `;

  window.solveEq = function () {
    let D = b.value*b.value - 4*a.value*c.value;
    let x1 = (-b.value + Math.sqrt(D)) / (2*a.value);
    let x2 = (-b.value - Math.sqrt(D)) / (2*a.value);

    eqResult.innerHTML = `<b>Roots:</b> ${x1}, ${x2}`;
  };

  return div;
}
