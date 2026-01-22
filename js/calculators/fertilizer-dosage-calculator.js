export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Fertilizer = Area × Dosage per Acre</h3>

    <label>Land Area (Acre)</label>
    <input id="area" value="2">

    <label>Fertilizer per Acre (kg)</label>
    <input id="rate" value="50">

    <button onclick="calcFert()">Calculate</button>
    <p id="fertResult"></p>
    <br>
    <p><u>Explanation about Fertilizer Dosage Calculator</u> :</p>
    <p>The Fertilizer Dosage Calculator is a tool designed to help individuals and businesses calculate the total amount of fertilizer needed for a given area. By inputting the land area in acres and the fertilizer dosage per acre, users can quickly determine the total fertilizer required in kilograms.</p>
    <p>The calculator uses the following formula:</p>
    <p>Total Fertilizer (kg) = Land Area (Acre) * Fertilizer per Acre (kg)</p>
    <p>To use the calculator, simply enter the land area in acres and the fertilizer dosage per acre in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the total fertilizer required in kilograms.</p>
    <p>This calculator is particularly useful for farmers and agricultural businesses who need to manage fertilizer costs and measurements efficiently. By knowing the total fertilizer required, users can make informed purchasing decisions and budget planning.</p>
    <p>In summary, the Fertilizer Dosage Calculator is a valuable resource for anyone involved in agricultural businesses or projects, providing clarity on costs and measurements to aid in effective financial and material management.</p>
    <p><b>Note:</b> This calculator provides an estimate of the fertilizer dosage based on the inputs provided. Actual costs may vary depending on fertilizer type, quality, and market fluctuations.</p>
    <p>For personalized advice and detailed fertilizer cost analysis, consider consulting with an agricultural expert or fertilizer supplier.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
  `;

  window.calcFert = function () {
    fertResult.innerHTML =
      `<b>Total Fertilizer Required:</b> ${area.value * rate.value} kg`;
  };

  return div;
}
