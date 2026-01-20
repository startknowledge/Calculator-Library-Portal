export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Home Insurance Calculator</h3>
    <p><b>Formula:</b> Property Value × Premium Rate (%)</p>

    <label>Property Value (₹)</label>
    <input type="number" id="prop" value="4000000">

    <label>Premium Rate (%)</label>
    <input type="number" id="rate" value="0.3">

    <button onclick="calcInsurance()">Calculate</button>
    <p id="insResult"></p>
  `;

  window.calcInsurance = function () {
    let propValue =
      +document.getElementById("prop").value;

    let rateValue =
      +document.getElementById("rate").value / 100;

    let premium = propValue * rateValue;

    document.getElementById("insResult").innerHTML =
      `<b>Annual Insurance Premium:</b> ₹${premium.toFixed(2)}`;
  };

  return div;
}
