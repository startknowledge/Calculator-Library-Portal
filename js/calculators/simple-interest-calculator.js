export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Principal Amount (₹):</label>
    <input type="number" id="siP">

    <label>Rate (% per year):</label>
    <input type="number" id="siR">

    <label>Time (Years):</label>
    <input type="number" id="siT">

    <button id="siBtn">Calculate</button>
    <h3 id="siResult"></h3>
  `;

  div.querySelector("#siBtn").onclick = () => {
    let P = parseFloat(document.getElementById("siP").value);
    let R = parseFloat(document.getElementById("siR").value);
    let T = parseFloat(document.getElementById("siT").value);

    if (!P || !R || !T) {
      document.getElementById("siResult").innerHTML = "Enter valid values!";
      return;
    }

    let SI = (P * R * T) / 100;
    let total = P + SI;

    document.getElementById("siResult").innerHTML =
      `Simple Interest: ₹${SI}<br>Total Amount: ₹${total}`;
  };

  return div;
}
