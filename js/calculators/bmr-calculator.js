export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Weight (kg)</label>
    <input id="bmrWeight">

    <label>Height (cm)</label>
    <input id="bmrHeight">

    <label>Age (years)</label>
    <input id="bmrAge">

    <button onclick="calcBMR()">Calculate</button>
    <p id="bmrResult"></p>
  `;

  window.calcBMR = function () {
    let bmr = 10*bmrWeight.value + 6.25*bmrHeight.value - 5*bmrAge.value + 5;
    bmrResult.innerHTML = `<b>BMR:</b> ${bmr.toFixed(0)} kcal/day`;
  };

  return div;
}
