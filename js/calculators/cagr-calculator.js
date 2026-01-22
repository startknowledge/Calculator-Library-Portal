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
    <p id="cagrResult"></p><br>
    <p><u>Explanation about CAGR</u> :</p>
    <p>CAGR (Compound Annual Growth Rate) is a business and investing term that describes the steady rate at which an investment would have grown if it had grown at a steady rate each year. It is a useful measure for comparing the performance of different investments over time.</p>
    <p>The formula to calculate CAGR is:</p>
    <p><b>CAGR = (Final Value / Initial Value)^(1 / Time Period) - 1</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>Initial Value</b> is the starting value of the investment.</li>
      <li><b>Final Value</b> is the ending value of the investment.</li>
      <li><b>Time Period</b> is the number of years over which the growth occurred.</li>
    </ul>
    <p>For example, if an investment starts at ₹100,000 and ends at ₹150,000 over 3 years, the CAGR would be calculated as follows:</p>
    <p>CAGR = (₹150,000 / ₹100,000)^(1/3) - 1 = 1.5^(1/3) - 1 ≈ 14.47%</p>
    <p>This means the investment grew at an average annual rate of approximately 14.47% over the 3-year period.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of CAGR. For specific financial assessments, please consult a qualified financial professional.</p>
    <br>
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
