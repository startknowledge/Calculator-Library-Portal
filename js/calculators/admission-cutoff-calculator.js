export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Your Percentage</label>
    <input type="number" id="yourPer">

    <label>Cutoff Percentage</label>
    <input type="number" id="cutoff">

    <button onclick="checkCutoff()">Check</button>
    <p id="cutResult"></p>
    <p><u>Explanation about Admission Cutoff</u> :</p>
    <p>An admission cutoff is a predetermined score or percentage that applicants must meet or exceed to be considered for admission to an educational institution or program. 
    It serves as a benchmark to filter and select candidates based on their academic performance or other relevant criteria.</p>
    <p>Cutoffs can vary widely depending on the institution, program, and level of study. They are often established based on factors such as the number of available seats, the competitiveness of the applicant pool, and the institution's academic standards.
    Applicants who meet or exceed the cutoff are typically eligible to proceed to the next stage of the admission process, which may include interviews, entrance exams, or further evaluations.</p>
    <p>Understanding the admission cutoff is crucial for prospective students as it helps them gauge their chances of acceptance and make informed decisions about their applications.</p>
    <p>Note that meeting the cutoff does not guarantee admission, as other factors may also be considered in the selection process.</p>
    <p>Admission cutoffs are commonly used in various educational systems worldwide, including universities, colleges, and specialized programs.</p>
    <p>Overall, admission cutoffs play a significant role in shaping the admissions landscape and ensuring that institutions maintain their academic standards while selecting qualified candidates.</p>
    <p>For more detailed information, please refer to educational resources or the specific institution's admission guidelines.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of admission cutoffs. For specific details, please consult official educational resources or institutions.</p>
  `;

  window.checkCutoff = function () {
    cutResult.innerHTML =
      yourPer.value >= cutoff.value
        ? "<b>Eligible</b>"
        : "<b>Not Eligible</b>";
  };

  return div;
}
