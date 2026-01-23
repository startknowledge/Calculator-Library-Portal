export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Date:</label>
    <input type="date" id="julianDate">

    <button id="julianButton">Convert</button>
    <p id="julianResult"></p>
    <br>
    <p><b>Explanation:</b>  
    The Julian Date is a continuous count of days and fractions of a day since the start of the Julian Period, which began on January 1, 4713 BC (according to the Julian calendar).  
    This system removes complications caused by months, leap years, and calendar changes, making it extremely useful for precise time calculations.</p>
    <p><b>About This Calculator:</b>  
    The Julian Date Converter is a simple and reliable tool that converts a standard calendar date into its corresponding Julian Date value.  
    It is widely used in astronomy, satellite tracking, space missions, and historical research.</p>
    <p><b>How to Use the Calculator:</b></p>
    <p>
    1. Select a date using the date picker.<br>
    2. Click the <b>Convert</b> button.<br>
    3. The Julian Date will be displayed instantly below.
    </p>

    <p><b>Formula Used:</b></p>
    <p>Julian Date = (Unix Time in milliseconds ÷ 86,400,000) + 2,440,588</p>

    <p><b>Example:</b></p>
    <p>If the selected date is <b>January 1, 2000</b>, the calculator will convert it into its equivalent Julian Date value based on the standard astronomical formula.</p>

    <p><b>Outputs:</b></p>
    <p>
    • Julian Date (absolute day count)<br>
    • Useful for astronomical and scientific calculations
    </p>

    <p><b>Use Cases:</b></p>
    <p>• Astronomy and space science<br>
    • Satellite orbit calculations<br>
    • Historical date comparisons<br>
    • Scientific simulations</p>

    <p><b>Important Notes:</b></p>
    <p>• Julian Date is not the same as the Julian Calendar.<br>
    • Time zone differences can slightly affect results if time is included.<br>
    • This calculator uses UTC-based conversion.</p>
    <p><b>References:</b></p>
    <p>• NASA Astronomical Data Standards<br>
    • United States Naval Observatory (USNO)<br>
    • Astronomical Algorithms by Jean Meeus </p>

    <p><b>Disclaimer:</b></p>
    <p>This calculator is provided for educational and informational purposes only.  
    While every effort has been made to ensure accuracy, results should not be used for mission-critical or legal purposes without independent verification.
    </p>
    <br>
  `;

  const button = div.querySelector("#julianButton");
  const resultEl = div.querySelector("#julianResult");
  const dateInput = div.querySelector("#julianDate");

  button.addEventListener("click", () => {
    if (!dateInput.value) {
      resultEl.innerHTML = "Please select a valid date.";
      return;
    }

    const date = new Date(dateInput.value);
    const julian = Math.floor(date / 86400000) + 2440588;
    resultEl.innerHTML = `<b>Julian Date:</b> ${julian}`;
  });

  return div;
}
