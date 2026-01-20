export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Revenue Growth Calculator</h3>
    <h3>((New − Old) / Old) × 100</h3>

    <label>Previous Revenue (₹)</label>
    <input id="old" value="500000">

    <label>Current Revenue (₹)</label>
    <input id="newR" value="650000">

    <button onclick="calcRG()">Calculate</button>
    <p id="rgResult"></p>
  `;

  window.calcRG = function () {
    let old = +document.getElementById("old").value;
    let newR = +document.getElementById("newR").value;

    let growth = ((newR - old) / old) * 100;

    rgResult.innerHTML =
      `<b>Revenue Growth:</b> ${growth.toFixed(2)} %`;
  };

  return div;
}
