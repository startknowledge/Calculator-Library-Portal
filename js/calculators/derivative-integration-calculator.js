export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Coefficient (ax²)</label>
    <input id="a">

    <button onclick="calcDeriv()">Calculate</button>
    <p id="derivResult"></p>
    <br>
    <p><u>Explanation about Derivative Calculator</u> :</p>
    <p>The Derivative Calculator is a tool designed to help students, educators, and professionals compute the derivative of polynomial functions quickly and accurately. By inputting the coefficient of the quadratic term, users can easily find the derivative, which is essential in various fields such as physics, engineering, and economics.</p>
    <p>To use the calculator, simply enter the coefficient 'a' of the quadratic term (ax²). The calculator will then apply the power rule of differentiation to compute the derivative, which in this case is 2ax.</p>
    <p>This tool is particularly useful for those studying calculus or working in fields that require frequent calculations of rates of change. It helps in understanding the behavior of functions and optimizing solutions in real-world applications.</p>
    <p>Disclaimer: This tool is intended for educational purposes only and should not be used as a substitute for professional mathematical advice or detailed calculus analysis.</p>
    <br>
  `;

  window.calcDeriv = function () {
    derivResult.innerHTML = `<b>Derivative:</b> ${2*a.value}x`;
  };

  return div;
}
