export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>EV Charging Cost Calculator</h3>

    <table class="load-table">
      <tr>
        <th>Parameter</th>
        <th>Value</th>
      </tr>

      <tr>
        <td>Battery Capacity (kWh)</td>
        <td><input type="number" id="battery" value="40"></td>
      </tr>

      <tr>
        <td>Electricity Cost (₹/unit)</td>
        <td><input type="number" id="rate" value="8"></td>
      </tr>

      <tr>
        <td>Charging Efficiency (%)</td>
        <td><input type="number" id="eff" value="90"></td>
      </tr>
    </table>

    <button onclick="calcEV()">Calculate</button>

    <p id="evResult"></p>
    <br>
    <p><u>Explanation about EV Charging Cost Calculator</u> :</p>
    <p>The EV Charging Cost Calculator is a practical tool designed to help electric vehicle (EV) owners estimate the cost of charging their vehicle's battery. By inputting the battery capacity, electricity cost per unit, and charging efficiency, users can quickly calculate the total cost associated with charging their EV.</p>
    <p>The calculator uses the formula: Charging Cost = (Battery Capacity / Charging Efficiency) * Electricity Cost. This formula accounts for the actual energy consumed during the charging process, considering that not all the energy drawn from the grid is effectively stored in the battery due to efficiency losses.</p>
    <p>To use the calculator, simply enter the battery capacity in kilowatt-hours (kWh), the electricity cost in your local currency per unit (kWh), and the charging efficiency as a percentage. After clicking the "Calculate" button, the tool will compute and display both the total units of electricity consumed and the overall charging cost.</p>
    <p>This calculator is particularly useful for EV owners, prospective buyers, and anyone interested in understanding the financial aspects of electric vehicle ownership. By knowing the charging costs, users can better plan their budgets and make informed decisions about their EV usage.</p>
    <p>In summary, the EV Charging Cost Calculator is a valuable resource for anyone interested in electric vehicles, providing clarity on charging expenses and aiding in effective financial planning.</p>  
    <p><b>Note:</b> This calculator provides an estimate of charging costs based on the inputs provided and assumes average charging conditions. Actual costs may vary depending on factors such as electricity rates, charging habits, and vehicle specifications.</p>
    <p>For personalized advice and detailed cost analysis, consider consulting with an automotive expert or EV specialist.</p> 
    <p>Happy Calculating!</p> 
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified automotive professional for critical vehicle performance decisions.</p>
    <br>

  `;

  window.calcEV = function () {
    let battery = +document.getElementById("battery").value;
    let rate = +document.getElementById("rate").value;
    let eff = +document.getElementById("eff").value / 100;

    if (!battery || !rate || !eff) {
      document.getElementById("evResult").innerHTML =
        "❌ Please enter valid values";
      return;
    }

    let unitsUsed = battery / eff;
    let cost = unitsUsed * rate;

    document.getElementById("evResult").innerHTML = `
      <b>Units Consumed:</b> ${unitsUsed.toFixed(2)} kWh<br>
      <b>Charging Cost:</b> ₹${cost.toFixed(2)}
    `;
  };

  return div;
}
