export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Battery Range Calculator</h3>

    <table class="load-table">
      <tr><th>Parameter</th><th>Value</th></tr>

      <tr>
        <td>Battery Capacity (kWh)</td>
        <td><input id="batCap" value="40"></td>
      </tr>

      <tr>
        <td>Energy Consumption (Wh/km)</td>
        <td><input id="consumption" value="150"></td>
      </tr>
    </table>

    <button onclick="calcRange()">Calculate</button>
    <p id="rangeResult"></p>
    <br>
    <p><u>Explanation about EV Battery Range Calculator</u> :</p>
    <p>The EV Battery Range Calculator is a tool designed to estimate the driving range of an electric vehicle (EV) based on its battery capacity and energy consumption rate. By inputting the battery capacity in kilowatt-hours (kWh) and the energy consumption in watt-hours per kilometer (Wh/km), users can quickly calculate the estimated distance the vehicle can travel on a full charge.</p>
    <p>The range is calculated using the formula: Range (km) = Battery Capacity (kWh) / Energy Consumption (kWh/km). This formula takes into account the total energy stored in the battery and how efficiently the vehicle uses that energy while driving.</p>
    <p>To use the calculator, simply enter the battery capacity and energy consumption values in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the estimated driving range in kilometers (km).</p>
    <p>This calculator is particularly useful for prospective EV buyers, current EV owners, and automotive enthusiasts who want to understand the capabilities of electric vehicles. By knowing the estimated range, users can make informed decisions about their driving habits, charging needs, and overall vehicle performance.</p> 
    <p>In summary, the EV Battery Range Calculator is a valuable resource for anyone interested in electric vehicles, providing clarity on driving range and aiding in effective planning for trips and daily commutes.</p>
    <p><b>Note:</b> This calculator provides an estimate of the driving range based on the inputs provided and assumes average driving conditions. Actual range may vary depending on factors such as driving style, terrain, weather, and vehicle load.</p>
    <p>For personalized advice and detailed vehicle performance analysis, consider consulting with an automotive expert or EV specialist.</p> 
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified automotive professional for critical vehicle performance decisions.</p>
    <br>
  `;

  window.calcRange = function () {
    let cap = +document.getElementById("batCap").value;
    let cons = +document.getElementById("consumption").value / 1000;

    let range = cap / cons;

    document.getElementById("rangeResult").innerHTML =
      `<b>Estimated Range:</b> ${range.toFixed(1)} km`;
  };

  return div;
}
