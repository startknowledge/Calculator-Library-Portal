export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>BMR</label>
    <input id="calBmr">

    <label>Activity Factor (1.2 – 1.9)</label>
    <input id="activity">

    <button onclick="calcCalories()">Calculate</button>
    <p id="calResult"></p>
  `;

  window.calcCalories = function () {
    let calories = +calBmr.value * +activity.value;
    calResult.innerHTML = `<b>Daily Calories:</b> ${calories.toFixed(0)}`;
  };

  return div;
}
