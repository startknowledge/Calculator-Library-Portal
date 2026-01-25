export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>TDS Calculator</h3>
    <p>This calculator computes the Tax Deducted at Source (TDS) on a payment based on the applicable TDS rate.</p>

    <label>Payment Amount (₹)</label>
    <input type="number" id="tdsAmount" placeholder="e.g. 50000">

    <label>TDS Rate (%)</label>
    <input type="number" id="tdsRate" placeholder="e.g. 10">

    <button onclick="calcTDS()">Calculate</button>
    <p id="tdsResult"></p>

    <br>
    <p><b>Explanation:</b> TDS is a portion of payment deducted at the source and deposited with the government. This calculator helps estimate the TDS amount.</p>
    <p><b>For example:</b> On a payment of ₹50,000 with TDS rate 10%, the deducted TDS is ₹5,000.</p>
    <p><b>Formula:</b> TDS = (Payment Amount × TDS Rate) ÷ 100</p>
    <p>Calculator is a tool to simplify TDS calculation.</p>
    <p>Relative accuracy depends on entering the correct payment amount and TDS rate.</p>
    <p>Based on standard taxation rules.</p>
    <p>To use the calculator, enter the payment amount and applicable TDS rate, then click "Calculate".</p>
    <p><b>Note:</b> Ensure that the TDS rate matches the applicable government rates for accurate results.</p>
    <p>It is important to enter valid numeric values.</p>
    <p><b>Disclaimer:</b> This calculator is for educational and reference purposes only. Always consult official tax guidelines or a tax professional for actual TDS computation.</p>
  `;

  window.calcTDS = function () {
    let amount = parseFloat(document.getElementById("tdsAmount").value);
    let rate = parseFloat(document.getElementById("tdsRate").value);

    if (isNaN(amount) || isNaN(rate)) {
      document.getElementById("tdsResult").innerHTML = "<b>Please enter valid numbers</b>";
      return;
    }

    let tds = (amount * rate) / 100;

    document.getElementById("tdsResult").innerHTML =
      `<b>TDS Deducted:</b> ₹${tds.toFixed(2)}`;
  };

  return div;
}
