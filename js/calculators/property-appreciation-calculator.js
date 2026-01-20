export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Property Appreciation Calculator</h3>

    <label>Current Property Value (₹)</label>
    <input id="pv" value="5000000">

    <label>Annual Appreciation Rate (%)</label>
    <input id="rate" value="8">

    <label>Years</label>
    <input id="yrs" value="10">

    <button onclick="calcPA()">Calculate</button>
    <p id="paResult"></p>
  `;

  window.calcPA = function () {
    let pv = +document.getElementById("pv").value;
    let rate = +document.getElementById("rate").value / 100;
    let yrs = +document.getElementById("yrs").value;

    let value = pv * Math.pow(1 + rate, yrs);

    document.getElementById("paResult").innerHTML =
      `<b>Future Property Value:</b> ₹${value.toFixed(0)}`;
  };

  return div;
}
