export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Your Percentage</label>
    <input type="number" id="yourPer">

    <label>Cutoff Percentage</label>
    <input type="number" id="cutoff">

    <button onclick="checkCutoff()">Check</button>
    <p id="cutResult"></p>
  `;

  window.checkCutoff = function () {
    cutResult.innerHTML =
      yourPer.value >= cutoff.value
        ? "<b>Eligible</b>"
        : "<b>Not Eligible</b>";
  };

  return div;
}
