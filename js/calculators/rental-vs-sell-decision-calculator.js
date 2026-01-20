export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rental vs Sell Decision Calculator</h3>

    <label>Property Market Value (₹)</label>
    <input id="value" value="5000000">

    <label>Monthly Rent (₹)</label>
    <input id="rent" value="25000">

    <label>Expected Annual Appreciation (%)</label>
    <input id="rate" value="6">

    <button onclick="calcRentSell()">Calculate</button>
    <p id="rsResult"></p>
  `;

  window.calcRentSell = function () {
    let value = +document.getElementById("value").value;
    let monthlyRent = +document.getElementById("rent").value;
    let rate = +document.getElementById("rate").value / 100;

    let annualRent = monthlyRent * 12;
    let annualAppreciation = value * rate;

    let decision =
      annualRent > annualAppreciation
        ? "RENTING is Better (Higher Cash Flow)"
        : "SELLING is Better (Higher Appreciation)";

    document.getElementById("rsResult").innerHTML = `
      <b>Annual Rent:</b> ₹${annualRent.toFixed(0)}<br>
      <b>Annual Appreciation:</b> ₹${annualAppreciation.toFixed(0)}<br>
      <b>Decision:</b> ${decision}
    `;
  };

  return div;
}
