export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Insurance Premium Calculator</h3>
    <p>This calculator computes the annual premium based on the sum assured and the premium rate.</p>

    <label>Sum Assured (₹)</label>
    <input type="number" id="sum" placeholder="e.g. 500000">

    <label>Premium Rate (%)</label>
    <input type="number" id="rate" placeholder="e.g. 2">

    <button onclick="calcPremium()">Calculate</button>
    <p id="premiumResult"></p>

    <br>
    <p><b>Explanation:</b> The premium is the amount you pay annually for the insurance coverage.</p>
    <p><b>For example:</b> For a sum assured of ₹500,000 with a 2% premium rate, the annual premium is ₹10,000.</p>
    <p><b>Formula:</b> Premium = (Sum Assured × Premium Rate) ÷ 100</p>
    <p>Calculator simplifies premium computation.</p>
    <p>Accuracy depends on correct input of sum assured and premium rate.</p>
    <p>Based on standard insurance premium calculation rules.</p>
    <p>To use the calculator, enter the sum assured and premium rate, then click "Calculate".</p>
    <p><b>Note:</b> Ensure the premium rate matches the official policy rate.</p>
    <p>It is important to enter valid numeric values.</p>
    <p><b>Disclaimer:</b> This calculator is for reference purposes only. Actual premiums may vary according to insurer policies, discounts, and terms.</p>
  `;

  window.calcPremium = () => {
    const sumVal = parseFloat(document.getElementById("sum").value);
    const rateVal = parseFloat(document.getElementById("rate").value);

    if (isNaN(sumVal) || isNaN(rateVal)) {
      document.getElementById("premiumResult").innerHTML = "<b>Please enter valid numbers</b>";
      return;
    }

    const premium = (sumVal * rateVal) / 100;

    document.getElementById("premiumResult").innerText =
      "Annual Premium: ₹" + premium.toFixed(2);
  };

  return div;
}
