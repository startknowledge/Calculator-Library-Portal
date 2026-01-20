export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Classes Attended</label>
    <input type="number" id="att">

    <label>Total Classes</label>
    <input type="number" id="total">

    <button onclick="calcAttendance()">Calculate</button>
    <p id="attResult"></p>
  `;

  window.calcAttendance = function () {
    let per = ((att.value / total.value) * 100).toFixed(2);
    attResult.innerHTML = `<b>Attendance:</b> ${per}%`;
  };

  return div;
}
