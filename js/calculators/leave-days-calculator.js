export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Leave From:</label>
    <input type="date" id="leaveStart">

    <label>Leave To:</label>
    <input type="date" id="leaveEnd">

    <button onclick="calcLeave()">Calculate</button>
    <p id="leaveResult"></p>
    <br>
    <p>The Leave Days Calculator helps you determine the total number of leave days between two dates. By entering the start and end dates of your leave, users can quickly calculate the total leave duration.</p>
    <p>This calculator is useful for employees, HR professionals, and anyone needing to track leave days for work or personal purposes.</p>
    <p>Ensure that all inputs are accurate to get a reliable leave day count.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the start date of your leave in the "Leave From" field and the end date in the "Leave To" field, then click the "Calculate" button to see the total leave days displayed below.</p>
    <p><b>Formula:</b> Total Leave Days = End Date - Start Date + 1 (inclusive)</p>
    <p><b>Example:</b> If your leave starts on 2023-10-01 and ends on 2023-10-05, the total leave days would be: 5 days.</p>
    <p><b>Note:</b> This calculator provides an estimate and should be used for planning purposes. Actual leave policies may vary based on company rules and regulations.</p>
    <p>For more detailed leave management, consider consulting with your HR department or using specialized leave tracking tools.</p>
    <p>Feel free to share this tool with colleagues or friends who might find it useful!</p>
    <p>Disclaimer: This calculator is provided for informational purposes only and does not constitute professional advice. Users should verify calculations and consider all relevant factors when planning leave days.</p>
    <br>
  `;

  window.calcLeave = function () {
    let start = new Date(document.getElementById("leaveStart").value);
    let end = new Date(document.getElementById("leaveEnd").value);

    let diffMs = end - start;
    let diff = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; // inclusive

    document.getElementById("leaveResult").innerHTML =
      `<b>Total Leave Days:</b> ${diff}`;
  };

  return div;
}
