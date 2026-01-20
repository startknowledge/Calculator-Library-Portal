export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>NPA Percentage Calculator</h3>

    <div class="form-group">
      <label>Total NPAs (₹)</label>
      <input type="number" id="npa">
    </div>

    <div class="form-group">
      <label>Total Advances (₹)</label>
      <input type="number" id="adv">
    </div>

    <button onclick="calcNPA()">Calculate</button>
    <p id="npaResult"></p>
  `;

  window.calcNPA = () => {
    npaResult.innerText =
      "NPA Percentage: " +
      ((npa.value / adv.value) * 100).toFixed(2) +
      " %";
  };

  return div;
};
