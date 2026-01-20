export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Sales Conversion Rate Calculator</h3>
    <h4>Conversion Rate (%) = (Sales ÷ Leads) × 100</h4><br>

    <label>Total Leads</label>
    <input id="leads" value="500">

    <label>Successful Sales</label>
    <input id="sales" value="50">

    <button onclick="calcConversion()">Calculate</button>
    <p id="conversionResult"></p>
  `;

  window.calcConversion = function () {
    let leads = +document.getElementById("leads").value;
    let sales = +document.getElementById("sales").value;

    let rate = (sales / leads) * 100;

    document.getElementById("conversionResult").innerHTML =
      `<b>Conversion Rate:</b> ${rate.toFixed(2)} %`;
  };

  return div;
}
