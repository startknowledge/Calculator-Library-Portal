export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Your Score</label>
    <input type="number" id="score">

    <label>Total Students</label>
    <input type="number" id="students">

    <button onclick="calcRank()">Calculate</button>
    <p id="rankResult"></p>
    <br>
    <p><u>Explanation about Exam Rank Predictor Calculator</u> :</p>
    <p>The Exam Rank Predictor Calculator is a tool designed to help students estimate their expected rank in an examination based on their score and the total number of students appearing for the exam. By inputting their score and the total number of students, users can quickly calculate an estimated rank, which can be useful for setting academic goals and planning future studies.</p>
    <p>The rank is calculated using the formula: Expected Rank = Total Students - (Score / 100) * Total Students. This formula assumes a uniform distribution of scores among all students.</p>  
    <p>To use the calculator, simply enter your score and the total number of students in the provided input fields. After clicking the "Calculate" button, the tool will compute and display your expected rank.</p>
    <p>This calculator is particularly useful for students preparing for competitive exams, academic assessments, and entrance tests who  want to understand their potential standing among peers. By knowing the expected rank, students can make informed decisions about their study strategies and performance improvement plans.</p> 
    <p>In summary, the Exam Rank Predictor Calculator is a valuable resource for students aiming to gauge their performance in examinations, providing clarity on their expected rank and aiding in effective academic planning.</p>
    <p><b>Note:</b> This calculator provides an estimate of the expected rank based on the inputs provided and assumes a uniform distribution of scores. Actual ranks may vary depending on the actual score distribution among students.</p>
    <p>For personalized advice and detailed performance analysis, consider consulting with an academic advisor or educational expert.</p> 
    <p>Happy Calculating!</p> 
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified educational professional for critical academic decisions.</p>
    <br>
  `;

  window.calcRank = function () {
    let rank = Math.ceil(students.value - (score.value / 100) * students.value);
    rankResult.innerHTML = `<b>Expected Rank:</b> ${rank}`;
  };

  return div;
}
