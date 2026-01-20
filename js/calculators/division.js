export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <br><br>
    <input id="divA" type="number" placeholder="Enter A"><br>
    <input id="divB" type="number" placeholder="Enter B"><br>
    <button id="calcDiv">Calculate</button>
    <p id="divResult"></p>
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
