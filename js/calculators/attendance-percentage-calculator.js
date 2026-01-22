export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Classes Attended</label>
    <input type="number" id="att">

    <label>Total Classes</label>
    <input type="number" id="total">

    <button onclick="calcAttendance()">Calculate</button>
    <p id="attResult"></p><br>
    <p><u>Explanation about Attendance Percentage Calculation</u> :</p>
    <p>Attendance percentage is a measure of the number of classes or sessions a student has attended out of the total number of classes held. It is typically expressed as a percentage and is calculated using the formula:</p>
    <p><b>Attendance Percentage = (Number of Classes Attended / Total Number of Classes) × 100</b></p>
    <p>For example, if a student has attended 45 classes out of a total of 50 classes, the attendance percentage would be calculated as follows:</p>
    <p>Attendance Percentage = (45 / 50) × 100 = 90%</p>
    <p>Maintaining a high attendance percentage is often important for students, as many educational institutions have minimum attendance requirements that must be met in order to pass a course or qualify for exams. Regular attendance can also contribute to better understanding of the material, improved academic performance, and overall success in one's studies.</p>
    <p>It is advisable for students to keep track of their attendance and strive to attend classes regularly to ensure they meet any attendance criteria set by their institution.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of attendance percentage calculation. For specific details, please consult official educational resources or institutional guidelines.</p>
    <br>
  `;

  window.calcAttendance = function () {
    let per = ((att.value / total.value) * 100).toFixed(2);
    attResult.innerHTML = `<b>Attendance:</b> ${per}%`;
  };

  return div;
}
