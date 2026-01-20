export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>SMS / Voice Usage Calculator</h3>

    <label>Cost per SMS / Minute (₹)</label>
    <input id="rate" value="0.5">

    <label>Total Units Used</label>
    <input id="units" value="300">

    <button onclick="calcUsage()">Calculate</button>
    <p id="usageResult"></p>
  `;

  window.calcUsage = function () {
    let rate = +document.getElementById("rate").value;
    let units = +document.getElementById("units").value;

    document.getElementById("usageResult").innerHTML =
      `<b>Total Usage Cost:</b> ₹${(rate * units).toFixed(2)}`;
  };

  return div;
}
