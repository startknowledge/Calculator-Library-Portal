export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Percentage</label>
    <input type="number" id="perc">

    <button onclick="calcCGPA()">Calculate</button>
    <p id="cgpaResult"></p>
  `;

  window.calcCGPA = function () {
    let cgpa = (perc.value / 9.5).toFixed(2);
    cgpaResult.innerHTML = `<b>CGPA:</b> ${cgpa}`;
  };

  return div;
}
