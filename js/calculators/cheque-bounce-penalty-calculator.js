export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Cheque Amount (₹)</label>
    <input type="number" id="chequeAmount">

    <label>Bank Penalty (₹)</label>
    <input type="number" id="bankPenalty">

    <label>Legal Charges (₹)</label>
    <input type="number" id="legalCharge">

    <button onclick="calcChequePenalty()">Calculate</button>
    <p id="chequeResult"></p><br>
    <p><u>Explanation about Cheque Bounce Penalty Calculator</u> :</p>
    <p>This calculator computes the total payable amount when a cheque bounces by summing up the cheque amount, bank penalty, and legal charges. It is useful for individuals and businesses to understand the financial implications of a bounced cheque.</p>
    <p>For example, if a cheque amount is ₹10,000, the bank penalty is ₹500, and legal charges are ₹1,000, the total payable amount would be ₹11,500.</p>
    <p>The calculator helps in budgeting and financial planning by providing a clear picture of the costs associated with a bounced cheque.</p>
    <p>Users should ensure they have sufficient funds in their accounts to avoid cheque bounce situations, which can lead to additional fees and legal complications.</p>
    <p>This tool is intended for informational purposes and should not replace professional financial advice.</p>
    <p>Disclaimer: This tool provides a basic calculation and should not be used as a substitute for professional financial or legal advice.</p>
    <br>

  `;

  window.calcChequePenalty = function () {
    let amt = parseFloat(document.getElementById("chequeAmount").value);
    let bank = parseFloat(document.getElementById("bankPenalty").value);
    let legal = parseFloat(document.getElementById("legalCharge").value);

    let total = amt + bank + legal;

    document.getElementById("chequeResult").innerHTML =
      `<b>Total Payable Amount:</b> ₹${total.toFixed(2)}`;
  };

  return div;
}
