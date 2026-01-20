export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Expense Ratio Calculator</h3>

    <label>Total Expenses (₹)</label>
    <input id="exp" value="30000">

    <label>Total Income (₹)</label>
    <input id="inc" value="100000">

    <button onclick="calcER()">Calculate</button>
    <p id="erResult"></p>
  `;

  window.calcER = function () {
    let exp = +document.getElementById("exp").value;
    let inc = +document.getElementById("inc").value;

    let ratio = (exp / inc) * 100;

    erResult.innerHTML =
      `<b>Expense Ratio:</b> ${ratio.toFixed(2)} %`;
  };

  return div;
}
