export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Working Capital Calculator</h3>

    <label>Current Assets (₹)</label>
    <input id="assets" value="300000">

    <label>Current Liabilities (₹)</label>
    <input id="liabilities" value="180000">

    <button onclick="calcWC()">Calculate</button>
    <p id="wcResult"></p>
  `;

  window.calcWC = function () {
    let a = +document.getElementById("assets").value;
    let l = +document.getElementById("liabilities").value;

    let wc = a - l;

    document.getElementById("wcResult").innerHTML =
      `<b>Working Capital:</b> ₹${wc}`;
  };

  return div;
}
