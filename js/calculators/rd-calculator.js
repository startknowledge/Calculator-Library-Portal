export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Monthly Deposit (₹):</label>
    <input type="number" id="rdP">

    <label>Interest Rate (%):</label>
    <input type="number" id="rdR">

    <label>Time (Years):</label>
    <input type="number" id="rdT">

    <button id="rdBtn">Calculate</button>
    <h3 id="rdResult"></h3>
  `;

  div.querySelector("#rdBtn").onclick = () => {
    let P = parseFloat(document.getElementById("rdP").value);
    let R = parseFloat(document.getElementById("rdR").value) / 100 / 12;
    let T = parseFloat(document.getElementById("rdT").value) * 12;

    if (!P || !R || !T) {
      document.getElementById("rdResult").innerHTML = "Enter valid values!";
      return;
    }

    let maturity = P * ((Math.pow(1 + R, T) - 1) / R);
    let depositTotal = P * T;
    let interest = maturity - depositTotal;

    document.getElementById("rdResult").innerHTML =
      `Total Deposit: ₹${depositTotal.toFixed(2)}<br>
       Interest: ₹${interest.toFixed(2)}<br>
       Maturity Amount: ₹${maturity.toFixed(2)}`;
  };

  return div;
}
