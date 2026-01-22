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

    <p id="bvResult"></p><br>
    <p><u>Explanation about Budget Variance</u> :</p>
    <p>Budget Variance is the difference between the budgeted or planned cost and the actual cost incurred for a project or operation. It is a key financial metric used by businesses and organizations to monitor and control their expenses, ensuring that they stay within their allocated budgets.</p>
    <p>The formula to calculate Budget Variance is:</p>
    <p><b>Budget Variance = Actual Cost − Budgeted Cost</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>Actual Cost</b> is the total cost that has been incurred for the project or operation.</li>
      <li><b>Budgeted Cost</b> is the estimated or planned cost for the project or operation.</li>
    </ul>
    <p>For example, if the budgeted cost is ₹100,000 and the actual cost is ₹120,000, the Budget Variance would be calculated as follows:</p>
    <p>Budget Variance = ₹120,000 − ₹100,000 = ₹20,000</p>
    <p>This indicates an unfavourable variance of ₹20,000, meaning the actual cost exceeded the budgeted cost.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of Budget Variance. For specific financial assessments, please consult a qualified financial professional.</p>
    <br>
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
