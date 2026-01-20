export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Monthly Grocery Budget (₹)</label>
    <input type="number" id="budget">

    <label>Number of Days</label>
    <input type="number" id="groceryDays">

    <button onclick="calcGrocery()">Calculate</button>
    <p id="groceryResult"></p>
  `;

  window.calcGrocery = function () {
    let daily = +budget.value / +groceryDays.value;

    groceryResult.innerHTML =
      `<b>Daily Grocery Budget:</b> ₹${daily.toFixed(2)}`;
  };

  return div;
}
