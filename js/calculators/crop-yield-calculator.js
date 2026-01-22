export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Crop Yield Calculator</h3>

    <label>Land Area (Acre)</label>
    <input id="landArea" value="5">

    <label>Yield per Acre (kg)</label>
    <input id="yieldPerAcre" value="800">

    <button onclick="calcYield()">Calculate</button>
    <p id="yieldResult"></p>
    <br>
    <p><u>Explanation about Crop Yield Calculator</u> :</p>
    <p>The Crop Yield Calculator is an essential tool for farmers, agricultural planners, and researchers to estimate the total crop yield based on the area of land cultivated and the expected yield per unit area. This calculator helps in planning and optimizing agricultural production by providing insights into potential harvest quantities.</p>
    <p>To use the calculator, users need to input the total land area in acres and the expected yield per acre in kilograms. The calculator then multiplies these two values to provide the total estimated crop yield in kilograms.</p>
    <p>This tool is particularly useful for farmers looking to maximize their production efficiency, agricultural consultants advising on crop planning, and researchers analyzing agricultural productivity. By providing a quick and accurate estimate of crop yield, the calculator aids in decision-making related to resource allocation, market planning, and overall farm management.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional agricultural advice or detailed crop yield analysis.</p>
    <br>
  `;

  window.calcYield = function () {
    let area = +document.getElementById("landArea").value;
    let yieldPerAcre = +document.getElementById("yieldPerAcre").value;

    let totalYield = area * yieldPerAcre;

    document.getElementById("yieldResult").innerHTML =
      `<b>Total Crop Yield:</b> ${totalYield} kg`;
  };

  return div;
}
