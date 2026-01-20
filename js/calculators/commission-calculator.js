export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Commission Calculator</h3>

    <label>Sales Amount (₹)</label>
    <input type="number" id="saleAmt" value="100000">

    <label>Commission Rate (%)</label>
    <input type="number" id="comRate" value="5">

    <button onclick="calcCommission()">Calculate</button>
    <p id="comResult"></p>
  `;

  window.calcCommission = function () {
    let sales = +document.getElementById("saleAmt").value;
    let rate = +document.getElementById("comRate").value;

    let commission = (sales * rate) / 100;

    document.getElementById("comResult").innerHTML =
      `<b>Commission Earned:</b> ₹${commission.toFixed(2)}`;
  };

  return div;
}
