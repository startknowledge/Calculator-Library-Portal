export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Number of Workers</label>
    <input type="number" id="workers">

    <label>Daily Wage (₹)</label>
    <input type="number" id="dailyWage">

    <label>Number of Days</label>
    <input type="number" id="days">

    <button onclick="calcLabourCost()">Calculate</button>
    <p id="labourResult"></p>
  `;

  window.calcLabourCost = function () {
    let w = +document.getElementById("workers").value;
    let d = +document.getElementById("dailyWage").value;
    let days = +document.getElementById("days").value;

    let total = w * d * days;

    document.getElementById("labourResult").innerHTML =
      `<b>Total Labour Cost:</b> ₹${total}`;
  };

  return div;
}
