export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Car Insurance IDV Calculator</h3>

    <label>Ex-Showroom Price (₹):</label>
    <input type="number" id="carPrice">

    <label>Car Age (Years):</label>
    <input type="number" id="carAge">

    <button onclick="calcIDV()">Calculate</button>

    <p id="idvResult"></p>

    <table border="1">
    <tr>
  <th>Car Age</th>
  <th>Depreciation</th>
</tr>

<tr>
  <td>&lt; 6 months</td>
  <td>5%</td>
</tr>

<tr>
  <td>6 months – 1 year</td>
  <td>15%</td>
</tr>

<tr>
  <td>1 – 2 years</td>
  <td>20%</td>
</tr>

<tr>
  <td>2 – 3 years</td>
  <td>30%</td>
</tr>

<tr>
  <td>3 – 4 years</td>
  <td>40%</td>
</tr>

<tr>
  <td>4 – 5 years</td>
  <td>50%</td>
</tr></table>

  `;

  window.calcIDV = function () {
    let price = parseFloat(document.getElementById("carPrice").value);
    let age = parseFloat(document.getElementById("carAge").value);

    let depreciation = 0;

    if (age <= 0.5) depreciation = 0.05;
    else if (age <= 1) depreciation = 0.15;
    else if (age <= 2) depreciation = 0.20;
    else if (age <= 3) depreciation = 0.30;
    else if (age <= 4) depreciation = 0.40;
    else depreciation = 0.50;

    let idv = price - (price * depreciation);

    document.getElementById("idvResult").innerHTML =
      `<b>IDV Amount:</b> ₹${idv.toFixed(2)}`;
  };

  return div;
}
