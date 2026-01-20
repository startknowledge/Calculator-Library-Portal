export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Budget Variance Calculator</h3>
    <p><b>Formula:</b> Actual Cost − Budgeted Cost</p>

    <label>Budgeted Cost (₹)</label>
    <input type="number" id="bvBudget" value="100000">

    <label>Actual Cost (₹)</label>
    <input type="number" id="bvActual" value="120000">

    <button onclick="calcBudgetVariance()">Calculate</button>

    <p id="bvResult"></p>
  `;

  window.calcBudgetVariance = function () {
    const budget = parseFloat(
      document.getElementById("bvBudget").value
    );
    const actual = parseFloat(
      document.getElementById("bvActual").value
    );

    const variance = actual - budget;

    let status =
      variance > 0
        ? "Unfavourable (Over Budget)"
        : variance < 0
        ? "Favourable (Under Budget)"
        : "On Budget";

    document.getElementById("bvResult").innerHTML = `
      <b>Variance:</b> ₹${variance.toFixed(2)}<br>
      <b>Status:</b> ${status}
    `;
  };

  return div;
}
