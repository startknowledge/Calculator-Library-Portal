export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Fraction 1 (a/b)</label>
    <input id="a"><input id="b">

    <label>Fraction 2 (c/d)</label>
    <input id="c"><input id="d">

    <button onclick="calcFraction()">Calculate</button>
    <p id="fracResult"></p>
    <br>
    <p>The Fraction Addition Calculator allows you to add two fractions together. Enter the numerators and denominators of the two fractions, then click "Calculate" to see the result in fractional form.</p>  
    <p>This calculator is useful for students, teachers, and anyone working with fractions in mathematics. It simplifies the process of adding fractions by handling the calculations for you.</p>
    <p><b>Note:</b> Ensure that the denominators are not zero to avoid undefined results.</p>
    <p><b>Example:</b> For fractions 1/2 and 1/3, the result would be 5/6.</p>
    <p><b>Formula:</b> (a/b) + (c/d) = (a*d + b*c) / (b*d)</p>
    <p><b>Disclaimer:</b> This calculator provides an exact fractional result and does not simplify the fraction. Users may need to simplify the result manually if required.</p>
    <br>
  `;

  window.calcFraction = function () {
    let num = a.value*d.value + b.value*c.value;
    let den = b.value*d.value;

    fracResult.innerHTML = `<b>Result:</b> ${num}/${den}`;
  };

  return div;
}
