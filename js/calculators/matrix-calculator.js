export default function () {
  const div = document.createElement("div");

div.innerHTML = `
  <label><b>Matrix A (a1, b2, c3, d4)</b></label><br><br>
  <label>Matrix A (a1)</label><br><input id="a">
  <label>Matrix A (b2)</label><input id="b">
  <label>Matrix A (c3)</label><input id="c">
  <label>Matrix A (d4)</label><input id="d">

  <br>

  <label><b>Matrix B (e1, f2, g3, h4)</b></label><br><br>
  <label>Matrix B (e1)</label><input id="e">
  <label>Matrix B (f2)</label><input id="f">
  <label>Matrix B (g3)</label><input id="g">
  <label>Matrix B (h4)</label><input id="h">
  <br><br>

  <button id="calcBtn">Calculate</button>
  <p id="matrixResult"></p>

  <p><b>Result:</b><br>[a1 + e1, b2 + f2]<br>[c3 + g3,  d4 + h4]</p>
`;

/* button click event */
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "calcBtn") {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);

    const e = Number(document.getElementById("e").value);
    const f = Number(document.getElementById("f").value);
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);

    document.getElementById("matrixResult").innerHTML =
      `<b>Result:</b><br>[${a + e} ${b + f}]<br>[${c + g} ${d + h}]`;
      }
});

/* add to page */
document.getElementById("resultArea").appendChild(div);

return div;

}
