export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Customer Acquisition Cost (CAC)</h3>
    <h3>Marketing Cost / New Customers</h3><br>
    <label>Marketing Cost (₹)</label>
    <input id="cost" value="50000">

    <label>New Customers</label>
    <input id="cust" value="100">

    <button onclick="calcCAC()">Calculate</button>
    <p id="cacResult"></p>
  `;

  window.calcCAC = function () {
    let cost = +document.getElementById("cost").value;
    let cust = +document.getElementById("cust").value;

    let cac = cost / cust;

    cacResult.innerHTML =
      `<b>CAC:</b> ₹${cac.toFixed(2)}`;
  };

  return div;
}
