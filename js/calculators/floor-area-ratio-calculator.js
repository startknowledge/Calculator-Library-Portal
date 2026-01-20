export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Floor Area Ratio (FAR) Calculator<br> FAR = Total Built-up Area / Plot Area</h3>

    <label>Total Built-up Area (sq.ft)</label>
    <input id="built" value="4000">

    <label>Plot Area (sq.ft)</label>
    <input id="plot" value="2000">

    <button onclick="calcFAR()">Calculate</button>
    <p id="farResult"></p>
  `;

  window.calcFAR = function () {
    let built = +document.getElementById("built").value;
    let plot = +document.getElementById("plot").value;

    let far = built / plot;

    document.getElementById("farResult").innerHTML =
      `<b>FAR Value:</b> ${far.toFixed(2)}`;
  };

  return div;
}
