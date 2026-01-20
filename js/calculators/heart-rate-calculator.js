export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Age</label>
    <input id="hrAge">

    <button onclick="calcHR()">Calculate</button>
    <p id="hrResult"></p>
  `;

  window.calcHR = function () {
    let hr = 220 - hrAge.value;
    hrResult.innerHTML = `<b>Max Heart Rate:</b> ${hr} bpm`;
  };

  return div;
}
