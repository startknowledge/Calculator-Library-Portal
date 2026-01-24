export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Loan Recovery Percentage Calculator</h3>

    <p>
      This calculator helps determine the percentage of a loan amount
      that has been successfully recovered.
    </p>

    <div class="form-group">
      <label>Recovered Amount (₹)</label>
      <input type="number" id="rec" min="0" placeholder="Enter recovered amount">
    </div>

    <div class="form-group">
      <label>Total Loan Amount (₹)</label>
      <input type="number" id="loan" min="1" placeholder="Enter total loan amount">
    </div>

    <button onclick="calcRecovery()">Calculate</button>

    <p id="recResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>Recovery Percentage = (Recovered Amount ÷ Total Loan Amount) × 100</p>

    <p><b>Example:</b></p>
    <p>
      If ₹75,000 is recovered from a total loan of ₹1,00,000,<br>
      Recovery Percentage = <b>75%</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for banks, NBFCs, finance teams, loan officers,
      and financial performance analysis.
    </p>

    <p><b>Disclaimer:</b>
      This calculator provides an estimate for analytical purposes only.
    </p>
  `;

  window.calcRecovery = () => {
    const rec = parseFloat(document.getElementById("rec").value);
    const loan = parseFloat(document.getElementById("loan").value);

    if (isNaN(rec) || isNaN(loan) || loan <= 0) {
      document.getElementById("recResult").innerHTML =
        "<b>Please enter valid input values.</b>";
      return;
    }

    const percentage = (rec / loan) * 100;

    document.getElementById("recResult").innerHTML =
      `<b>Recovery Rate:</b> ${percentage.toFixed(2)} %`;
  };

  return div;
}
