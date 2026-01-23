export default function () {
  const div = document.createElement("div");
    div.innerHTML = `   
    <h3>Risk Exposure Calculator</h3>
    <p>This calculator estimates the risk exposure based on probability and impact of a risk event.</p>
    <form id="riskExposureCalcForm">
        <label for="probability">Probability of Risk Event (0 to 1):</label><br>
        <input type="number" id="probability" name="probability" step="0.01" min="0" max="1" required><br><br>
        <label for="impact">Impact of Risk Event (Monetary Value):</label><br>
        <input type="number" id="impact" name="impact" required><br><br>
        <button type="button" onclick="calculateRiskExposure()">Calculate Risk Exposure</button>
    </form>
    <div id="riskExposureResult"></div>
    <br>
    <h3>Risk Exposure Calculator</h3>
    <p>Estimate risk exposure based on probability and impact.</p>
    <p><b>Explanation:</b></p>
    <p>Risk exposure helps prioritize safety and mitigation measures.</p>
    <p><b>Formula:</b></p>
    <p>Risk Exposure = Probability × Impact</p>
    <p>Based on the inputs provided:</p>
    <ul>
      <li><b>Probability:</b> Likelihood of the risk event occurring (0 to 1).</li>
      <li><b>Impact:</b> Financial impact if the risk event occurs.</li>
    </ul>
    <p><b>Example:</b>  
    0.3 × 100 = <b>30</b>.</p>
    <p><b>Disclaimer:</b> Values are indicative and for planning purposes.</p>
    <br>
`;
    // Function to calculate risk exposure
    function calculateRiskExposure() {
        const probability = parseFloat(document.getElementById("probability").value);
        const impact = parseFloat(document.getElementById("impact").value);
        if (isNaN(probability) || isNaN(impact) || probability < 0 || probability > 1) {
            document.getElementById("riskExposureResult").innerHTML = "Please enter valid numbers for probability (0 to 1) and impact.";
            return;
        }   
        const riskExposure = probability * impact;
        document.getElementById("riskExposureResult").innerHTML = `
            <h4>Results:</h4>
            <p>Risk Exposure: ${riskExposure.toFixed(2)}</p>
        `;
    }
    // Attach the calculateRiskExposure function to the window object
    window.calculateRiskExposure = calculateRiskExposure;
    return div;
}