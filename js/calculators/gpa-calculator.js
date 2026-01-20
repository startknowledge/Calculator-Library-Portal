export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Grade Points</label>
    <input type="number" id="gradePoints">

    <label>Total Credits</label>
    <input type="number" id="credits">

    <button onclick="calcGPA()">Calculate</button>
    <p id="gpaResult"></p>
  `;

  window.calcGPA = function () {
    let points = +document.getElementById("gradePoints").value;
    let credits = +document.getElementById("credits").value;

    if (credits === 0) {
      gpaResult.innerHTML = "Credits cannot be zero";
      return;
    }

    let gpa = (points / credits).toFixed(2);

    gpaResult.innerHTML = `<b>GPA:</b> ${gpa}`;
  };

  return div;
}
