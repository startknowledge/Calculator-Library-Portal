export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <label>Enter A:</label>
    <input id="addA" type="number">

    <label>Enter B:</label>
    <input id="addB" type="number">

    <button id="calcAdd">Calculate</button>
    <h3 id="addResult"></h3>
  `;

  setTimeout(() => {
    document.getElementById("calcAdd").onclick = () => {
      let a = Number(document.getElementById("addA").value);
      let b = Number(document.getElementById("addB").value);
      document.getElementById("addResult").innerHTML = "Result: " + (a + b);
    };
  }, 50);

  return box;
}
