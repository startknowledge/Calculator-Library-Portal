export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Wage Amount (₹)</label>
    <input type="number" id="totalWage">

    <label>Number of Workers</label>
    <input type="number" id="workerCount">

    <button onclick="calcWageDistribution()">Calculate</button>
    <p id="wageResult"></p>
  `;

  window.calcWageDistribution = function () {
    let total = +document.getElementById("totalWage").value;
    let workers = +document.getElementById("workerCount").value;

    let perWorker = total / workers;

    document.getElementById("wageResult").innerHTML =
      `<b>Wage per Worker:</b> ₹${perWorker.toFixed(2)}`;
  };

  return div;
}
