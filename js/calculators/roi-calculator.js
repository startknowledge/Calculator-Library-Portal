export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>ROI Calculator</h3>

    <label>Investment Amount (₹)</label>
    <input id="invest" value="50000">

    <label>Return Amount (₹)</label>
    <input id="returnAmt" value="65000">

    <button onclick="calcROI()">Calculate</button>
    <p id="roiResult"></p>
  `;

  window.calcROI = function () {
    let i = +invest.value;
    let r = +returnAmt.value;

    let roi = ((r - i) / i) * 100;

    roiResult.innerHTML =
      `<b>ROI:</b> ${roi.toFixed(2)}%`;
  };

  return div;
}
