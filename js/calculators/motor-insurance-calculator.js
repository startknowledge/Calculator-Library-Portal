export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Motor Insurance Premium Calculator</h3>

    <label>Insured Declared Value (IDV ₹):</label>
    <input type="number" id="motorIDV">

    <label>Premium Rate (%):</label>
    <input type="number" id="motorRate">

    <button onclick="calcMotorInsurance()">Calculate</button>

    <p id="motorResult"></p>
  `;

  window.calcMotorInsurance = function () {
    let idv = parseFloat(document.getElementById("motorIDV").value);
    let rate = parseFloat(document.getElementById("motorRate").value) / 100;

    let premium = idv * rate;

    document.getElementById("motorResult").innerHTML =
      `<b>Estimated Premium:</b> ₹${premium.toFixed(2)}`;
  };

  return div;
}
