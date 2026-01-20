export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <h3>Logarithm Calculator (log base 10)</h3>
    <label>Number</label>
    <input id="num">

    <button onclick="calcLog()">Calculate</button>
    <p id="logResult"></p>
  `;

  window.calcLog = function () {
    logResult.innerHTML =
      `<b>log10:</b> ${Math.log10(num.value).toFixed(4)}`;
  };

  return div;
}
