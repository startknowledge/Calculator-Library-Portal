export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>CAGR Calculator</h3>

    <div class="form-group">
      <label for="cagrStart">Initial Value (₹)</label>
      <input type="number" id="cagrStart">
    </div>

    <div class="form-group">
      <label for="cagrEnd">Final Value (₹)</label>
      <input type="number" id="cagrEnd">
    </div>

    <div class="form-group">
      <label for="cagrYears">Time Period (Years)</label>
      <input type="number" id="cagrYears">
    </div>

    <button onclick="calculateCAGRUI()">Calculate</button>
    <p id="cagrResult"></p>
  `;

  window.calculateCAGRUI = function () {
    let start = document.getElementById("cagrStart").value;
    let end = document.getElementById("cagrEnd").value;
    let years = document.getElementById("cagrYears").value;

    document.getElementById("cagrResult").innerText =
      "CAGR: " + calculateCAGR(start, end, years) + " %";
  };

  return div;
}

function calculateCAGR(startValue, endValue, years) {
  startValue = parseFloat(startValue);
  endValue = parseFloat(endValue);
  years = parseFloat(years);

  let cagr = Math.pow(endValue / startValue, 1 / years) - 1;
  return (cagr * 100).toFixed(2);
}
