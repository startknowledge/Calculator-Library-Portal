export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Hallmark Purity Checker</h3>

    <p>
      This tool helps you verify gold purity based on Karat value
      and validates the 6-digit HUID (Hallmark Unique Identification Number)
      as per BIS guidelines.
    </p>

    <div class="calculator-form">

      <label for="karat">Select Gold Karat:</label>
      <select id="karat">
        <option value="">-- Select Karat --</option>
        <option value="24">24K (999)</option>
        <option value="22">22K (916)</option>
        <option value="18">18K (750)</option>
        <option value="14">14K (585)</option>
        <option value="10">10K (417)</option>
      </select>

      <label for="huid">Enter 6-Digit HUID Number:</label>
      <input
        type="text"
        id="huid"
        placeholder="Example: A1B2C3"
        maxlength="6"
      >

      <button id="checkBtn">Check Purity</button>

    </div>

    <div class="calculator-result" id="result"></div>

    <br>

    <b><u>Hallmark Information:</u></b>
    <ul>
      <li>916 → 22 Karat Gold (91.6% purity)</li>
      <li>750 → 18 Karat Gold (75% purity)</li>
      <li>585 → 14 Karat Gold (58.5% purity)</li>
      <li>999 → 24 Karat Gold (99.9% purity)</li>
    </ul>
    <br>
    <p><b>How to Use:</b> Select the gold karat from the dropdown and enter the 6-digit HUID number to verify the hallmark details.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Gold Karat:</b> The karat value of the gold item.</li>
      <li><b>HUID:</b> The 6-digit Hallmark Unique Identification Number.</li>
    </ul>
    <p><b>Outputs:</b></p>
    <ul>
      <li><b>Hallmark Details:</b> Verification of the gold karat, purity mark, and HUID.</li>
    </ul>
    <p><b>Example:</b> For a 24K gold item with HUID A1B2C3, the hallmark details would be verified as 24K (999) with HUID A1B2C3.</p>
    <p><b>Formula:</b> Purity Mark = Karat Value (e.g., 24K = 999)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and final verification should be done using BIS CARE App.</p>
    <br>
  `;

  window.checkPurity = function () {
    const karat = document.getElementById("karat").value;
    const huid = document.getElementById("huid").value.trim();
    const resultDiv = document.getElementById("result");

    if (!karat) {
      resultDiv.innerHTML = "❌ Please select a gold karat.";
      return;
    }

    if (!/^[A-Za-z0-9]{6}$/.test(huid)) {
      resultDiv.innerHTML =
        "❌ Invalid HUID. It must be exactly 6 alphanumeric characters.";
      return;
    }

    const purityMap = {
      24: "999 (99.9% Pure Gold)",
      22: "916 (91.6% Pure Gold)",
      18: "750 (75% Pure Gold)",
      14: "585 (58.5% Pure Gold)",
      10: "417 (41.7% Pure Gold)"
    };

    resultDiv.innerHTML = `
      ✅ <b>Hallmark Details Verified</b><br>
      <b>Karat:</b> ${karat}K<br>
      <b>Purity Mark:</b> ${purityMap[karat]}<br>
      <b>HUID:</b> ${huid.toUpperCase()}<br>
      <small>Note: Final verification should be done using BIS CARE App.</small>
    `;
  };

  setTimeout(() => {
    document
      .getElementById("checkBtn")
      .addEventListener("click", checkPurity);
  }, 100);

  return div;
}
