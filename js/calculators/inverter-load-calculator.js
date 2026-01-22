export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Inverter Load Calculator</h3>

    <table class="load-table">
      <thead>
        <tr>
          <th>Appliance</th>
          <th>Quantity</th>
          <th>Watt (per unit)</th>
          <th>Total Watt</th>
        </tr>
      </thead>
      <tbody id="loadBody">
        ${row("Fan", 1, 75)}
        ${row("LED Bulb", 2, 10)}
        ${row("Tube Light", 1, 40)}
        ${row("TV", 1, 120)}
        ${row("Washing Machine", 1, 500)}
        ${row("Laptop / Computer", 1, 150)}
        ${row("Iron (Press)", 1, 1000)}
        ${row("Misc Load", 1, 200)}
      </tbody>
    </table>

    <button onclick="calcInverterLoad()">Calculate Load</button>

    <p id="loadResult"></p>

    <style>
      .load-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 12px;
      }
      .load-table th, .load-table td {
        border: 1px solid #ccc;
        padding: 6px;
        text-align: center;
      }
      .load-table th {
        background: #f0f4ff;
      }
      .load-table input {
        width: 90%;
        padding: 4px;
        text-align: center;
      }
    </style>
    <br>
    <p>The Inverter Load Calculator helps you determine the total electrical load of your appliances and recommends an appropriate inverter size based on that load. By entering the quantity and wattage of each appliance, users can quickly calculate the total load in watts and the recommended inverter capacity in volt-amperes (VA).</p>
    <p>This calculator is useful for individuals and businesses looking to ensure they have an adequate inverter to support their electrical load during power outages.</p>
    <p>Ensure that the appliance quantities and wattage inputs are accurate to get a reliable load and inverter size estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the quantity and wattage for each appliance in the respective fields. Click the "Calculate Load" button to see the total load and recommended inverter size displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Appliance:</b> The name of the appliance.</li>
      <li><b>Quantity:</b> The number of units of the appliance.</li>
      <li><b>Watt (per unit):</b> The power consumption in watts for one unit of the appliance.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Total Load (Watts):</b> The total electrical load in watts.</li>
      <li><b>Recommended Inverter (VA):</b> The recommended inverter size in volt-amperes.</li>
    </ul>
    <p><b>Note:</b> Ensure that the appliance quantities and wattage inputs are accurate to get a reliable load and inverter size estimate.</p>
    <p><b>Example:</b> For a total load of 1000 watts, the recommended inverter size would be 1250 VA.</p>
    <p><b>Formula:</b> Total Load (Watts) = Sum of (Quantity × Watt per Unit)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual inverter requirements may vary based on additional factors such as power factor, surge loads, and specific device characteristics.</p>
    <br>

  `;

  window.calcInverterLoad = function () {
    let rows = document.querySelectorAll(".load-row");
    let total = 0;

    rows.forEach(r => {
      let qty = +r.querySelector(".qty").value || 0;
      let watt = +r.querySelector(".watt").value || 0;
      let rowTotal = qty * watt;

      r.querySelector(".rowTotal").innerText = rowTotal;
      total += rowTotal;
    });

    document.getElementById("loadResult").innerHTML = `
      <b>Total Load:</b> ${total} Watts<br>
      <b>Recommended Inverter:</b> ${(total * 1.25).toFixed(0)} VA
    `;
  };

  return div;
}

/* ---------- Row Generator ---------- */
function row(name, qty, watt) {
  return `
    <tr class="load-row">
      <td><input value="${name}"></td>
      <td><input type="number" class="qty" value="${qty}"></td>
      <td><input type="number" class="watt" value="${watt}"></td>
      <td class="rowTotal">0</td>
    </tr>
  `;
}
