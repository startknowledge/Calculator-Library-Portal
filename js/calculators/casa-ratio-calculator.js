export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>CASA Ratio Calculator</h3>

    <div class="form-group">
      <label>CASA Deposits (₹)</label>
      <input type="number" id="casa">
    </div>

    <div class="form-group">
      <label>Total Deposits (₹)</label>
      <input type="number" id="total">
    </div>

    <button onclick="calcCASA()">Calculate</button>
    <p id="casaResult"></p>
  `;

  window.calcCASA = () => {
    casaResult.innerText =
      "CASA Ratio: " +
      ((casa.value / total.value) * 100).toFixed(2) +
      " %";
  };

  return div;
};
