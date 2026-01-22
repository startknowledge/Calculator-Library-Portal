export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Project Income (₹)</label>
    <input type="number" id="income">

    <label>Total Expenses (₹)</label>
    <input type="number" id="expense">

    <button onclick="calcProfitLoss()">Calculate</button>
    <p id="plResult"></p>
    <br>
    <p><u>Explanation about Contractor Profit & Loss Estimator</u> :</p>
    <p>The Contractor Profit & Loss Estimator is a financial tool designed to help contractors and construction professionals assess the profitability of their projects. By inputting the total income generated from a project and the associated expenses, users can quickly determine whether they have made a profit or incurred a loss.</p>
    <p>To use the estimator, simply enter the total project income in Indian Rupees (₹) and the total expenses incurred during the project. The calculator will then compute the difference between income and expenses to provide a clear indication of profit or loss.</p>
    <p>This estimator is essential for contractors who need to evaluate the financial performance of their projects, make informed business decisions, and plan for future endeavors. By providing a straightforward calculation of profit and loss, the estimator aids in budgeting, cost management, and overall financial planning.</p>
    <p>This tool is particularly useful for contractors looking to evaluate the financial performance of their projects, make informed business decisions, and plan for future endeavors. By providing a straightforward calculation of profit and loss, the estimator aids in budgeting, cost management, and overall financial planning.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice or detailed project accounting.</p>
    <br>
  `;

  window.calcProfitLoss = function () {
    let income = +document.getElementById("income").value;
    let expense = +document.getElementById("expense").value;

    let result = income - expense;

    document.getElementById("plResult").innerHTML =
      result >= 0
        ? `<b>Profit:</b> ₹${result}`
        : `<b>Loss:</b> ₹${Math.abs(result)}`;
  };

  return div;
}

