export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Cost = Hours × Hourly Rate</h3>

    <label>Total Hours</label>
    <input id="hours" value="120">

    <label>Rate per Hour (₹)</label>
    <input id="rate" value="800">

    <button onclick="calcProject()">Calculate</button>
    <p id="codeResult"></p>
  `;

  window.calcProject = function () {
    document.getElementById("codeResult").innerHTML =
      `<b>Total Project Cost:</b> ₹${document.getElementById("hours").value * document.getElementById("rate").value}`;
  };

  return div;
}
