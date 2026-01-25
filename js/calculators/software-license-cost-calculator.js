export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Software License Cost Calculator</h3>
      <p>Calculate the total cost of software licenses based on cost per license and number of licenses purchased.</p>

      <label>Cost per License (₹):</label>
      <input type="number" id="rate" value="1500" placeholder="e.g. 1500">

      <label>Number of Licenses:</label>
      <input type="number" id="qty" value="20" placeholder="e.g. 20">

      <button id="licenseBtn">Calculate</button>
      <p id="licenseResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator helps determine the total cost for purchasing multiple software licenses.</p>
      <p><b>For example:</b> If cost per license = ₹1500 and quantity = 20, total cost = ₹30,000.</p>
      <p><b>Formula:</b> Total Cost = Cost per License × Number of Licenses</p>
      <p>Calculator simplifies software budgeting calculations.</p>
      <p>Relative accuracy depends on correct input values.</p>
      <p>To use the calculator, enter the cost per license and the number of licenses, then click "Calculate".</p>
      <p><b>Note:</b> Ensure you enter numeric values only for accurate results.</p>
      <p>It is important to double-check the cost and quantity before purchase.</p>
      <p><b>Disclaimer:</b> This calculator is for reference only. Actual costs may vary depending on the vendor or license terms.</p>
      <br>
    </div>
  `;

  div.querySelector("#licenseBtn").onclick = () => {
    const rate = parseFloat(document.getElementById("rate").value);
    const qty = parseFloat(document.getElementById("qty").value);

    if (isNaN(rate) || isNaN(qty)) {
      document.getElementById("licenseResult").innerHTML = "<b>Please enter valid numbers!</b>";
      return;
    }

    const totalCost = rate * qty;
    document.getElementById("licenseResult").innerHTML = `<b>Total License Cost:</b> ₹${totalCost.toFixed(2)}`;
  };

  return div;
}
