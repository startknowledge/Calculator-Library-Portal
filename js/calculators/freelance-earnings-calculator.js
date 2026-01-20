export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Freelance Earnings Calculator</h3>

    <label>Hourly Rate (₹)</label>
    <input id="rate" value="500">

    <label>Hours per Day</label>
    <input id="hours" value="6">

    <label>Working Days per Month</label>
    <input id="days" value="22">

    <button onclick="calcFreelance()">Calculate</button>
    <p id="freeResult"></p>
  `;

  window.calcFreelance = function () {
    let rate = +document.getElementById("rate").value;
    let hours = +document.getElementById("hours").value;
    let days = +document.getElementById("days").value;

    let income = rate * hours * days;

    freeResult.innerHTML =
      `<b>Monthly Earnings:</b> ₹${income}`;
  };

  return div;
}
