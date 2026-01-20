export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>a</label>
    <input type="number" id="qa">

    <label>b</label>
    <input type="number" id="qb">

    <label>c</label>
    <input type="number" id="qc">

    <button onclick="solveQuad()">Solve</button>
    <p id="quadResult"></p>
  `;

  window.solveQuad = function () {
    let a = qa.value, b = qb.value, c = qc.value;
    let d = b*b - 4*a*c;

    let r1 = (-b + Math.sqrt(d)) / (2*a);
    let r2 = (-b - Math.sqrt(d)) / (2*a);

    quadResult.innerHTML =
      `<b>Roots:</b> ${r1.toFixed(2)}, ${r2.toFixed(2)}`;
  };

  return div;
}
