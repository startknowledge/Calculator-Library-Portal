export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Percentage</label>
    <input type="number" id="schPer">

    <label>Income (₹)</label>
    <input type="number" id="income">

    <button onclick="checkScholar()">Check</button>
    <p id="schResult"></p>
  `;

  window.checkScholar = function () {
    schResult.innerHTML =
      schPer.value >= 75 && income.value <= 250000
        ? "<b>Eligible for Scholarship</b>"
        : "<b>Not Eligible</b>";
  };

  return div;
}
