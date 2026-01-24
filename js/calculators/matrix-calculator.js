export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>2×2 Matrix Addition Calculator</h3>

    <p>
      This calculator adds two 2×2 matrices element-wise.
      Enter the elements of Matrix A and Matrix B to get the result.
    </p>

    <h4>Matrix A (a1, b2, c3, d4)</h4>
    <label>Matrix A (a1)</label><input id="a" type="number" value="0">
    <label>Matrix A (b2)</label><input id="b" type="number" value="0"><br>
    <label>Matrix A (c3)</label><input id="c" type="number" value="0">
    <label>Matrix A (d4)</label><input id="d" type="number" value="0"><br><br>

    <h4>Matrix B (e1, f2, g3, h4)</h4>
    <label>Matrix B (e1)</label><input id="e" type="number" value="0">
    <label>Matrix B (f2)</label><input id="f" type="number" value="0"><br>
    <label>Matrix B (g3)</label><input id="g" type="number" value="0">
    <label>Matrix B (h4)</label><input id="h" type="number" value="0"><br><br>

    <button id="calcBtn">Calculate</button>
    <p id="matrixResult"></p>
    <br>

    <p><b>Formula:</b><br>
       [a b] + [e f] = [a+e b+f]<br>
       [c d]   [g h]   [c+g d+h]
    </p>

    <p><b>Example:</b><br>
      Matrix A = [[1, 2], [3, 4]]<br>
      Matrix B = [[5, 6], [7, 8]]<br>
      Result = [[6, 8], [10, 12]]
    </p>

    <p><b>Use Case:</b><br>
      Useful for students, teachers, and anyone learning matrix algebra.
    </p>

    <p><b>Disclaimer:</b> This calculator is for educational purposes only.</p><br>
  `;

  /* Button click event */
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "calcBtn") {
      const a = Number(document.getElementById("a").value);
      const b = Number(document.getElementById("b").value);
      const c = Number(document.getElementById("c").value);
      const d = Number(document.getElementById("d").value);

      const eVal = Number(document.getElementById("e").value);
      const f = Number(document.getElementById("f").value);
      const g = Number(document.getElementById("g").value);
      const h = Number(document.getElementById("h").value);

      document.getElementById("matrixResult").innerHTML =
        `<b>Result:</b><br>[${a + eVal} ${b + f}]<br>[${c + g} ${d + h}]<br>`;
    }
  });

  return div;
}
