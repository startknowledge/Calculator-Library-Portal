export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Waist (cm)</label>
    <input id="waist">

    <label>Neck (cm)</label>
    <input id="neck">

    <label>Height (cm)</label>
    <input id="height">

    <button onclick="calcFat()">Calculate</button>
    <p id="fatResult"></p>
  `;

  window.calcFat = function () {
    let fat = 86.010 * Math.log10(waist.value - neck.value)
            - 70.041 * Math.log10(height.value) + 36.76;

    fatResult.innerHTML = `<b>Body Fat:</b> ${fat.toFixed(2)} %`;
  };

  return div;
}
