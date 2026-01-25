export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <h3>Subtraction Calculator</h3>

    <input id="subA" type="number" placeholder="Enter A">
    <input id="subB" type="number" placeholder="Enter B"><br><br>

    <button id="calcSub">Calculate</button>
    <p id="subResult"></p>
    <br>

    <p><b>Explanation:</b> This calculator subtracts one number from another (A − B) to give the difference.</p>
    <p><b>Formula:</b> Result = A − B</p>
    <p><b>Example:</b> A = 10, B = 4 → Result = 6</p>
    <p>Calculator helps perform basic arithmetic quickly.</p>
    <p>Accuracy depends on correct numeric input.</p>
    <p><b>Note:</b> Enter valid numbers only.</p>
    <p><b>Disclaimer:</b> For educational purposes only; verify results for critical calculations.</p>
  `;

  document.getElementById("calcSub").onclick = () => {
    let a = Number(document.getElementById("subA").value);
    let b = Number(document.getElementById("subB").value);

    if (isNaN(a) || isNaN(b)) {
      document.getElementById("subResult").innerHTML = "❌ Please enter valid numbers";
      return;
    }

    document.getElementById("subResult").innerHTML = `<b>Result:</b> ${a - b}`;
  };

  return box;
}
