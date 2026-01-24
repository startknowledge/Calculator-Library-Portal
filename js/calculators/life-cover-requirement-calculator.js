export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Life Cover Requirement Calculator</h3>

    <label>Annual Income (₹)</label>
    <input type="number" id="income" placeholder="Enter annual income">

    <label>Income Multiplier</label>
    <input type="number" id="multi" placeholder="e.g. 10, 15, 20">

    <button onclick="calcCover()">Calculate</button>
    <p id="coverResult"></p>
    <br>

    <p>The Life Cover Requirement Calculator helps estimate the ideal life insurance cover based on your income.</p>
    <p>This calculator is useful for financial planning and ensuring your family’s financial security.</p>
    <p>It uses a simple income-multiplier method commonly recommended by insurance experts.</p>

    <p><b>How to Use:</b></p>
    <p>
      Enter your annual income and choose an income multiplier (such as 10, 15, or 20),
      then click the <b>Calculate</b> button to see the recommended life cover amount.
    </p>

    <p><b>Formula:</b></p>
    <p>
      Recommended Life Cover = Annual Income × Income Multiplier
    </p>

    <p><b>Example:</b></p>
    <p>
      If your annual income is ₹6,00,000 and the multiplier is 15,<br>
      Recommended Life Cover = <b>₹90,00,000</b>
    </p>

    <p><b>Note:</b> Higher multipliers provide greater financial protection but may increase premium cost.</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate only. Actual life cover needs may vary based on liabilities, expenses, and financial goals.</p>
    <br>
  `;

  window.calcCover = function () {
    const income = parseFloat(document.getElementById("income").value) || 0;
    const multi = parseFloat(document.getElementById("multi").value) || 0;

    const cover = income * multi;

    document.getElementById("coverResult").innerHTML =
      `<b>Recommended Life Cover:</b> ₹${cover.toLocaleString("en-IN")}`;
  };

  return div;
}
