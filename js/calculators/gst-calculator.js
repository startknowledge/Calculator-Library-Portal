export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>GST Calculator</h3>

    <label>Amount (₹)</label>
    <input type="number" id="gstAmount">

    <label>GST Rate (%)</label>
    <input type="number" id="gstRate">

    <button onclick="calcGST()">Calculate</button>
    <p id="gstResult"></p>
  `;

  window.calcGST = function () {
    let amount = parseFloat(document.getElementById("gstAmount").value);
    let rate = parseFloat(document.getElementById("gstRate").value);

    let gst = (amount * rate) / 100;
    let total = amount + gst;

    document.getElementById("gstResult").innerHTML =
      `GST: ₹${gst.toFixed(2)} <br>Total: ₹${total.toFixed(2)}`;
  };

  return div;
}
