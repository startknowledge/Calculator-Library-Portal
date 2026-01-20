export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Capital Appreciation Calculator</h3>

    <label>Initial Property Value (₹)</label>
    <input type="number" id="initial" value="2000000">

    <label>Annual Appreciation Rate (%)</label>
    <input type="number" id="rate" value="8">

    <label>Investment Period (Years)</label>
    <input type="number" id="years" value="10">

    <button onclick="calcCapital()">Calculate</button>

    <p id="capResult"></p>
  `;

  window.calcCapital = function () {
    let initial =
      +document.getElementById("initial").value;

    let rate =
      +document.getElementById("rate").value / 100;

    let years =
      +document.getElementById("years").value;

    let finalValue =
      initial * Math.pow(1 + rate, years);

    let gain = finalValue - initial;

    document.getElementById("capResult").innerHTML = `
      <b>Final Property Value:</b> ₹${finalValue.toFixed(2)}<br>
      <b>Total Capital Gain:</b> ₹${gain.toFixed(2)}
    `;
  };

  return div;
}
