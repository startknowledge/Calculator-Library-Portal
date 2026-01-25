export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Scholarship Eligibility Calculator</h3>

    <h4>Eligibility Criteria</h4>
    <p>
      A student is eligible for a scholarship if:
      <ul>
        <li>Percentage ≥ 75%</li>
        <li>Annual Income ≤ ₹2,50,000</li>
      </ul>
    </p>

    <form id="schForm">
      <label for="schPer">Percentage:</label>
      <input type="number" id="schPer" required><br><br>

      <label for="income">Annual Income (₹):</label>
      <input type="number" id="income" required><br><br>

      <input type="submit" value="Check Eligibility">
    </form>

    <h3 id="schResult"></h3>

    <h4>Example</h4>
    <p>
      Percentage: 80%, Annual Income: ₹2,00,000 → Eligible<br>
      Percentage: 70%, Annual Income: ₹3,00,000 → Not Eligible
    </p>

    <h4>Note</h4>
    <p>
      This calculator is based on a specific scholarship criteria. Different scholarships may have different rules regarding academic percentage and income limits.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This tool provides an estimation of eligibility for informational purposes only. Actual eligibility depends on the scholarship provider and their official guidelines.
    </p>
  `;

  div.querySelector("#schForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const per = parseFloat(div.querySelector("#schPer").value);
    const income = parseFloat(div.querySelector("#income").value);

    if (isNaN(per) || isNaN(income)) {
      div.querySelector("#schResult").textContent = "Please enter valid numbers.";
      return;
    }

    div.querySelector("#schResult").innerHTML =
      per >= 75 && income <= 250000
        ? "<b>Eligible for Scholarship</b>"
        : "<b>Not Eligible</b>";
  });

  return div;
}
