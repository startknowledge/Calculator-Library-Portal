export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Late Filing Penalty</h3>

    <label>Days Late</label>
    <input type="number" id="lateDays">

    <button onclick="calcPenalty()">Calculate</button>
    <p id="penaltyResult"></p>
    <br>
    <p>The Late Filing Penalty Calculator helps you determine the penalty incurred for filing documents late. By entering the number of days the filing is late, users can quickly calculate the penalty amount.</p>
    <p>This calculator is useful for individuals and businesses who need to understand the financial implications of late filings.</p>
    <p>Ensure that all inputs are accurate to get a reliable penalty estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the number of days the filing is late in the "Days Late" field and click the "Calculate" button to see the penalty amount displayed below.</p>
    <p><b>Penalty Rule:</b> A flat penalty of ₹5000 is applied for any late filing, regardless of the number of days late.</p>
    <p><b>Example:</b> If your filing is late by 3 days, the penalty would be ₹5000.</p>
    <p><b>Note:</b> This calculator provides an estimate and should be used for planning purposes. Actual penalties may vary based on specific regulations and circumstances.</p>
    <p>For more detailed information on filing penalties, consider consulting with a legal or financial professional.</p>
    <p>Feel free to share this tool with colleagues or friends who might find it useful!</p>
    <p>Disclaimer: This calculator is provided for informational purposes only and does not constitute professional advice. Users should verify calculations and consider all relevant factors when assessing late filing penalties.</p>
    <br>
  `;

  window.calcPenalty = function () {
    let days = parseFloat(document.getElementById("lateDays").value);
    let penalty = days > 0 ? 5000 : 0;

    document.getElementById("penaltyResult").innerHTML =
      `<b>Penalty:</b> ₹${penalty}`;
  };

  return div;
}
