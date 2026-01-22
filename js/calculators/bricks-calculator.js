export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Total Bricks Calculator</h3>
    <p><small>Formula: Wall Volume × 500 (Approx. 500 bricks per m³)</small></p>

    <label>Wall Volume (m³)</label>
    <input id="wallVol" type="number" value="2">

    <button id="calcBtn">Calculate</button>
    <p id="brickResult"></p><br>
    <p><u>Explanation about Bricks Calculation</u> :</p>
    <p>Calculating the total number of bricks required for a construction project is essential for budgeting and planning. The number of bricks needed depends on the volume of the wall to be constructed. A common approximation is that there are about 500 bricks in one cubic meter (m³) of wall volume.</p>
    <p>The formula to estimate the total number of bricks required is:</p>
    <p><b>Total Bricks = Wall Volume (m³) × 500</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>Wall Volume</b> is the volume of the wall in cubic meters (m³).</li>
    </ul>
    <p>For example, if the wall volume is 2 m³, the total number of bricks required would be calculated as follows:</p>
    <p>Total Bricks = 2 m³ × 500 = 1000 bricks</p>
    <p>This means that for a wall volume of 2 cubic meters, approximately 1000 bricks will be needed. It is advisable to purchase a few extra bricks to account for breakage and cutting during construction.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of brick calculation. For specific construction assessments, please consult a qualified construction professional.</p>
    <br>

  `;

  div.querySelector("#calcBtn").onclick = function () {
    const vol = +div.querySelector("#wallVol").value;
    const bricks = vol * 500;

    div.querySelector("#brickResult").innerHTML =
      `<b>Total Bricks Required:</b> ${bricks}`;
  };

  return div;
}
