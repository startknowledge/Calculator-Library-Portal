export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Grade Points</label>
    <input type="number" id="gradePoints">

    <label>Total Credits</label>
    <input type="number" id="credits">

    <button onclick="calcGPA()">Calculate</button>
    <p id="gpaResult"></p>
    <br>
    <p>The GPA Calculator helps you compute your Grade Point Average (GPA) based on the total grade points earned and the total credits attempted. Simply enter your total grade points and total credits, then click "Calculate" to see your GPA.</p>
    <p>This calculator is useful for students, educators, and academic advisors who need to evaluate academic performance. It allows for quick calculations and aids in academic planning and goal setting.</p> 
    <p><b>Note:</b> Ensure that the grade points and credits inputs are accurate to get a reliable GPA.</p>
    <p><b>Example:</b> For a total of 45 grade points and 15 credits, the GPA would be 3.00.</p>
    <p><b>Formula:</b> GPA = Total Grade Points / Total Credits</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual GPA may vary based on institutional grading policies and additional factors such as weighted courses.</p>
    <br>
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
