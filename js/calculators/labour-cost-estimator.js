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
    <br>
    <p>The Labour Cost Estimator helps you calculate the total cost of labour for a project based on the number of workers, their daily wage, and the number of days they work. By entering these values, users can quickly determine the total labour cost required for their project.</p>
    <p>This calculator is useful for project managers, construction supervisors, and business owners who need to estimate labour expenses for various tasks or projects.</p>
    <p>Ensure that all inputs are accurate to get a reliable labour cost estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the number of workers in the "Number of Workers" field, the daily wage in the "Daily Wage" field, and the number of days in the "Number of Days" field. Click the "Calculate" button to see the total labour cost displayed below.</p>
    <p><b>Formula:</b> Total Labour Cost = Number of Workers × Daily Wage × Number of Days</p>
    <p><b>Example:</b> If you have 5 workers, each earning ₹500 per day, working for 10 days, the total labour cost would be: 5 × 500 × 10 = ₹25,000.</p>
    <p><b>Note:</b> This calculator provides an estimate and should be used for planning purposes. Actual costs may vary based on additional factors such as overtime, benefits, and other expenses.</p>
    <p>For more detailed budgeting, consider consulting with a financial advisor or using comprehensive project management software.</p>
    <p>Feel free to share this tool with colleagues or friends who might find it useful!</p>
    <p>Disclaimer: This calculator is provided for informational purposes only and does not constitute financial advice. Users should verify calculations and consider all relevant factors when planning labour costs.</p>
    <br>
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
