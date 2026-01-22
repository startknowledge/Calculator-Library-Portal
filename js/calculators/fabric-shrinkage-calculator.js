export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Fabric Shrinkage Calculator</h3>

    <label>Original Length (cm)</label>
    <input id="orig" value="100">

    <label>After Wash Length (cm)</label>
    <input id="after" value="96">

    <button onclick="calcShrink()">Calculate</button>
    <p id="shrinkResult"></p>
    <br>
    <p><u>Explanation about Fabric Shrinkage Calculator</u> :</p>
    <p>The Fabric Shrinkage Calculator is a tool designed to help individuals and businesses calculate the percentage of shrinkage in fabric after washing. By inputting the original length and the length after washing, users can quickly determine the shrinkage percentage, which is essential for accurate fabric planning and cost estimation.</p>
    <p>The calculator uses the following formula:</p>
    <p>Shrinkage (%) = ((Original Length - After Wash Length) / Original Length) * 100</p>
    <p>To use the calculator, simply enter the original length and the length after washing in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the shrinkage percentage.</p>
    <p>This calculator is particularly useful for tailors, fashion designers, and fabric retailers who need to manage fabric costs and measurements efficiently. By knowing both the total cost and the length in yards, users can make informed purchasing decisions and budget planning.</p>
    <p>In summary, the Fabric Shrinkage Calculator is a valuable resource for anyone involved in fabric-related businesses or projects, providing clarity on costs and measurements to aid in effective financial and material management.</p>
    <p><b>Note:</b> This calculator provides an estimate of the fabric cost and yardage based on the inputs provided. Actual costs may vary depending on fabric type, quality, and market fluctuations.</p>
    <p>For personalized advice and detailed fabric cost analysis, consider consulting with a textile expert or fabric supplier.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
  `;

  window.calcShrink = function () {
    let o = +document.getElementById("orig").value;
    let a = +document.getElementById("after").value;

    let shrink = ((o - a) / o) * 100;

    document.getElementById("shrinkResult").innerHTML =
      `<b>Shrinkage:</b> ${shrink.toFixed(2)} %`;
  };

  return div;
}
