export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Principal Amount (₹):</label>
    <input type="number" id="ciP">

    <label>Rate (% per year):</label>
    <input type="number" id="ciR">

    <label>Time (Years):</label>
    <input type="number" id="ciT">

    <label>Compounding:</label>
    <select id="ciN">
      <option value="1">Yearly</option>
      <option value="2">Half-Yearly</option>
      <option value="4">Quarterly</option>
      <option value="12">Monthly</option>
    </select>

    <button id="ciBtn">Calculate</button>
    <h3 id="ciResult"></h3>
  `;

  div.querySelector("#ciBtn").onclick = () => {
    let P = parseFloat(document.getElementById("ciP").value);
    let R = parseFloat(document.getElementById("ciR").value) / 100;
    let T = parseFloat(document.getElementById("ciT").value);
    let N = parseFloat(document.getElementById("ciN").value);

    if (!P || !R || !T || !N) {
      document.getElementById("ciResult").innerHTML = "Enter valid values!";
      return;
    }

    let amount = P * Math.pow(1 + R / N, N * T);
    let CI = amount - P;

    document.getElementById("ciResult").innerHTML =
      `Compound Interest: ₹${CI.toFixed(2)}<br>Total Amount: ₹${amount.toFixed(2)}`;
  };

  return div;
}
