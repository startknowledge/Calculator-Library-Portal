export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Insurance Coverage Calculator</h3>

    <label>Annual Income (₹)</label>
    <input id="income">

    <label>Coverage Multiple (e.g. 10)</label>
    <input id="multi">

    <button onclick="calcCoverage()">Calculate</button>
    <p id="covResult"></p>
  `;

  window.calcCoverage = () => {
    covResult.innerText =
      "Recommended Coverage: ₹" + (income.value * multi.value).toFixed(2);
  };

  return div;
}
