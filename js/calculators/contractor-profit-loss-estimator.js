export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Project Income (₹)</label>
    <input type="number" id="income">

    <label>Total Expenses (₹)</label>
    <input type="number" id="expense">

    <button onclick="calcProfitLoss()">Calculate</button>
    <p id="plResult"></p>
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
