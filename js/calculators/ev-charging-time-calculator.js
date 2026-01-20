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
