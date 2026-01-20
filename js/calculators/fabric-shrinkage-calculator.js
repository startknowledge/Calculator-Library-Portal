export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fabric Shrinkage Calculator</h3>

    <label>Original Length (cm)</label>
    <input id="orig" value="100">

    <label>After Wash Length (cm)</label>
    <input id="after" value="96">

    <button onclick="calcShrink()">Calculate</button>
    <p id="shrinkResult"></p>
  `;

  window.calcShrink = function () {
    let o = +document.getElementById("orig").value;
    let a = +document.getElementById("after").value;

    let shrink = ((o - a) / o) * 100;

    document.getElementById("shrinkResult").innerHTML =
      `<b>Shrinkage:</b> ${shrink.toFixed(2)} %`;
  };

  return div;
}
