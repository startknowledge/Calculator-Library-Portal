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
