export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Renewal Income Calculator</h3>

    <label>Number of Policies</label>
    <input type="number" id="renewPolicies">

    <label>Average Renewal Commission (₹)</label>
    <input type="number" id="renewCommission">

    <button onclick="calcRenewal()">Calculate</button>
    <p id="renewResult"></p>
  `;

  window.calcRenewal = function () {
    let policies = parseFloat(document.getElementById("renewPolicies").value);
    let commission = parseFloat(document.getElementById("renewCommission").value);

    let income = policies * commission;

    document.getElementById("renewResult").innerHTML =
      `<b>Total Renewal Income:</b> ₹${income.toFixed(2)}`;
  };

  return div;
}
