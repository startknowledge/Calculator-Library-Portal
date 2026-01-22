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
    <br>
    <p>The GST Interest Calculator helps you compute the interest payable on delayed GST payments based on the tax amount and the number of days of delay. By entering the tax amount and the delay in days, users can easily calculate the interest amount.</p>
    <p>This calculator is useful for businesses, accountants, and taxpayers who need to understand the financial implications of late GST payments. It aids in compliance with tax regulations and helps in financial planning.</p>
    <p><b>Note:</b> Ensure that the tax amount and delay inputs are accurate to get a reliable interest calculation.</p>
    <p><b>Example:</b> For a tax amount of ₹10,000 and a delay of 30 days, the interest would be ₹147.95.</p>
    <p><b>Formula:</b> Interest = (Tax Amount * 18% * Delay in Days) / 36500</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual interest amounts may vary based on specific tax laws, payment dates, and additional factors applicable in different regions.</p>
    <br>
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
