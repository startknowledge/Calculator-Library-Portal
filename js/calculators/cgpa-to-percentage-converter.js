export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>CGPA (Cumulative Grade Point Average)</label>
    <input type="number" id="cgpa">

    <button onclick="calcPercent()">Calculate</button>
    <p id="perResult"></p><br>
    <p><u>Explanation about CGPA to Percentage Converter</u> :</p>
    <p>This calculator converts a given CGPA (Cumulative Grade Point Average) to its equivalent percentage using the formula: Percentage = CGPA × 9.5. This conversion is commonly used in educational institutions to represent academic performance in percentage terms.</p>
    <p>For example, if a student has a CGPA of 8.0, the equivalent percentage would be 76.0% (8.0 × 9.5).</p>
    <p>The formula is based on the general guideline that a CGPA of 10 corresponds to 95%, and it scales down accordingly.</p>
    <p>This tool is useful for students and educators who need to convert CGPA scores to percentages for applications, transcripts, or academic evaluations.</p>
    <p>Disclaimer: This tool provides a basic conversion and should not be used as a substitute for official academic records or professional educational advice.</p>
    <br>
  `;

  window.calcPercent = function () {
    let percent = (cgpa.value * 9.5).toFixed(2);
    perResult.innerHTML = `<b>Percentage:</b> ${percent}%`;
  };

  return div;
}
