export default function () {
  const box = document.createElement("div");

  box.innerHTML = `<br><br>
    
    <input id="subA" type="number" placeholder="Enter A"><br>
    <input id="subB" type="number" placeholder="Enter B"><br>
    <button id="calcSub">Calculate</button>
    <p id="subResult"></p>
  `;

  setTimeout(() => {
    document.getElementById("calcSub").onclick = () => {
      let a = Number(document.getElementById("subA").value);
      let b = Number(document.getElementById("subB").value);
      document.getElementById("subResult").innerHTML = "Result = " + (a - b);
    };
  }, 20);

  return box;
}
