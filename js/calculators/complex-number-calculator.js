export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Complex 1 (a + bi)</label>
    <input id="a"><input id="b">

    <label>Complex 2 (c + di)</label>
    <input id="c"><input id="d">

    <button onclick="calcComplex()">Calculate</button>
    <p id="complexResult"></p>
  `;

  window.calcComplex = function () {
    let real = +a.value + +c.value;
    let imag = +b.value + +d.value;

    complexResult.innerHTML = `<b>Result:</b> ${real} + ${imag}i`;
  };

  return div;
}
