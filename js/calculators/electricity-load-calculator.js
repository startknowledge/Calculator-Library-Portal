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
    <p><u>Explanation about Inverter Load Calculator</u> :</p>
    <p>The Inverter Load Calculator is a practical tool designed to help users estimate the total electrical load of their household appliances and recommend an appropriate inverter size. By inputting the quantity and wattage of various appliances, users can calculate the total wattage required to power their home during a power outage.</p>
    <p>To use the calculator, simply enter the number of units and wattage for each appliance listed in the table. After clicking the "Calculate Load" button, the tool will compute and display the total load in watts as well as a recommended inverter size, which is typically 25% higher than the total load to ensure efficient performance.</p>
    <p>This calculator is particularly useful for homeowners and businesses looking to invest in an inverter system. By understanding their total load requirements, users can make informed decisions about the size and capacity of the inverter needed to meet their energy needs during power interruptions.</p>
    <p>In summary, the Inverter Load Calculator is a valuable resource for anyone considering an inverter purchase, providing clarity on load requirements and aiding in effective energy planning.</p> 
    <p><b>Note:</b> This calculator provides an estimate of the inverter load based on the inputs provided and assumes standard operating conditions for the appliances listed.</p>
    <p>For personalized advice and detailed inverter options, consider consulting with a professional electrician or inverter supplier.</p>
    <p>Happy Calculating!</p> 
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a professional for critical electrical decisions.</p>
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
