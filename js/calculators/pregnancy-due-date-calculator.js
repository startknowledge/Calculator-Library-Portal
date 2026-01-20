export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Last Period Date</label>
    <input type="date" id="lmp">

    <button onclick="calcDue()">Calculate</button>
    <p id="dueResult"></p>
  `;

  window.calcDue = function () {
    let d = new Date(lmp.value);
    d.setDate(d.getDate() + 280);
    dueResult.innerHTML = `<b>Due Date:</b> ${d.toDateString()}`;
  };

  return div;
}
