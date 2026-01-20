export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Loan Amount (₹)</label>
    <input type="number" id="loanAmount">

    <label>Annual Interest Rate (%)</label>
    <input type="number" id="interestRate">

    <label>Loan Tenure (Years)</label>
    <input type="number" id="loanYears">

    <button onclick="calcStudentEMI()">Calculate</button>
    <p id="emiResult"></p>
  `;

  window.calcStudentEMI = function () {
    let P = +document.getElementById("loanAmount").value;
    let annualRate = +document.getElementById("interestRate").value;
    let years = +document.getElementById("loanYears").value;

    let r = annualRate / 100 / 12;   // monthly interest
    let n = years * 12;              // total months

    let emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    document.getElementById("emiResult").innerHTML =
      `<b>Monthly EMI:</b> ₹${emi.toFixed(2)}`;
  };

  return div;
}
