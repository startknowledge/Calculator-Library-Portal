export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Renewal Income Calculator</h3>

    <p>
      This Renewal Income Calculator helps insurance agents and financial advisors
      estimate their total renewal income based on the number of active policies
      and the average renewal commission earned per policy.
    </p>

    <label>Number of Policies</label>
    <input type="number" id="renewPolicies" placeholder="Enter number of policies">

    <label>Average Renewal Commission (₹)</label>
    <input type="number" id="renewCommission" placeholder="Enter commission per policy">

    <button onclick="calcRenewal()">Calculate</button>
    <p id="renewResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      Renewal income is the recurring commission earned by insurance agents when
      existing policyholders renew their policies. This income is crucial for
      long-term financial stability in the insurance business.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Total Renewal Income = Number of Policies × Average Renewal Commission</b>
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the total number of policies eligible for renewal.<br>
      2. Enter the average commission earned per policy.<br>
      3. Click on the Calculate button to view total renewal income.
    </p>

    <h4>Example</h4>
    <p>
      Number of Policies = 120<br>
      Average Renewal Commission = ₹500<br>
      <b>Total Renewal Income = ₹60,000</b>
    </p>

    <h4>Note</h4>
    <p>
      Renewal commission rates may vary depending on insurer, policy type,
      premium amount, and regulatory guidelines.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an estimated renewal income for reference only.
      Actual earnings may differ based on insurer rules, policy lapses,
      and commission structures.
    </p>
  `;

  window.calcRenewal = function () {
    let policies = parseFloat(document.getElementById("renewPolicies").value);
    let commission = parseFloat(document.getElementById("renewCommission").value);

    if (isNaN(policies) || isNaN(commission)) {
      document.getElementById("renewResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let income = policies * commission;

    document.getElementById("renewResult").innerHTML =
      `<b>Total Renewal Income:</b> ₹${income.toFixed(2)}`;
  };

  return div;
}
