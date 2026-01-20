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
  `;

  window.calcCompensation = function () {
    let damage = parseFloat(document.getElementById("damage").value);
    let fees = parseFloat(document.getElementById("legalFees").value);
    let interest = parseFloat(document.getElementById("interest").value);

    let total = damage + fees + interest;

    document.getElementById("compResult").innerHTML =
      `<b>Total Compensation:</b> ₹${total.toFixed(2)}`;
  };

  return div;
}
