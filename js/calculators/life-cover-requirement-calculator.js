export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Life Cover Requirement</h3>

    <label>Annual Income (₹)</label>
    <input type="number" id="income">

    <label>Income Multiplier</label>
    <input type="number" id="multi">

    <button onclick="calcCover()">Calculate</button>
    <p id="coverResult"></p>
  `;

  window.calcCover = () => {
    coverResult.innerText =
      "Recommended Cover: ₹" + (income.value * multi.value);
  };

  return div;
}
