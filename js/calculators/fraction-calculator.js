export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Fraction 1 (a/b)</label>
    <input id="a"><input id="b">

    <label>Fraction 2 (c/d)</label>
    <input id="c"><input id="d">

    <button onclick="calcFraction()">Calculate</button>
    <p id="fracResult"></p>
  `;

  window.calcFraction = function () {
    let num = a.value*d.value + b.value*c.value;
    let den = b.value*d.value;

    fracResult.innerHTML = `<b>Result:</b> ${num}/${den}`;
  };

  return div;
}
