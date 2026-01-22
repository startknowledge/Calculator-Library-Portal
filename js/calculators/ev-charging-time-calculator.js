export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>EV Charging Time Calculator</h3>

    <table class="load-table">
      <tr><th>Parameter</th><th>Value</th></tr>

      <tr>
        <td>Battery Capacity (kWh)</td>
        <td><input id="battery" value="40"></td>
      </tr>

      <tr>
        <td>Charger Power (kW)</td>
        <td><input id="charger" value="7.2"></td>
      </tr>
    </table>

    <button onclick="calcChargeTime()">Calculate</button>
    <p id="timeResult"></p>
    <br>
    <p><u>Explanation about EV Charging Time Calculator</u> :</p>
    <p>The EV Charging Time Calculator is a tool designed to estimate the time required to fully charge an electric vehicle (EV) based on its battery capacity and the power of the charger being used. By inputting the battery capacity in kilowatt-hours (kWh) and the charger power in kilowatts (kW), users can quickly calculate the estimated charging time.</p> 
    <p>The charging time is calculated using the formula: Charging Time (hours) = Battery Capacity (kWh) / Charger Power (kW). This formula takes into account the total energy stored in the battery and the rate at which the charger can deliver that energy.</p>  
    <p>To use the calculator, simply enter the battery capacity and charger power values in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the estimated charging time in hours.</p>
    <p>This calculator is particularly useful for prospective EV buyers, current EV owners, and automotive enthusiasts who want to understand the charging capabilities of electric vehicles. By knowing the estimated charging time, users can make informed decisions about their charging habits, trip planning, and overall vehicle usage.</p> 
    <p>In summary, the EV Charging Time Calculator is a valuable resource for anyone interested in electric vehicles, providing clarity on charging times and aiding in effective planning for trips and daily commutes.</p>
    <p><b>Note:</b> This calculator provides an estimate of the charging time based on the inputs provided and assumes average charging conditions. Actual charging time may vary depending on factors such as charger type, battery condition, and environmental conditions.</p> 
    <p>For personalized advice and detailed vehicle performance analysis, consider consulting with an automotive expert or EV specialist.</p> 
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified automotive professional for critical vehicle performance decisions.</p>
    <br>
  `;

  window.calcChargeTime = function () {
    let battery = +document.getElementById("battery").value;
    let charger = +document.getElementById("charger").value;

    let time = battery / charger;

    document.getElementById("timeResult").innerHTML =
      `<b>Charging Time:</b> ${time.toFixed(2)} hours`;
  };

  return div;
}
