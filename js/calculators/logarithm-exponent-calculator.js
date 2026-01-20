export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Number</label>
    <input type="number" id="expoNum">

    <label>Power</label>
    <input type="number" id="expoPow">

    <button onclick="calcExpo()">Calculate</button>
    <p id="expoResult"></p>
  `;

  window.calcExpo = function () {
    let num = parseFloat(document.getElementById("expoNum").value);
    let pow = parseFloat(document.getElementById("expoPow").value);

    let res = Math.pow(num, pow);

    document.getElementById("expoResult").innerHTML =
      `<b>Result:</b> ${res}`;
  };

  return div;
}
