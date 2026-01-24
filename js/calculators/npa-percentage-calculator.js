export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>NPA (Non-Performing Assets) Percentage Calculator</h3>

    <p>
      Calculate the percentage of NPAs (Non-Performing Assets) with respect to total advances of a bank or financial institution.
    </p>

    <div class="form-group">
      <label>Total NPAs (₹)</label>
      <input type="number" id="npa" min="0" placeholder="e.g. 5000000">
    </div>

    <div class="form-group">
      <label>Total Advances (₹)</label>
      <input type="number" id="adv" min="0" placeholder="e.g. 100000000">
    </div>

    <button onclick="calcNPA()">Calculate</button>
    <p id="npaResult"></p>
    <br>

    <p><b>Formula:</b><br>
      NPA Percentage = (Total NPAs ÷ Total Advances) × 100
    </p>

    <p><b>Example:</b><br>
      Total NPAs = ₹5,000,000<br>
      Total Advances = ₹100,000,000<br>
      <b>NPA Percentage = 5%</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for bankers, finance professionals, and analysts to monitor the asset quality.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for informational purposes only. Actual NPA percentages may vary.<br></p>
  `;

  window.calcNPA = () => {
    const npa = parseFloat(document.getElementById("npa").value);
    const adv = parseFloat(document.getElementById("adv").value);

    if (isNaN(npa) || isNaN(adv) || npa < 0 || adv <= 0) {
      document.getElementById("npaResult").innerText =
        "Please enter valid positive numbers (Total Advances must be > 0).";
      return;
    }

    const npaPerc = (npa / adv) * 100;
    document.getElementById("npaResult").innerHTML =
      `<b>NPA Percentage:</b> ${npaPerc.toFixed(2)} %`;
  };

  return div;
};
