export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Material Loss Calculator</h3>
      <p>Calculate the financial loss incurred when purchased material is not fully used.</p>

      <label>Material Purchased (₹):</label>
      <input type="number" id="purchased" placeholder="e.g. 50000">

      <label>Material Used (₹):</label>
      <input type="number" id="used" placeholder="e.g. 42000">

      <button id="materialBtn">Calculate</button>
      <p id="materialResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator helps determine the monetary loss from unused or wasted material.</p>
      <p><b>For example:</b> If ₹50,000 worth of material was purchased and only ₹42,000 worth was used, the loss is ₹8,000.</p>
      <p><b>Formula:</b> Material Loss = Material Purchased − Material Used</p>
      <p>Calculator is a tool to help track wastage or inefficiencies in material usage.</p>
      <p>Accuracy depends on correct input values.</p>
      <p>Based on standard accounting principles.</p>
      <p>To use the calculator, enter the purchased and used amounts, then click "Calculate".</p>
      <p><b>Note:</b> Ensure amounts are in the same currency and units.</p>
      <p>It is important to enter valid numeric values.</p>
      <p><b>Disclaimer:</b> This calculator is for estimation purposes only. Actual losses may vary due to other operational factors.</p>
      <br>
    </div>
  `;

  div.querySelector("#materialBtn").onclick = () => {
    const purchased = parseFloat(document.getElementById("purchased").value);
    const used = parseFloat(document.getElementById("used").value);

    if (isNaN(purchased) || isNaN(used)) {
      document.getElementById("materialResult").innerHTML = "<b>Please enter valid values!</b>";
      return;
    }

    const loss = purchased - used;
    document.getElementById("materialResult").innerHTML = `<b>Material Loss:</b> ₹${loss.toFixed(2)}`;
  };

  return div;
}
