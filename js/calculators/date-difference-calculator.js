export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Start Date:</label>
    <input type="date" id="startDate">

    <label>End Date:</label>
    <input type="date" id="endDate">

    <button onclick="dateDiff()">Calculate</button>
    <p id="diffResult"></p>
  `;

  window.dateDiff = function () {
    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);

    if (!start || !end) return;

    let diffMs = Math.abs(end - start);
    let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    document.getElementById("diffResult").innerHTML =
      `<b>Total Days:</b> ${diffDays}`;
  };

  return div;
}
