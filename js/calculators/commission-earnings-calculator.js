export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Commission Earnings Calculator</h3>

    <label>Policy Premium (₹)</label>
    <input type="number" id="commPremium">

    <label>Commission Rate (%)</label>
    <input type="number" id="commRate">

    <button onclick="calcCommission()">Calculate</button>
    <p id="commResult"></p>
  `;

  window.calcCommission = function () {
    let premium = parseFloat(document.getElementById("commPremium").value);
    let rate = parseFloat(document.getElementById("commRate").value);

    let commission = (premium * rate) / 100;

    document.getElementById("commResult").innerHTML =
      `<b>Commission Earned:</b> ₹${commission.toFixed(2)}`;
  };

  return div;
}
