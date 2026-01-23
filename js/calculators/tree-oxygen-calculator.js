export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter number of trees:</label>
    <input type="number" id="treeCount" placeholder="Enter number of trees">

    <button onclick="calculateOxygen()">Calculate</button>
    <p id="oxygenResult"></p>
    <br>
    <h3>Tree Oxygen Calculator</h3>
    <p>Calculator is a tool to estimate oxygen production by trees.</p>
    <p>Relative to other calculators, this one focuses on environmental impact.</p>
    <p><b>Contents:</b></p>
    <p>Benefits of trees</p>
    <p>Average oxygen output per tree</p>
    <p>Calculation methodology<
    <p>Example calculation</p>
    <p>To use the calculator, input the number of trees and click "Calculate".</p>
    <p>Note: This provides an estimate; actual output varies by species and conditions.</p>
    <p>It is important to understand the environmental benefits of trees.</p>
    <p>Estimate the oxygen produced by a given number of trees annually.</p>
    <p><b>Explanation:</b></p>
    <p>On average, a mature tree produces about 260 kg of oxygen per year.</p>
    <p><b>Formula:</b></p>
    <p>Oxygen (kg/year) = Number of Trees × 260</p>
    <p><b>Example:</b>  
    10 trees produce <b>2,600 kg</b> of oxygen annually.</p>
    <p><b>Disclaimer:</b> This is an approximate value; species and growth affect output.</p>
    <br>
  `;

  window.calculateOxygen = function () {
    const count = parseFloat(document.getElementById("treeCount").value);
    if (isNaN(count)) return;

    const oxygen = (count * 260).toFixed(2);
    document.getElementById("oxygenResult").innerHTML =
      `<b>Estimated Oxygen:</b> ${oxygen} kg/year`;
  };

  return div;
}
