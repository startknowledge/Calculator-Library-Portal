export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Loan Recovery Percentage</h3>

    <div class="form-group">
      <label>Recovered Amount (₹)</label>
      <input type="number" id="rec">
    </div>

    <div class="form-group">
      <label>Total Loan Amount (₹)</label>
      <input type="number" id="loan">
    </div>

    <button onclick="calcRecovery()">Calculate</button>
    <p id="recResult"></p>
  `;

  window.calcRecovery = () => {
    recResult.innerText =
      "Recovery Rate: " +
      ((rec.value / loan.value) * 100).toFixed(2) +
      " %";
  };

  return div;
};
