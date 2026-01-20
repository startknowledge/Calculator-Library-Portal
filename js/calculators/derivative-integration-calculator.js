export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Coefficient (ax²)</label>
    <input id="a">

    <button onclick="calcDeriv()">Calculate</button>
    <p id="derivResult"></p>
  `;

  window.calcDeriv = function () {
    derivResult.innerHTML = `<b>Derivative:</b> ${2*a.value}x`;
  };

  return div;
}
