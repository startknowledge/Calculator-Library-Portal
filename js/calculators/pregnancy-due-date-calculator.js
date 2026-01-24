export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Pregnancy Due Date Calculator</h3>
    
    <label>Last Menstrual Period (LMP)</label>
    <input type="date" id="lmp">

    <button onclick="calcDue()">Calculate</button>
    <p id="dueResult"></p>

    <h4>Explanation:</h4>
    <p>This calculator estimates the expected due date based on the first day of your last menstrual period (LMP).</p>

    <h4>Formula:</h4>
    <p>Due Date = LMP + 280 days (40 weeks)</p>

    <h4>How to Use:</h4>
    <p>Select the date of your last menstrual period and click "Calculate" to see your estimated due date.</p>

    <h4>Note:</h4>
    <p>The calculation assumes a regular 28-day cycle. Variations in cycle length may affect accuracy.</p>

    <h4>Disclaimer:</h4>
    <p>Results are estimates for planning purposes only. Consult your healthcare provider for accurate pregnancy tracking.</p>
  `;

  window.calcDue = function () {
    const lmpInput = document.getElementById("lmp").value;
    if (!lmpInput) {
      dueResult.innerHTML = "Please select a valid date!";
      return;
    }

    let d = new Date(lmpInput);
    d.setDate(d.getDate() + 280); // Add 280 days (40 weeks)

    dueResult.innerHTML = `<b>Estimated Due Date:</b> ${d.toDateString()}`;
  };

  return div;
}
