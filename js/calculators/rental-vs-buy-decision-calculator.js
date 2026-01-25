export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rent vs Buy Calculator</h3>

    <p>
      This Rent vs Buy Calculator helps you compare whether renting a home or
      buying a property using a home loan is financially more beneficial,
      based on rent, property price, interest rate, and loan tenure.
    </p>

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

    <hr>

    <h4>Explanation</h4>
    <p>
      Choosing between renting and buying a home is an important financial decision.
      Renting involves a recurring monthly expense, while buying requires paying
      a long-term loan (EMI) along with ownership benefits.
    </p>

    <h4>Formula</h4>
    <p>
      <b>EMI Formula:</b><br>
      EMI = [P × r × (1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> − 1]
    </p>
    <p>
      <b>Annual Rent = Monthly Rent × 12</b><br>
      <b>Annual EMI = Monthly EMI × 12</b>
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter your monthly house rent.<br>
      2. Enter the property price you plan to buy.<br>
      3. Enter the annual home loan interest rate.<br>
      4. Enter the loan tenure in years.<br>
      5. Click Calculate to compare renting vs buying.
    </p>

    <h4>Example</h4>
    <p>
      Monthly Rent = ₹15,000<br>
      Property Price = ₹50,00,000<br>
      Interest Rate = 8.5%<br>
      Loan Tenure = 20 years<br>
      The calculator compares annual rent with annual EMI and suggests
      whether renting or buying is financially better.
    </p>

    <h4>Note</h4>
    <p>
      This calculator compares only rent and EMI. Other factors such as property
      appreciation, maintenance cost, tax benefits, and lifestyle preferences
      are not included.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This tool provides an approximate financial comparison for educational
      purposes only. Actual financial decisions should consider personal goals,
      market conditions, and professional advice.
    </p>
  `;

  window.calcRentBuy = function () {
    let rent = parseFloat(document.getElementById("rent").value);
    let price = parseFloat(document.getElementById("price").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
    let years = parseFloat(document.getElementById("years").value) * 12;

    if (isNaN(rent) || isNaN(price) || isNaN(rate) || isNaN(years)) {
      document.getElementById("rbResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

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
