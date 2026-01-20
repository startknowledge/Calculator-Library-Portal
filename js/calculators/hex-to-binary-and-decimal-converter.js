export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h2>Hex to Binary and Decimal Converter</h2>
    <label for="hexInput">Enter Hexadecimal Number:</label>
    <input type="text" id="hexInput" placeholder="e.g., 1A3F">
    <button id="convertBtn">Convert</button>
    <h3>Results:</h3>
    <p id="binaryResult">Binary: </p>
    <p id="decimalResult">Decimal: </p>
  `;
  const hexInput = div.querySelector("#hexInput");
    const convertBtn = div.querySelector("#convertBtn");
    const binaryResult = div.querySelector("#binaryResult");
    const decimalResult = div.querySelector("#decimalResult");
    convertBtn.addEventListener("click", () => {
    const hexStr = hexInput.value.trim();
    if (!/^[0-9a-fA-F]+$/.test(hexStr)) {
      alert("Please enter a valid hexadecimal number.");
      return;
    }
    const decimalValue = parseInt(hexStr, 16);
    const binaryValue = decimalValue.toString(2);
    binaryResult.textContent = `Binary: ${binaryValue}`;
    decimalResult.textContent = `Decimal: ${decimalValue}`;
  });
  return div;
}