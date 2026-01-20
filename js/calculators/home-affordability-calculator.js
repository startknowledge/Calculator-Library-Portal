export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Affordable Price ≈ (Monthly Income × 12 × 0.3) ÷ Interest Rate</h3>

    <label>Monthly Income (₹)</label>
    <input id="income" value="60000">

    <label>Interest Rate (%)</label>
    <input id="rate" value="8">

    <button onclick="calcAfford()">Calculate</button>
    <p id="affordResult"></p>
  `;

  window.calcAfford = function () {
    let income = +document.getElementById("income").value;
    let rate = +document.getElementById("rate").value / 100;

    let affordable = (income * 12 * 0.3) / rate;

    affordResult.innerHTML =
      `<b>Affordable Home Price:</b> ₹${affordable.toFixed(0)}`;
  };

  return div;
}
