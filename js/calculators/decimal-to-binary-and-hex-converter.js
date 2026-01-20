export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Decimal Number</label>

    <input type="text" id="decimalInput" placeholder="Enter decimal number">

    <button onclick="convertDecimalToBinaryAndHex()">Convert</button>
    <p id="binaryResult"></p>
    <p id="hexResult"></p>
  `;
  window.convertDecimalToBinaryAndHex = function () {
    const decimalInput = document.getElementById("decimalInput").value;
    const decimalNumber = parseInt(decimalInput, 10);
    if (isNaN(decimalNumber)) {
      alert("Please enter a valid decimal number.");
      return;
    }
    const binaryResult = decimalNumber.toString(2);
    const hexResult = decimalNumber.toString(16).toUpperCase();
    document.getElementById("binaryResult").innerText = `Binary: ${binaryResult}`;
    document.getElementById("hexResult").innerText = `Hexadecimal: ${hexResult}`;
  };
  

  return div;
}