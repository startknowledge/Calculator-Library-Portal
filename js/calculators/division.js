export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <br><br>
    <input id="divA" type="number" placeholder="Enter A"><br>
    <input id="divB" type="number" placeholder="Enter B"><br>
    <button id="calcDiv">Calculate</button>
    <p id="divResult"></p>
    <br>
    <p><u>Explanation about Division Calculator</u> :</p>
    <p>The Division Calculator is a straightforward tool designed to help users perform division operations quickly and accurately. Whether you're a student, professional, or anyone in need of basic arithmetic calculations, this calculator provides a simple interface to divide two numbers.</p>
    <p>To use the Division Calculator, simply enter the dividend (the number to be divided) in the first input field and the divisor (the number by which to divide) in the second input field. After entering the values, click the "Calculate" button to see the result of the division displayed below.</p>
    <p>This tool is particularly useful for everyday calculations, educational purposes, and quick financial computations. It eliminates the need for manual calculations, reducing the risk of errors and saving time.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional mathematical advice or detailed financial analysis.</p>
    <br>
  `;

  setTimeout(() => {
    document.getElementById("calcDiv").onclick = () => {
      let a = Number(document.getElementById("divA").value);
      let b = Number(document.getElementById("divB").value);

      if (b === 0) {
        document.getElementById("divResult").innerHTML = "Error: Cannot divide by zero.";
        return;
      }

      document.getElementById("divResult").innerHTML = "Result = " + (a / b);
    };
  }, 20);

  return box;
}
