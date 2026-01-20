export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Bandwidth (GB) = Visitors × Avg Page Size (MB) × Pages / 1024</h3>

    <label>Monthly Visitors</label>
    <input id="visitors" value="10000">

    <label>Average Page Size (MB)</label>
    <input id="size" value="2">

    <label>Pages per Visit</label>
    <input id="pages" value="3">

    <button onclick="calcBandwidth()">Calculate</button>
    <p id="bandResult"></p>
  `;

  window.calcBandwidth = function () {
    let v = +document.getElementById("visitors").value;
    let s = +document.getElementById("size").value;
    let p = +document.getElementById("pages").value;

    let bandwidth = (v * s * p) / 1024;

    document.getElementById("bandResult").innerHTML =
      `<b>Monthly Bandwidth:</b> ${bandwidth.toFixed(2)} GB`;
  };

  return div;
}
