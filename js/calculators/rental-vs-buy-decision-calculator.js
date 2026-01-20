export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rent vs Buy Calculator</h3>

    <label>Monthly Rent (₹)</label>
    <input id="rent" value="15000">

    <label>Property Price (₹)</label>
    <input id="price" value="5000000">

    <label>Home Loan Interest Rate (% per year)</label>
    <input id="rate" value="8.5">

    <label>Loan Tenure (Years)</label>
    <input id="years" value="20">

    <button onclick="calcRentBuy()">Calculate</button>
    <p id="rbResult"></p>
  `;

  window.calcRentBuy = function () {
    let rent = +document.getElementById("rent").value;
    let price = +document.getElementById("price").value;
    let rate = +document.getElementById("rate").value / 100 / 12;
    let years = +document.getElementById("years").value * 12;

    // EMI formula
    let emi =
      (price * rate * Math.pow(1 + rate, years)) /
      (Math.pow(1 + rate, years) - 1);

    let annualRent = rent * 12;
    let annualEMI = emi * 12;

    let decision =
      annualRent < annualEMI
        ? "👉 Renting is financially better"
        : "👉 Buying is financially better";

    document.getElementById("rbResult").innerHTML = `
      <b>Monthly EMI:</b> ₹${emi.toFixed(0)}<br>
      <b>Annual Rent:</b> ₹${annualRent.toFixed(0)}<br>
      <b>Annual EMI:</b> ₹${annualEMI.toFixed(0)}<br><br>
      <b>Decision:</b> ${decision}
    `;
  };

  return div;
}
