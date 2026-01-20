export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>TDS Calculator</h3>

    <label>Payment Amount (₹)</label>
    <input type="number" id="tdsAmount">

    <label>TDS Rate (%)</label>
    <input type="number" id="tdsRate">

    <button onclick="calcTDS()">Calculate</button>
    <p id="tdsResult"></p>
  `;

  window.calcTDS = function () {
    let amount = parseFloat(document.getElementById("tdsAmount").value);
    let rate = parseFloat(document.getElementById("tdsRate").value);

    let tds = (amount * rate) / 100;

    document.getElementById("tdsResult").innerHTML =
      `<b>TDS Deducted:</b> ₹${tds.toFixed(2)}`;
  };

  return div;
}
