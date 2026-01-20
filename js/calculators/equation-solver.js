export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>a</label><input id="a">
    <label>b</label><input id="b">
    <label>c</label><input id="c">

    <button onclick="solveEq()">Calculate</button>
    <p id="eqResult"></p>
  `;

  window.solveEq = function () {
    let D = b.value*b.value - 4*a.value*c.value;
    let x1 = (-b.value + Math.sqrt(D)) / (2*a.value);
    let x2 = (-b.value - Math.sqrt(D)) / (2*a.value);

    eqResult.innerHTML = `<b>Roots:</b> ${x1}, ${x2}`;
  };

  return div;
}
