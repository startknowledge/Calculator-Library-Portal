export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>CGPA</label>
    <input type="number" id="cgpa">

    <button onclick="calcPercent()">Calculate</button>
    <p id="perResult"></p>
  `;

  window.calcPercent = function () {
    let percent = (cgpa.value * 9.5).toFixed(2);
    perResult.innerHTML = `<b>Percentage:</b> ${percent}%`;
  };

  return div;
}
