export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Case Start Date</label>
    <input type="date" id="caseStart">

    <label>Case End Date</label>
    <input type="date" id="caseEnd">

    <button onclick="calcCaseDuration()">Calculate</button>
    <p id="caseResult"></p><br>
    <p><u>Explanation about Case Duration Estimator</u> :</p>
    <p>This calculator estimates the duration of a case based on the start and end dates provided. It calculates the number of days between these two dates, inclusive of both start and end dates.</p>
    <p>For example, if a case starts on 2023-01-01 and ends on 2023-01-10, the duration would be 10 days (inclusive).</p>
    <p>Please ensure that the end date is not earlier than the start date for accurate results.</p>
    <p>Disclaimer: This tool provides an estimate and should not be used as a substitute for professional legal advice.</p>
    <br>

  `;

  window.calcCaseDuration = function () {
    let start = new Date(document.getElementById("caseStart").value);
    let end = new Date(document.getElementById("caseEnd").value);

    let days = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById("caseResult").innerHTML =
      `<b>Case Duration:</b> ${days} days`;
  };

  return div;
}
