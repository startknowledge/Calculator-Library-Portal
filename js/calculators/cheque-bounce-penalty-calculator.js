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
    <p id="chequeResult"></p>
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
