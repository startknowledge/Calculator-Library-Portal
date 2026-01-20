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
