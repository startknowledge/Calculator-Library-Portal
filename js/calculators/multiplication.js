export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <h3>Multiplication Calculator</h3>
    <p>Multiply two numbers to get the result.</p>

    <input id="mulA" type="number" placeholder="Enter A"><br><br>
    <input id="mulB" type="number" placeholder="Enter B"><br><br>
    <button id="calcMul">Calculate</button>

    <p id="mulResult"></p>
    <br>

    <p><b>Formula:</b><br>
      Result = A × B
    </p>

    <p><b>Example:</b><br>
      A = 5, B = 6 → Result = 30
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for educational purposes only.<br></p>
  `;

  setTimeout(() => {
    document.getElementById("calcMul").onclick = () => {
      const a = Number(document.getElementById("mulA").value);
      const b = Number(document.getElementById("mulB").value);

      if (isNaN(a) || isNaN(b)) {
        document.getElementById("mulResult").innerHTML =
          "<b>Please enter valid numbers.</b>";
        return;
      }

      document.getElementById("mulResult").innerHTML =
        `<b>Result:</b> ${a * b}`;
    };
  }, 20);

  return box;
}
