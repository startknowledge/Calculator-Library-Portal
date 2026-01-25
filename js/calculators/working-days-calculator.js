export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Working Days Calculator</h2>
    <p>This calculator determines the number of working days between two dates, excluding weekends (Saturday and Sunday).</p>

    <div class="form-group">
      <label>Start Date:</label>
      <input type="date" id="workStart">
    </div>

    <div class="form-group">
      <label>End Date:</label>
      <input type="date" id="workEnd">
    </div>

    <button onclick="calcWorkDays()">Calculate</button>
    <p id="workResult"></p>

    <br>
    <p><b>Explanation:</b> The calculator counts the days between two dates while excluding weekends.</p>
    <p><b>Formula:</b> <i>Working Days = Total Days − Number of Weekends</i></p>
    <p><b>Calculator is a tool:</b> Useful for HR, payroll, and project management to calculate effective working days.</p>
    <p><b>Relative Note:</b> Only standard weekends are excluded. Public holidays are not automatically considered.</p>
    <p><b>Based On:</b> Gregorian calendar and standard week structure (Monday to Friday are working days).</p>
    <p><b>To Use the Calculator:</b> Select a start and end date, then click "Calculate". The number of working days will be displayed below.</p>
    <p><b>Note:</b> Ensure dates are valid and the end date is after the start date for correct results.</p>
    <p><b>It is important:</b> Use this calculator as a general reference. Adjust for local holidays if needed.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for payroll or project decisions made using this calculator. Verify critical dates manually if necessary.</p>
    <br><hr>
  `;

  window.calcWorkDays = function () {
    const start = new Date(document.getElementById("workStart").value);
    const end = new Date(document.getElementById("workEnd").value);
    const resultDiv = document.getElementById("workResult");

    if (isNaN(start) || isNaN(end) || end < start) {
      resultDiv.innerHTML = "❌ Please enter valid start and end dates, with end date after start date.";
      return;
    }

    let count = 0;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const day = d.getDay();
      if (day !== 0 && day !== 6) count++; // Exclude Saturday and Sunday
    }

    resultDiv.innerHTML = `<b>Working Days:</b> ${count}`;
  };

  return div;
}
