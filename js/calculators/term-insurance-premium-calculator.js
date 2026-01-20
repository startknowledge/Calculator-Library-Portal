export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Insurance Premium Calculator</h3>

    <label>Sum Assured (₹)</label>
    <input type="number" id="sum">

    <label>Premium Rate (%)</label>
    <input type="number" id="rate">

    <button onclick="calcPremium()">Calculate</button>
    <p id="premiumResult"></p>
  `;

  window.calcPremium = () => {
    premiumResult.innerText =
      "Annual Premium: ₹" +
      ((sum.value * rate.value) / 100).toFixed(2);
  };

  return div;
}
