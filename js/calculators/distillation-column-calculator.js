export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Number of Plates ≈ log separation / log relative volatility</h3>

    <label>Separation Factor</label>
    <input id="sep" value="20">

    <label>Relative Volatility</label>
    <input id="alpha" value="2">

    <button onclick="calcDist()">Calculate</button>
    <p id="distResult"></p>
    <br>
    <p><u>Explanation about Distillation Column Calculator</u> :</p>
    <p>The Distillation Column Calculator is a specialized tool designed to assist chemical engineers and process designers in estimating the number of theoretical plates required for a distillation column based on separation factor and relative volatility. This calculator is essential for optimizing the design and operation of distillation processes in various industries, including petrochemical, pharmaceutical, and food processing.</p>
    <p>To use the calculator, simply input the desired separation factor and the relative volatility of the components being separated. The calculator will then apply the logarithmic relationship to compute the approximate number of theoretical plates needed to achieve the specified separation.</p>
    <p>This tool is particularly useful during the preliminary design phase of distillation columns, allowing engineers to make informed decisions about column height, diameter, and operational parameters. By accurately estimating the number of plates, users can enhance process efficiency, reduce energy consumption, and improve product quality.</p>  
    <p>formula used:</p>
    <p>Number of Plates ≈ log(separation factor) / log(relative volatility)</p>
    <p>Where:</p>
    <ul>
      <li><b>Separation Factor</b> is a measure of the effectiveness of the distillation process in separating two components.</li>
      <li><b>Relative Volatility</b> is the ratio of the vapor pressures of the components being separated, indicating how easily they can be separated by distillation.</li>
    </ul>
    
    <p>This calculator provides a simplified estimation and should be used in conjunction with more detailed process simulations and engineering analyses for final design decisions.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional engineering judgment or detailed process simulation.</p>
    <br>
  `;

  window.calcDist = function () {
    let sep = +document.getElementById("sep").value;
    let alpha = +document.getElementById("alpha").value;

    let stages = Math.log(sep) / Math.log(alpha);

    distResult.innerHTML =
      `<b>Required Stages:</b> ${stages.toFixed(1)}`;
  };

  return div;
}
