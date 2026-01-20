export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Capital Gains Tax Calculator</h3>

    <label>Profit Amount (₹)</label>
    <input type="number" id="gainAmount">

    <label>Tax Rate (%)</label>
    <input type="number" id="gainRate">

    <button onclick="calcCG()">Calculate</button>
    <p id="cgResult"></p>
  `;

  window.calcCG = function () {
    let gain = parseFloat(document.getElementById("gainAmount").value);
    let rate = parseFloat(document.getElementById("gainRate").value);

    let tax = (gain * rate) / 100;

    document.getElementById("cgResult").innerHTML =
      `<b>Capital Gains Tax:</b> ₹${tax.toFixed(2)}`;
  };

  return div;
}
