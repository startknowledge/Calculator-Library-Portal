export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Deposit Amount (₹):</label>
    <input type="number" id="fdP">

    <label>Annual Interest Rate (%):</label>
    <input type="number" id="fdR">

    <label>Time (Years):</label>
    <input type="number" id="fdT">

    <button id="fdBtn">Calculate</button>
    <h3 id="fdResult"></h3>
  `;

  div.querySelector("#fdBtn").onclick = () => {
    let P = parseFloat(document.getElementById("fdP").value);
    let R = parseFloat(document.getElementById("fdR").value) / 100;
    let T = parseFloat(document.getElementById("fdT").value);

    if (!P || !R || !T) {
      document.getElementById("fdResult").innerHTML = "Enter valid values!";
      return;
    }

    let interest = P * Math.pow(1 + R / 4, 4 * T) - P;
    let total = P + interest;

    document.getElementById("fdResult").innerHTML =
      `FD Interest: ₹${interest.toFixed(2)}<br>Total Maturity: ₹${total.toFixed(2)}`;
  };

  return div;
}
