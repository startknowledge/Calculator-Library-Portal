export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Marks Percentage Calculator</h3>

    <p>
      This calculator helps students calculate their percentage
      based on marks obtained and total marks.
    </p>

    <label>Marks Obtained</label>
    <input type="number" id="obt" min="0" placeholder="e.g. 420">

    <label>Total Marks</label>
    <input type="number" id="tot" min="1" placeholder="e.g. 500">

    <button onclick="calcMarks()">Calculate</button>

    <p id="marksResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>Percentage = (Marks Obtained ÷ Total Marks) × 100</p>

    <p><b>Example:</b></p>
    <p>
      Marks Obtained = 420<br>
      Total Marks = 500<br>
      <b>Percentage = 84%</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for school exams, board results,
      college assessments, and academic evaluations.
    </p>

    <p><b>Disclaimer:</b>
      This calculator provides a simple percentage calculation.
      Grading systems may vary by institution.
    </p>
  `;

  window.calcMarks = function () {
    const obt = parseFloat(document.getElementById("obt").value);
    const tot = parseFloat(document.getElementById("tot").value);

    if (
      isNaN(obt) ||
      isNaN(tot) ||
      tot <= 0 ||
      obt < 0 ||
      obt > tot
    ) {
      document.getElementById("marksResult").innerHTML =
        "<b>Please enter valid marks.</b>";
      return;
    }

    const per = ((obt / tot) * 100).toFixed(2);

    document.getElementById("marksResult").innerHTML =
      `<b>Percentage:</b> ${per}%`;
  };

  return div;
}
