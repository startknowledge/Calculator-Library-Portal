export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Startup Valuation Calculator</h3>
      <p>Estimate the value of a startup based on revenue and industry multiple.</p>

      <label>Annual Revenue (₹)</label>
      <input type="number" id="revenue" value="5000000">

      <label>Industry Multiple (×)</label>
      <input type="number" id="multiple" value="4">

      <button id="valBtn">Calculate</button>
      <p id="valResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator estimates the startup's value by applying a multiple to its annual revenue.</p>
      <p><b>For example:</b> A startup with ₹5,000,000 revenue and a 4× industry multiple has an estimated valuation of ₹20,000,000.</p>
      <p><b>Formula:</b> Valuation = Annual Revenue × Industry Multiple</p>
      <p>Calculator provides a simplified view for business planning and investment purposes.</p>
      <p>Relative accuracy depends on the choice of industry multiple and revenue data.</p>
      <p>To use the calculator, enter the revenue and the industry multiple, then click "Calculate".</p>
      <p><b>Note:</b> Industry multiples vary by sector and market conditions. Choose appropriately.</p>
      <p>It is important to use accurate revenue figures for reliable estimates.</p>
      <p><b>Disclaimer:</b> This calculator provides approximate valuations and should not be used as the sole basis for investment or financial decisions.</p>
      <br>
    </div>
  `;

  div.querySelector("#valBtn").onclick = () => {
    const revenue = +document.getElementById("revenue").value;
    const multiple = +document.getElementById("multiple").value;

    if (isNaN(revenue) || isNaN(multiple) || revenue < 0 || multiple <= 0) {
      document.getElementById("valResult").innerHTML = "❌ Please enter valid positive numbers";
      return;
    }

    const valuation = revenue * multiple;

    document.getElementById("valResult").innerHTML =
      `<b>Estimated Startup Valuation:</b> ₹${valuation.toLocaleString()}`;
  };

  return div;
}
