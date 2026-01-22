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
    <br>
    <p>The GST Calculator helps you compute the Goods and Services Tax (GST) on a given amount based on the specified GST rate. By entering the amount and the applicable GST rate, users can easily calculate the GST amount and the total amount including GST.</p>
    <p>This calculator is useful for businesses, accountants, and consumers who need to understand the impact of GST on pricing and budgeting. It aids in financial planning and ensures compliance with tax regulations.</p>
    <p><b>Note:</b> Ensure that the amount and GST rate inputs are accurate to get a reliable GST calculation.</p>
    <p><b>Example:</b> For an amount of ₹1000 and a GST rate of 18%, the GST would be ₹180.00, making the total amount ₹1180.00.</p>
    <p><b>Formula:</b> GST = (Amount * GST Rate) / 100; Total Amount = Amount + GST</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual GST amounts may vary based on specific tax laws, exemptions, and additional charges applicable in different regions.</p>
    <br>
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
