export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Numbers (comma separated)</label>
    <input type="text" id="statNums">

    <button onclick="calcMean()">Calculate</button>
    <p id="statResult"></p>
  `;

  window.calcMean = function () {
    let nums = statNums.value.split(",").map(Number);
    let mean = nums.reduce((a,b)=>a+b,0) / nums.length;

    statResult.innerHTML =
      `<b>Mean:</b> ${mean.toFixed(2)}`;
  };

  return div;
}
