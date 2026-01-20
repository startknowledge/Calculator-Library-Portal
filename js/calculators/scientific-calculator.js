export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter Expression (e.g. 5+3*2)</label>
    <input type="text" id="sciExp">

    <button onclick="calcSci()">Calculate</button>
    <p id="sciResult"></p>
  `;

  window.calcSci = function () {
    let exp = document.getElementById("sciExp").value;
    let result = eval(exp);

    document.getElementById("sciResult").innerHTML =
      `<b>Result:</b> ${result}`;
  };

  return div;
}
