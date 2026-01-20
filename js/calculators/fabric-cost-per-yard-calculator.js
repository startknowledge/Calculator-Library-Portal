export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fabric Cost per Yard Calculator</h3>

    <label>Cost per Meter (₹)</label>
    <input id="meterCost" value="180">

    <label>Total Meters</label>
    <input id="meters" value="40">

    <button onclick="calcYard()">Calculate</button>
    <p id="yardResult"></p>
  `;

  window.calcYard = function () {
    let cost = +document.getElementById("meterCost").value;
    let meters = +document.getElementById("meters").value;

    let yards = meters * 1.09361;

    document.getElementById("yardResult").innerHTML =
      `<b>Total Fabric Cost:</b> ₹${(cost * meters).toFixed(2)}<br>
       <b>Total Yards:</b> ${yards.toFixed(2)}`;
  };

  return div;
}
