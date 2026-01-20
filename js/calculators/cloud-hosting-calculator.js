export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Cost = Monthly Cost × Months</h3>

    <label>Monthly Cost (₹)</label>
    <input id="cost" value="2500">

    <label>Duration (Months)</label>
    <input id="months" value="12">

    <button onclick="calcCloud()">Calculate</button>
    <p id="cloudResult"></p>
  `;

  window.calcCloud = function () {
    document.getElementById("cloudResult").innerHTML =
      `<b>Total Hosting Cost:</b> ₹${document.getElementById("cost").value * document.getElementById("months").value}`;
  };

  return div;
}
