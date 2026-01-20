export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Number of Soldiers</label>
    <input type="number" id="soldierCount">

    <label>Ration per Soldier (kg per day)</label>
    <input type="number" id="rationPer">

    <label>Number of Days</label>
    <input type="number" id="rationDays">

    <button onclick="calcRation()">Calculate</button>
    <p id="rationResult"></p>
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
