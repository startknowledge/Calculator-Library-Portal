export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Percentage to CGPA Calculator</h3>
    <p>Convert your percentage marks into CGPA using the standard formula.</p>

    <label>Percentage (%)</label>
    <input type="number" id="perc" placeholder="Enter your percentage">

    <button onclick="calcCGPA()">Calculate</button>
    <p id="cgpaResult"></p>

    <p><b>Explanation:</b><br>
    The CGPA (Cumulative Grade Point Average) is calculated by dividing your percentage by 9.5 (as per the standard guideline in many Indian education boards).</p>

    <p><b>Formula:</b><br>
    CGPA = Percentage ÷ 9.5</p>

    <p><b>Example:</b><br>
    Percentage = 85% → CGPA = 85 ÷ 9.5 = <b>8.95</b></p>

    <p><b>Disclaimer:</b><br>
    This calculator provides an estimate. CGPA calculation rules may vary by institution.<br></p>
  `;

  window.calcCGPA = function () {
    const percVal = parseFloat(document.getElementById("perc").value);

    if (isNaN(percVal) || percVal < 0 || percVal > 100) {
      cgpaResult.innerHTML = "Please enter a valid percentage (0-100).";
      return;
    }

    const cgpa = (percVal / 9.5).toFixed(2);
    cgpaResult.innerHTML = `<b>CGPA:</b> ${cgpa}`;
  };

  return div;
}
