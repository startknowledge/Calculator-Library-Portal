export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>EV vs Petrol Cost Comparison</h3>

    <table class="load-table">
      <tr><th>Parameter</th><th>Value</th></tr>

      <tr>
        <td>Daily Distance (km)</td>
        <td><input id="km" value="40"></td>
      </tr>

      <tr>
        <td>EV Consumption (Wh/km)</td>
        <td><input id="evCons" value="150"></td>
      </tr>

      <tr>
        <td>Electricity Cost (₹/unit)</td>
        <td><input id="unitCost" value="8"></td>
      </tr>

      <tr>
        <td>Petrol Mileage (km/l)</td>
        <td><input id="mileage" value="18"></td>
      </tr>

      <tr>
        <td>Petrol Price (₹/litre)</td>
        <td><input id="petrolRate" value="105"></td>
      </tr>
    </table>

    <button onclick="calcCompare()">Calculate</button>
    <p id="compareResult"></p>
    <br>
    <p><u>Explanation about EV vs Petrol Cost Comparison Calculator</u> :</p>
    <p>The EV vs Petrol Cost Comparison Calculator is a tool designed to help users compare the daily operating costs of electric vehicles (EVs) and petrol-powered vehicles. By inputting parameters such as daily distance traveled, EV consumption rate, electricity cost, petrol mileage, and petrol price, users can quickly calculate and compare the costs associated with each type of vehicle.</p>
    <p>The calculator uses the following formulas:</p>  
    <p>EV Daily Cost = (Daily Distance (km) * EV Consumption (Wh/km) / 1000) * Electricity Cost (₹/unit)</p>
    <p>Petrol Daily Cost = (Daily Distance (km) / Petrol Mileage (km/l)) * Petrol Price (₹/litre)</p>
    <p>To use the calculator, simply enter the required values in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the daily costs for both EVs and petrol vehicles, along with the potential savings when opting for an EV.</p>
    <p>This calculator is particularly useful for prospective vehicle buyers, current vehicle owners, and automotive enthusiasts who want to understand the cost implications of different vehicle types. By knowing the daily operating costs, users can make informed decisions about their vehicle choices and budget planning.</p>
    <p>In summary, the EV vs Petrol Cost Comparison Calculator is a valuable resource for anyone interested in vehicle ownership costs, providing clarity on daily expenses and aiding in effective financial planning.</p> 
    <p><b>Note:</b> This calculator provides an estimate of daily operating costs based on the inputs provided and assumes average driving conditions. Actual costs may vary depending on factors such as driving habits, vehicle condition, and fuel/electricity price fluctuations.</p> 
    <p>For personalized advice and detailed cost analysis, consider consulting with an automotive expert or financial advisor.</p> 
    <p>Happy Calculating!</p> 
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified automotive professional for critical vehicle performance decisions.</p>
    <br>
  `;

  window.calcCompare = function () {
    let km = +document.getElementById("km").value;
    let evCons = +document.getElementById("evCons").value / 1000;
    let unitCost = +document.getElementById("unitCost").value;
    let mileage = +document.getElementById("mileage").value;
    let petrolRate = +document.getElementById("petrolRate").value;

    let evCost = km * evCons * unitCost;
    let petrolCost = (km / mileage) * petrolRate;

    document.getElementById("compareResult").innerHTML = `
      <b>EV Daily Cost:</b> ₹${evCost.toFixed(2)}<br>
      <b>Petrol Daily Cost:</b> ₹${petrolCost.toFixed(2)}<br>
      <b>Daily Saving:</b> ₹${(petrolCost - evCost).toFixed(2)}
    `;
  };

  return div;
}
