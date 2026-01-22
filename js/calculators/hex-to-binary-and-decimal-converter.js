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
    <br>
    <p>The Hex to Binary and Decimal Converter allows users to convert hexadecimal numbers into their binary and decimal equivalents. By entering a hexadecimal value, users can quickly obtain the corresponding binary and decimal representations.</p>
    <p>This calculator is useful for students, programmers, and engineers who work with different number systems. It aids in understanding data representation in computing and digital electronics.</p>
    <p><b>How to Use:</b> Enter a valid hexadecimal number in the input field and click the "Convert" button. The binary and decimal results will be displayed below.</p>
    <p></p>
    <p><b>Formula:</b> To convert hexadecimal to decimal, use: Decimal = Σ (Hex Digit × 16^Position). To convert decimal to binary, repeatedly divide the decimal number by 2 and record the remainders.</p>
    <p><b>Note:</b> Ensure that the hexadecimal input is valid, containing only digits (0-9) and letters (A-F).</p>
    <p><b>Example:</b> For a hexadecimal input of "1A3F", the binary output would be "0001101000111111" and the decimal output would be "6719".</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual conversions may vary based on specific implementations and rounding methods in different systems.</p>
    <br>
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