export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fabric Weight Calculator</h3>

    <label>Fabric Length (Meters)</label>
    <input id="len" value="10">

    <label>GSM</label>
    <input id="gsm" value="180">

    <button onclick="calcWeight()">Calculate</button>
    <p id="weightResult"></p>
    <br>
    <p><u>Explanation about Fabric Weight Calculator</u> :</p>
    <p>The Fabric Weight Calculator is a tool designed to help individuals and businesses calculate the weight of fabric based on its length and GSM (grams per square meter). By inputting the fabric length in meters and the GSM, users can quickly determine the total weight of the fabric in kilograms.</p>
    <p>The calculator uses the following formula:</p>
    <p>Fabric Weight (kg) = (Fabric Length (m) * GSM) / 1000</p>
    <p>To use the calculator, simply enter the fabric length in meters and the GSM in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the total fabric weight in kilograms.</p>
    <p>This calculator is particularly useful for tailors, fashion designers, and fabric retailers who need to manage fabric costs and measurements efficiently. By knowing both the total cost and the length in yards, users can make informed purchasing decisions and budget planning.</p>
    <p>In summary, the Fabric Weight Calculator is a valuable resource for anyone involved in fabric-related businesses or projects, providing clarity on costs and measurements to aid in effective financial and material management.</p>
    <p><b>Note:</b> This calculator provides an estimate of the fabric weight based on the inputs provided. Actual weights may vary depending on fabric type, quality, and market fluctuations.</p>
    <p>For personalized advice and detailed fabric weight analysis, consider consulting with a textile expert or fabric supplier.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
  `;

  window.calcWeight = function () {
    let len = +document.getElementById("len").value;
    let gsm = +document.getElementById("gsm").value;

    let weight = (len * gsm) / 1000;

    document.getElementById("weightResult").innerHTML =
      `<b>Fabric Weight:</b> ${weight.toFixed(2)} kg`;
  };

  return div;
}
