export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Renovation Cost Calculator</h3>

    <label>Renovation Area (sq ft)</label>
    <input id="area" value="600">

    <label>Renovation Cost per sq ft (₹)</label>
    <input id="rate" value="900">

    <button onclick="calcReno()">Calculate</button>
    <p id="renoResult"></p>
  `;

  window.calcReno = function () {
    let area = +document.getElementById("area").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("renoResult").innerHTML =
      `<b>Total Renovation Cost:</b> ₹${area * rate}`;
  };

  return div;
}
