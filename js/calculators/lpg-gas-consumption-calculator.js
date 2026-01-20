export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Gas Used per Day (kg)</label>
    <input type="number" id="dailyGas">

    <label>Number of Days</label>
    <input type="number" id="gasDays">

    <button onclick="calcGas()">Calculate</button>
    <p id="gasResult"></p>
  `;

  window.calcGas = function () {
    let total = +dailyGas.value * +gasDays.value;

    gasResult.innerHTML =
      `<b>Total LPG Consumption:</b> ${total.toFixed(2)} kg`;
  };

  return div;
}
