export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Yearly Deposit (₹):</label>
    <input type="number" id="ppfP">

    <label>Interest Rate (%):</label>
    <input type="number" id="ppfR" value="7.1">

    <label>Time (Years):</label>
    <input type="number" id="ppfT" value="15">

    <button id="ppfBtn">Calculate</button>
    <h3 id="ppfResult"></h3>
  `;

  div.querySelector("#ppfBtn").onclick = () => {
    let P = parseFloat(document.getElementById("ppfP").value);
    let R = parseFloat(document.getElementById("ppfR").value) / 100;
    let T = parseFloat(document.getElementById("ppfT").value);

    if (!P || !R || !T) {
      document.getElementById("ppfResult").innerHTML = "Enter valid values!";
      return;
    }

    let maturity = P * ((Math.pow(1 + R, T) - 1) / R);
    let depositTotal = P * T;
    let interest = maturity - depositTotal;

    document.getElementById("ppfResult").innerHTML =
      `Total Deposit: ₹${depositTotal}<br>
       Interest Earned: ₹${interest.toFixed(2)}<br>
       Maturity Amount: ₹${maturity.toFixed(2)}`;
  };

  return div;
}
