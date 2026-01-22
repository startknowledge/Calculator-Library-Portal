export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Complex 1 (a + bi)</label>
    <input id="a"><input id="b">

    <label>Complex 2 (c + di)</label>
    <input id="c"><input id="d">

    <button onclick="calcComplex()">Calculate</button>
    <p id="complexResult"></p>
    <br>
    <p><u>Explanation about Complex Number Calculator</u> :</p>
    <p>The Complex Number Calculator is a tool designed to help users perform arithmetic operations on complex numbers, which are numbers that have both a real part and an imaginary part. Complex numbers are commonly represented in the form a + bi, where 'a' is the real part, 'b' is the imaginary part, and 'i' is the imaginary unit (the square root of -1).</p>
    <p>This calculator allows users to input two complex numbers and perform addition, subtraction, multiplication, or division on them. By entering the real and imaginary parts of each complex number into the designated input fields, users can easily compute the result of their chosen operation.</p>
    <p>Complex numbers are widely used in various fields such as engineering, physics, and applied mathematics. They are essential for solving problems involving oscillations, waves, and electrical circuits, among others. This calculator serves as a convenient tool for students, professionals, and anyone working with complex numbers to quickly obtain
    accurate results without the need for manual calculations.</p>
    <p>Disclaimer: This tool is intended for educational and informational purposes only and should not be used as a substitute for professional mathematical advice or detailed complex number analysis.</p>
    <br>
  `;

  window.calcComplex = function () {
    let real = +a.value + +c.value;
    let imag = +b.value + +d.value;

    complexResult.innerHTML = `<b>Result:</b> ${real} + ${imag}i`;
  };

  return div;
}
