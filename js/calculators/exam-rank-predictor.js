export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Your Score</label>
    <input type="number" id="score">

    <label>Total Students</label>
    <input type="number" id="students">

    <button onclick="calcRank()">Calculate</button>
    <p id="rankResult"></p>
  `;

  window.calcRank = function () {
    let rank = Math.ceil(students.value - (score.value / 100) * students.value);
    rankResult.innerHTML = `<b>Expected Rank:</b> ${rank}`;
  };

  return div;
}
