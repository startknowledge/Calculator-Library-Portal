export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Customer Lifetime Value (LTV)</h3>
    <small>Formula: APV × Frequency × Lifespan</small><br><br>

    <label>Average Purchase Value (₹)</label>
    <input id="apv" value="1500">

    <label>Purchase Frequency / Year</label>
    <input id="freq" value="5">

    <label>Customer Lifespan (Years)</label>
    <input id="life" value="4">

    <button onclick="calcLTV()">Calculate</button>
    <p id="ltvResult"></p>
  `;

  window.calcLTV = function () {
    let apv = +document.getElementById("apv").value;
    let freq = +document.getElementById("freq").value;
    let life = +document.getElementById("life").value;

    let ltv = apv * freq * life;

    document.getElementById("ltvResult").innerHTML =
      `<b>Customer Lifetime Value:</b> ₹${ltv.toFixed(2)}`;
  };

  return div;
}
