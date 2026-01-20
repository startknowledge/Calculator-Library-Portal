export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>LPG Connections</label>
    <input type="number" id="connections">

    <button onclick="calcUjjwala()">Calculate</button>
    <p id="ujjwalaResult"></p>
  `;

  window.calcUjjwala = function () {
    let c = parseFloat(document.getElementById("connections").value);

    let subsidy = c * 1600;

    document.getElementById("ujjwalaResult").innerHTML =
      `<b>Total Subsidy:</b> ₹${subsidy}`;
  };

  return div;
}
