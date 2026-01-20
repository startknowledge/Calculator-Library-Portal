export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Case Start Date</label>
    <input type="date" id="caseStart">

    <label>Case End Date</label>
    <input type="date" id="caseEnd">

    <button onclick="calcCaseDuration()">Calculate</button>
    <p id="caseResult"></p>
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
