export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>PMAY (Pradhan Mantri Awas Yojana) Eligibility Checker</h3>
    <p>Check if you are eligible for PMAY subsidy based on your annual income.</p>
    <p><b>Eligibility Criteria:</b> Annual Income ≤ ₹6,00,000</p>

    <label>Annual Income (₹)</label>
    <input type="number" id="income" min="0" placeholder="Enter your annual income">

    <button onclick="calcPMAY()">Check Eligibility</button>
    <p id="pmayResult"></p>

    <p><b>Disclaimer:</b> This calculator provides an estimate based on income only. Actual eligibility may vary depending on government rules and other criteria.</p>
    <br>
  `;

  window.calcPMAY = function () {
    const incomeVal = parseFloat(document.getElementById("income").value);

    if (isNaN(incomeVal) || incomeVal < 0) {
      pmayResult.innerHTML = "Please enter a valid positive income.";
      return;
    }

    const eligible = incomeVal <= 600000 ? "Eligible" : "Not Eligible";

    document.getElementById("pmayResult").innerHTML =
      `<b>Status:</b> ${eligible}`;
  };

  return div;
}
