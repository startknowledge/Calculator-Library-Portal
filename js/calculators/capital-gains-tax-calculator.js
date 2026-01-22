export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Capital Gains Tax Calculator</h3>

    <label>Profit Amount (₹)</label>
    <input type="number" id="gainAmount">

    <label>Tax Rate (%)</label>
    <input type="number" id="gainRate">

    <button onclick="calcCG()">Calculate</button>
    <p id="cgResult"></p><br>
  <p><u>Explanation about Capital Gains Tax Calculation</u> :</p>
  <p>Capital Gains Tax (CGT) is a tax levied on the profit realized from the sale of a non-inventory asset, such as property or investments. The tax is calculated based on the difference between the sale price and the original purchase price of the asset. Understanding how to calculate CGT is essential for investors and property owners to ensure compliance with tax regulations and to plan their finances effectively.</p>
  <p>The formula to calculate Capital Gains Tax is:</p>
  <p>Capital Gains Tax = Profit Amount × Tax Rate</p>
  <p>For example, if you sell a property and make a profit of ₹500,000 with a capital gains tax rate of 20%, the calculation would be as follows:</p>
  <p>Capital Gains Tax = ₹500,000 × 20% = ₹100,000</p>
  <p>This means that you would owe ₹100,000 in capital gains tax on the profit made from the sale of the property.</p>
  <br>
  `;

  window.calcCG = function () {
    let gain = parseFloat(document.getElementById("gainAmount").value);
    let rate = parseFloat(document.getElementById("gainRate").value);

    let tax = (gain * rate) / 100;

    document.getElementById("cgResult").innerHTML =
      `<b>Capital Gains Tax:</b> ₹${tax.toFixed(2)}`;
  };

  return div;
}
