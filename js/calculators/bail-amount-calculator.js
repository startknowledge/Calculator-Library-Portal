export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Case Amount (₹)</label>
    <input type="number" id="caseAmount">

    <label>Bail Percentage (%)</label>
    <input type="number" id="bailPercent">

    <button onclick="calcBail()">Calculate</button>
    <p id="bailResult"></p>
  `;

  window.calcBail = function () {
    let amount = parseFloat(document.getElementById("caseAmount").value);
    let percent = parseFloat(document.getElementById("bailPercent").value);

    let bail = (amount * percent) / 100;

    document.getElementById("bailResult").innerHTML =
      `<b>Estimated Bail Amount:</b> ₹${bail.toFixed(2)}`;
  };

  return div;
}
