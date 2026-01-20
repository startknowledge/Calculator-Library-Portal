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
