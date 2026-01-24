export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Damage Amount (₹)</label>
    <input type="number" id="damage">

    <label>Legal Expenses (₹)</label>
    <input type="number" id="legalFees">

    <label>Interest (₹)</label>
    <input type="number" id="interest">

    <button onclick="calcCompensation()">Calculate</button>
    <p id="compResult"></p>
    <br>
    <h3>Compensation Calculator</h3>
    <p>The Compensation Calculator helps you estimate the total compensation amount by combining damage costs, legal expenses, and applicable interest.</p>
    <p>This tool is useful in legal claims, insurance settlements, and dispute resolution cases where multiple cost components are involved.</p>
    <p>By entering the respective amounts, users can quickly calculate the final compensation payable.</p>
    <p><b>How to Use:</b></p>
    <p>Enter the damage amount, legal fees, and interest amount in the respective fields, then click the <b>Calculate</b> button to view the total compensation.</p>
    <p><b>Formula:</b></p>
    <p>Total Compensation = Damage Amount + Legal Expenses + Interest</p>
    <p><b>Example:</b></p>
    <p>
      If damage amount is ₹50,000, legal expenses are ₹10,000, and interest is ₹5,000,<br>
      then total compensation = <b>₹65,000</b>.
    </p>
    <p><b>Note:</b> Ensure that all entered values are accurate for correct calculation.</p>
    <p><b>Disclaimer:</b> This calculator provides an estimated value for informational purposes only and does not constitute legal or financial advice.</p>    <br>
    <br>
  `;

  window.calcCompensation = function () {
    let damage = parseFloat(document.getElementById("damage").value) || 0;
    let fees = parseFloat(document.getElementById("legalFees").value) || 0;
    let interest = parseFloat(document.getElementById("interest").value) || 0;

    let total = damage + fees + interest;

    document.getElementById("compResult").innerHTML =
      `<b>Total Compensation:</b> ₹${total.toFixed(2)}`;
  };

  return div;
}
