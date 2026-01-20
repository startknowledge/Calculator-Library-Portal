export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Late Filing Penalty</h3>

    <label>Days Late</label>
    <input type="number" id="lateDays">

    <button onclick="calcPenalty()">Calculate</button>
    <p id="penaltyResult"></p>
  `;

  window.calcPenalty = function () {
    let days = parseFloat(document.getElementById("lateDays").value);
    let penalty = days > 0 ? 5000 : 0;

    document.getElementById("penaltyResult").innerHTML =
      `<b>Penalty:</b> ₹${penalty}`;
  };

  return div;
}
