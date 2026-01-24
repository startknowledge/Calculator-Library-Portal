export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Motor Insurance Premium Calculator</h3>

    <p>
      Estimate the premium for your motor insurance policy based on the Insured 
      Declared Value (IDV) and the premium rate provided by your insurer.
    </p>

    <label>Insured Declared Value (IDV ₹):</label>
    <input type="number" id="motorIDV" min="0" placeholder="e.g. 500000">

    <label>Premium Rate (%):</label>
    <input type="number" id="motorRate" min="0" step="0.01" placeholder="e.g. 3">

    <button onclick="calcMotorInsurance()">Calculate</button>

    <p id="motorResult"></p>
    <br>

    <p><b>Formula:</b><br>
      Premium = IDV × Premium Rate / 100
    </p>

    <p><b>Example:</b><br>
      IDV = ₹500,000<br>
      Premium Rate = 3%<br>
      <b>Estimated Premium = ₹15,000</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for vehicle owners, insurance agents, and financial planners to estimate motor insurance premiums.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only.<br></p>
  `;

  window.calcMotorInsurance = function () {
    const idv = parseFloat(document.getElementById("motorIDV").value);
    const rate = parseFloat(document.getElementById("motorRate").value);

    if (isNaN(idv) || isNaN(rate) || idv < 0 || rate < 0) {
      document.getElementById("motorResult").innerHTML =
        "<b>Please enter valid positive numbers.</b>";
      return;
    }

    const premium = idv * (rate / 100);

    document.getElementById("motorResult").innerHTML =
      `<b>Estimated Premium:</b> ₹${premium.toFixed(2)}`;
  };

  return div;
}
