export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Laundry Cost Calculator</h3>

      <label>Cost per Cloth (₹)</label>
      <input id="rate" type="number" value="30" placeholder="e.g. 30">

      <label>Number of Clothes</label>
      <input id="qty" type="number" value="60" placeholder="e.g. 60">

      <button id="calcLaundryBtn">Calculate</button>
      <p id="laundryResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator computes the total cost of laundry based on the cost per cloth and the number of clothes.</p>
      <p><b>For example:</b> If cost per cloth is ₹30 and you have 60 clothes, total cost = 30 × 60 = ₹1800.</p>
      <p><b>Formula:</b> Total Cost = Cost per Cloth × Number of Clothes</p>
      <p>Calculator is a tool to quickly estimate laundry expenses.</p>
      <p>Accuracy depends on correct numeric input for both fields.</p>
      <p>To use the calculator, enter the cost per cloth and number of clothes, then click "Calculate".</p>
      <p><b>Note:</b> Ensure all inputs are positive numbers.</p>
      <p><b>Disclaimer:</b> This calculator provides approximate values for reference only and may not account for taxes, discounts, or additional fees.</p>
      <br>
    </div>
  `;

  div.querySelector("#calcLaundryBtn").onclick = function () {
    const rate = +document.getElementById("rate").value;
    const qty = +document.getElementById("qty").value;

    if (!rate || !qty || rate <= 0 || qty <= 0) {
      document.getElementById("laundryResult").innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    const total = rate * qty;
    document.getElementById("laundryResult").innerHTML = `<b>Total Laundry Cost:</b> ₹${total}`;
  };

  return div;
}
