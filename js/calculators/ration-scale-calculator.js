export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Military Ration Requirement Calculator</h3>

    <label>Number of Soldiers</label>
    <input type="number" id="soldierCount">

    <label>Ration per Soldier (kg per day)</label>
    <input type="number" id="rationPer">

    <label>Number of Days</label>
    <input type="number" id="rationDays">

    <button onclick="calcRation()">Calculate</button>
    <p id="rationResult"></p>

    <h4>Explanation:</h4>
    <p>
      This calculator estimates the total quantity of ration required
      based on the number of soldiers, daily ration per soldier,
      and the total duration in days.
    </p>

    <h4>Formula:</h4>
    <p>
      Total Ration (kg) = Soldiers × Ration per Day × Number of Days
    </p>

    <h4>Reference:</h4>
    <p>
      Official ration scale details can be checked here:<br>
      <a href="https://bnrationscale.startknowledge.in" target="_blank" rel="noopener">
        https://bnrationscale.startknowledge.in
      </a>
    </p>

    <h4>Disclaimer:</h4>
    <p>
      This calculator provides an estimated value for planning purposes only.
      Actual ration entitlement may vary based on official military guidelines.
    </p>
  `;

  window.calcRation = function () {
    let count = parseFloat(document.getElementById("soldierCount").value);
    let rationPerDay = parseFloat(document.getElementById("rationPer").value);
    let days = parseFloat(document.getElementById("rationDays").value);

    if (isNaN(count) || isNaN(rationPerDay) || isNaN(days)) {
      document.getElementById("rationResult").innerHTML =
        "<b>Please enter all values</b>";
      return;
    }

    let total = count * rationPerDay * days;

    document.getElementById("rationResult").innerHTML =
      `<b>Total Ration Required:</b> ${total.toFixed(2)} kg<br>
       <small>(${count} soldiers × ${rationPerDay} kg × ${days} days)</small>`;
  };

  return div;
}
