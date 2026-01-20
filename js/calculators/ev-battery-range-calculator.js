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
