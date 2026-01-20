export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Flooring Cost Calculator</h3>

    <label>Floor Area (sq ft)</label>
    <input id="area" value="800">

    <label>Flooring Cost per sq ft (₹)</label>
    <input id="rate" value="120">

    <button onclick="calcFloor()">Calculate</button>
    <p id="floorResult"></p>
  `;

  window.calcFloor = function () {
    let area = +document.getElementById("area").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("floorResult").innerHTML =
      `<b>Total Flooring Cost:</b> ₹${area * rate}`;
  };

  return div;
}
