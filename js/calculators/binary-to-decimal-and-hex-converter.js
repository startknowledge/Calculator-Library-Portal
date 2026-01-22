export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Binary to Decimal and Hex Converter</h2>
    <label for="binaryInput">Enter Binary Number:</label>
    <input type="text" id="binaryInput" placeholder="e.g., 1010">
    <button id="convertBtn">Convert</button>
    <h3>Results:</h3>
    <p id="decimalResult">Decimal: </p>
    <p id="hexResult">Hexadecimal: </p><br>
    <p><u>Explanation about Binary to Decimal and Hexadecimal Conversion</u> :</p>
    <p>Binary, decimal, and hexadecimal are different numeral systems used to represent numbers. The binary system (base-2) uses only two digits, 0 and 1, while the decimal system (base-10) uses ten digits (0-9), and the hexadecimal system (base-16) uses sixteen symbols (0-9 and A-F).</p>
    <p>To convert a binary number to decimal, each digit is multiplied by 2 raised to the power of its position index (starting from 0 on the right) and then summed up. For example, the binary number 1010 can be converted to decimal as follows:</p>
    <p>1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10 (decimal)</p>
    <p>To convert a binary number to hexadecimal, the binary number is first grouped into sets of four digits (starting from the right). Each group is then converted to its corresponding hexadecimal value. For example, the binary number 1010 can be grouped as 1010, which corresponds to A in hexadecimal.</p>
    <p>Thus, the binary number 1010 is equal to 10 in decimal and A in hexadecimal.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of numeral system conversions. For specific applications, please consult a qualified professional or refer to official technical resources.</p>
    <br>

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