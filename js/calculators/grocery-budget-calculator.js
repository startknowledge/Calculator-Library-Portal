export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Monthly Grocery Budget (₹)</label>
    <input type="number" id="budget">

    <label>Number of Days</label>
    <input type="number" id="groceryDays">

    <button onclick="calcGrocery()">Calculate</button>
    <p id="groceryResult"></p>
    <br>
    <p>The Grocery Budget Calculator helps you determine your daily grocery budget based on your monthly grocery budget and the number of days in the month. Simply enter your total monthly grocery budget and the number of days, then click "Calculate" to see your daily grocery budget.</p>
    <p>This calculator is useful for individuals and families who want to manage their grocery expenses effectively. It aids in budgeting and helps ensure that grocery spending stays within limits throughout the month.</p> 
    <p><b>Note:</b> Ensure that the budget and days inputs are accurate to get a reliable daily grocery budget.</p> 
    <p><b>Example:</b> For a monthly grocery budget of ₹6000 and 30 days, the daily grocery budget would be ₹200.00.</p>
    <p><b>Formula:</b> Daily Grocery Budget = Monthly Grocery Budget / Number of Days</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual grocery expenses may vary based on individual shopping habits, dietary needs, and market prices.</p>
    <br>
  `;

  window.calcGrocery = function () {
    let daily = +budget.value / +groceryDays.value;

    groceryResult.innerHTML =
      `<b>Daily Grocery Budget:</b> ₹${daily.toFixed(2)}`;
  };

  return div;
}
