export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Bank Branch Profitability Calculator</h3>

    <div class="form-group">
      <label>Total Income (₹)</label>
      <input type="number" id="income">
    </div>

    <div class="form-group">
      <label>Total Expenses (₹)</label>
      <input type="number" id="expense">
    </div>

    <button onclick="calcProfit()">Calculate</button>
    <p id="profitResult"></p>
  `;

  window.calcProfit = () => {
    profitResult.innerText =
      "Net Profit: ₹" +
      (income.value - expense.value).toFixed(2);
  };

  return div;
};
