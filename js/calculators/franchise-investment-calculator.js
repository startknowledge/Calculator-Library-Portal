export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Franchise Investment Calculator</h3>

    <label>Total Investment (₹)</label>
    <input id="inv" value="1000000">

    <label>Expected Monthly Profit (₹)</label>
    <input id="monthly" value="50000">

    <button onclick="calcFran()">Calculate</button>
    <p id="franResult"></p>
  `;

  window.calcFran = function () {
    let inv = +document.getElementById("inv").value;
    let monthly = +document.getElementById("monthly").value;

    let months = inv / monthly;

    document.getElementById("franResult").innerHTML =
      `<b>Payback Period:</b> ${months.toFixed(1)} months`;
  };

  return div;
}
