export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Marks Obtained</label>
    <input type="number" id="obt">

    <label>Total Marks</label>
    <input type="number" id="tot">

    <button onclick="calcMarks()">Calculate</button>
    <p id="marksResult"></p>
  `;

  window.calcMarks = function () {
    let per = ((obt.value / tot.value) * 100).toFixed(2);
    marksResult.innerHTML = `<b>Percentage:</b> ${per}%`;
  };

  return div;
}
