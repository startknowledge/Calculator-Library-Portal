export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Binary to Decimal and Hex Converter</h2>
    <label for="binaryInput">Enter Binary Number:</label>
    <input type="text" id="binaryInput" placeholder="e.g., 1010">
    <button id="convertBtn">Convert</button>
    <h3>Results:</h3>
    <p id="decimalResult">Decimal: </p>
    <p id="hexResult">Hexadecimal: </p>
  `;
  const binaryInput = div.querySelector("#binaryInput");
  const convertBtn = div.querySelector("#convertBtn");
  const decimalResult = div.querySelector("#decimalResult");
  const hexResult = div.querySelector("#hexResult");
  convertBtn.addEventListener("click", () => {
    const binaryStr = binaryInput.value.trim();
    if (!/^[01]+$/.test(binaryStr)) {
      alert("Please enter a valid binary number.");
      return;
    }
    const decimalValue = parseInt(binaryStr, 2);
    const hexValue = decimalValue.toString(16).toUpperCase();
    decimalResult.textContent = `Decimal: ${decimalValue}`;
    hexResult.textContent = `Hexadecimal: ${hexValue}`;
  });
  return div;
}