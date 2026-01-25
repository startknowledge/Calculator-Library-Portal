export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Sales Conversion Rate Calculator</h3>

    <h4>Formula</h4>
    <p>Conversion Rate (%) = (Successful Sales ÷ Total Leads) × 100</p>

    <form id="conversionForm">
      <label for="leads">Total Leads:</label>
      <input type="number" id="leads" value="500" required><br><br>

      <label for="sales">Successful Sales:</label>
      <input type="number" id="sales" value="50" required><br><br>

      <input type="submit" value="Calculate Conversion Rate">
    </form>

    <h3 id="conversionResult"></h3>

    <h4>Example</h4>
    <p>
      Total Leads: 500, Successful Sales: 50<br>
      Conversion Rate = (50 ÷ 500) × 100 = 10%
    </p>

    <h4>Note</h4>
    <p>
      The conversion rate is a key metric in sales and marketing to measure the effectiveness of your campaigns. A higher conversion rate indicates more leads turning into actual sales.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides approximate conversion rate for informational purposes only. Actual business performance may vary due to market conditions, lead quality, and other factors.
    </p>
  `;

  div.querySelector("#conversionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const leads = parseFloat(div.querySelector("#leads").value);
    const sales = parseFloat(div.querySelector("#sales").value);

    if (isNaN(leads) || isNaN(sales) || leads <= 0 || sales < 0) {
      div.querySelector("#conversionResult").textContent = "Please enter valid positive numbers.";
      return;
    }

    const rate = (sales / leads) * 100;
    div.querySelector("#conversionResult").innerHTML = `<b>Conversion Rate:</b> ${rate.toFixed(2)} %`;
  });

  return div;
}
