export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Insurance Coverage Calculator</h3>

    <label>Annual Income (₹)</label>
    <input id="income">

    <label>Coverage Multiple (e.g. 10)</label>
    <input id="multi">

    <button onclick="calcCoverage()">Calculate</button>
    <p id="covResult"></p>
    <br>
    <p>The Insurance Coverage Calculator helps you determine the recommended insurance coverage based on your annual income and a coverage multiple. By entering your annual income and the desired coverage multiple, users can quickly calculate the recommended insurance coverage amount.</p>
    <p>This calculator is useful for individuals who want to ensure they have adequate insurance coverage to protect their financial well-being.</p>
    <p>Ensure that the income and coverage multiple inputs are accurate to get a reliable coverage estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your annual income in the "Annual Income" field and the desired coverage multiple in the "Coverage Multiple" field. Click the "Calculate" button to see the recommended insurance coverage displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Annual Income (₹):</b> Your total annual income in Indian Rupees.</li>
      <li><b>Coverage Multiple:</b> The multiple of your income you want to use for insurance coverage.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Recommended Coverage (₹):</b> The recommended insurance coverage amount based on your income and coverage multiple.</li>
    </ul>
    <p><b>Note:</b> Ensure that the income and coverage multiple inputs are accurate to get a reliable coverage estimate.</p>
    <p><b>Example:</b> For an annual income of ₹500,000 and a coverage multiple of 10, the recommended coverage would be ₹5,000,000.</p>
    <p><b>Formula:</b> Recommended Coverage = Annual Income × Coverage Multiple</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual insurance needs may vary based on additional factors such as age, family size, and specific financial goals.</p>
    <br>
  `;

  window.calcCoverage = () => {
    covResult.innerText =
      "Recommended Coverage: ₹" + (income.value * multi.value).toFixed(2);
  };

  return div;
}
