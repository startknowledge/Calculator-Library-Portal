export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Water Bill Calculator</h2>
    <p>This calculator estimates the total water bill based on your water consumption and the rate per litre.</p>

    <div class="form-group">
      <label>Water Usage (Litres)</label>
      <input type="number" id="litres" placeholder="Enter water usage in litres">
    </div>

    <div class="form-group">
      <label>Rate per Litre (₹)</label>
      <input type="number" id="rate" placeholder="Enter rate per litre in ₹">
    </div>

    <button onclick="calcWaterBill()">Calculate</button>
    <p id="waterResult"></p>

    <br>
    <p><b>Explanation:</b> The total bill is calculated by multiplying the water used by the cost per litre.</p>
    <p><b>Formula:</b> <i>Water Bill (₹) = Water Usage (Litres) × Rate per Litre (₹)</i></p>
    <p><b>Calculator is a tool:</b> Helps households and businesses estimate water expenses.</p>
    <p><b>Relative Note:</b> The calculation assumes a fixed rate and does not include taxes or service charges.</p>
    <p><b>Based On:</b> Simple multiplication of quantity and rate.</p>
    <p><b>To Use the Calculator:</b> Enter your water usage and rate per litre, then click "Calculate".</p>
    <p><b>Note:</b> Ensure units are correct. Water usage should be in litres, and rate in ₹ per litre.</p>
    <p><b>It is important:</b> This is an estimation. Actual bills may include additional charges.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for billing errors. Always verify with your water supplier.</p>
    <br><hr>
  `;

  window.calcWaterBill = function () {
    const litres = parseFloat(document.getElementById("litres").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(litres) || isNaN(rate) || litres < 0 || rate < 0) {
      waterResult.innerHTML = "❌ Please enter valid positive numbers for water usage and rate.";
      return;
    }

    const bill = litres * rate;
    waterResult.innerHTML = `<b>Water Bill:</b> ₹${bill.toFixed(2)}`;
  };

  return div;
}
