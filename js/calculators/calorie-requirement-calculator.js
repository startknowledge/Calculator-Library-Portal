export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Start Date:</label>
    <input type="date" id="workStart">

    <label>End Date:</label>
    <input type="date" id="workEnd">

    <button onclick="calcWorkDays()">Calculate</button>
    <p id="workResult"></p>
  `;

  window.calcWorkDays = function () {
    let start = new Date(document.getElementById("workStart").value);
    let end = new Date(document.getElementById("workEnd").value);

    let count = 0;

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      let day = d.getDay();  
      if (day !== 0 && day !== 6) count++;  // Exclude Sat/Sun
    }

    document.getElementById("workResult").innerHTML =
      `<b>Working Days:</b> ${count}`;
  };

  return div;
}
