export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fabric Weight Calculator</h3>

    <label>Fabric Length (Meters)</label>
    <input id="len" value="10">

    <label>GSM</label>
    <input id="gsm" value="180">

    <button onclick="calcWeight()">Calculate</button>
    <p id="weightResult"></p>
  `;

  window.calcWeight = function () {
    let len = +document.getElementById("len").value;
    let gsm = +document.getElementById("gsm").value;

    let weight = (len * gsm) / 1000;

    document.getElementById("weightResult").innerHTML =
      `<b>Fabric Weight:</b> ${weight.toFixed(2)} kg`;
  };

  return div;
}
