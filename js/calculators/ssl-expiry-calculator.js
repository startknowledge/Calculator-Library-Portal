export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>SSL Expiry Calculator</h3>
      <p>Calculate the number of days remaining before your SSL certificate expires.</p>

      <label>SSL Expiry Date:</label>
      <input type="date" id="expiry">

      <button id="sslBtn">Calculate</button>
      <p id="sslResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator helps track SSL certificate expiration so you can renew it on time.</p>
      <p><b>For example:</b> If your SSL certificate expires on 2026-03-01, and today is 2026-01-25, the days remaining are 35.</p>
      <p><b>Formula:</b> Days Remaining = (Expiry Date - Today) / (1000 × 60 × 60 × 24)</p>
      <p>Calculator simplifies monitoring of SSL certificates.</p>
      <p>Relative accuracy depends on system date and time.</p>
      <p>To use the calculator, select your SSL expiry date and click "Calculate".</p>
      <p><b>Note:</b> Ensure your system date and time are correct for accurate results.</p>
      <p>It is important to renew SSL certificates before expiry to avoid security warnings.</p>
      <p><b>Disclaimer:</b> This calculator provides approximate values and should be used for planning purposes only.</p>
      <br>
    </div>
  `;

  div.querySelector("#sslBtn").onclick = () => {
    const expiry = new Date(document.getElementById("expiry").value);
    const today = new Date();

    if (!expiry || isNaN(expiry.getTime())) {
      document.getElementById("sslResult").innerHTML = "❌ Please enter a valid date";
      return;
    }

    const diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

    document.getElementById("sslResult").innerHTML =
      `<b>Days Remaining:</b> ${diff} day${diff !== 1 ? "s" : ""}`;
  };

  return div;
}
