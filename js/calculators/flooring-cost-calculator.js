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
    <br>
    <p>Flooring Cost Calculator helps you estimate the total cost of flooring based on the area to be covered and the cost per square foot. Simply enter the floor area in square feet and the cost per square foot, then click "Calculate" to see the total flooring cost.</p>
    <p>For more information, visit <a href="https://en.wikipedia.org/wiki/Flooring" target="_blank">Wikipedia: Flooring</a>.</p>
    <p>Calculator by <a href="https://www.calculators.tech" target="_blank">calculators.tech</a></p>
    <p>&copy; 2024 calculators.tech</p>
    <br>
  `;

  window.calcFloor = function () {
    let area = +document.getElementById("area").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("floorResult").innerHTML =
      `<b>Total Flooring Cost:</b> ₹${area * rate}`;
  };

  return div;
}
