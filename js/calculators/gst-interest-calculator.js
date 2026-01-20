export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>GST Interest Calculator</h3>

    <label>Tax Amount (₹)</label>
    <input type="number" id="gstTax">

    <label>Delay (Days)</label>
    <input type="number" id="gstDays">

    <button onclick="calcGSTInterest()">Calculate</button>
    <p id="gstIntResult"></p>
  `;

  window.calcGSTInterest = function () {
    let tax = parseFloat(document.getElementById("gstTax").value);
    let days = parseFloat(document.getElementById("gstDays").value);

    let interest = (tax * 18 * days) / 36500;

    document.getElementById("gstIntResult").innerHTML =
      `<b>Interest:</b> ₹${interest.toFixed(2)}`;
  };

  return div;
}
