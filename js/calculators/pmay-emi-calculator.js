export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Loan Amount (₹)</label>
    <input type="number" id="loan">

    <label>Years</label>
    <input type="number" id="years">

    <button onclick="calcPMAYEMI()">Calculate</button>
    <p id="emiResult"></p>
  `;

  window.calcPMAYEMI = function () {
    let loan = parseFloat(document.getElementById("loan").value);
    let years = parseFloat(document.getElementById("years").value);

    let emi = loan / (years * 12);

    document.getElementById("emiResult").innerHTML =
      `<b>Approx EMI:</b> ₹${emi.toFixed(2)}`;
  };

  return div;
}
