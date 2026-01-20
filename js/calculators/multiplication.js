export default function () {
  const box = document.createElement("div");

  box.innerHTML = `<br><br>
    
    <input id="mulA" type="number" placeholder="Enter A"><br>
    <input id="mulB" type="number" placeholder="Enter B"><br>
    <button id="calcMul">Calculate</button>
    <p id="mulResult"></p>
  `;

  setTimeout(() => {
    document.getElementById("calcMul").onclick = () => {
      let a = Number(document.getElementById("mulA").value);
      let b = Number(document.getElementById("mulB").value);
      document.getElementById("mulResult").innerHTML = "Result = " + (a * b);
    };
  }, 20);

  return box;
}
