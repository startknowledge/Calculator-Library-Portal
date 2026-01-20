export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Annual Income (₹)</label>
    <input type="number" id="income">

    <button onclick="calcPMAY()">Check</button>
    <p id="pmayResult"></p>
  `;

  window.calcPMAY = function () {
    let income = parseFloat(document.getElementById("income").value);

    let eligible = income <= 600000 ? "Eligible" : "Not Eligible";

    document.getElementById("pmayResult").innerHTML =
      `<b>Status:</b> ${eligible}`;
  };

  return div;
}
