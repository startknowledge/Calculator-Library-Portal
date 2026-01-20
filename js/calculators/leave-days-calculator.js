export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Leave From:</label>
    <input type="date" id="leaveStart">

    <label>Leave To:</label>
    <input type="date" id="leaveEnd">

    <button onclick="calcLeave()">Calculate</button>
    <p id="leaveResult"></p>
  `;

  window.calcLeave = function () {
    let start = new Date(document.getElementById("leaveStart").value);
    let end = new Date(document.getElementById("leaveEnd").value);

    let diffMs = end - start;
    let diff = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; // inclusive

    document.getElementById("leaveResult").innerHTML =
      `<b>Total Leave Days:</b> ${diff}`;
  };

  return div;
}
