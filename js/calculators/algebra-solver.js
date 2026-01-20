export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>a</label>
    <input id="a">

    <label>b</label>
    <input id="b">

    <button onclick="solve()">Solve</button>
    <p id="algResult"></p>
  `;

  window.solve = function () {
    let x = -b.value / a.value;
    algResult.innerHTML = `<b>x =</b> ${x}`;
  };

  return div;
}
