export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Glide Ratio Calculator</h3>
    <p>This calculator determines the glide ratio of an aircraft based on lift and drag coefficients.</p>
    <form id="glideRatioCalcForm">
        <label for="liftCoefficient">Lift Coefficient:</label><br>
        <input type="number" id="liftCoefficient" name="liftCoefficient" step="0.01" required><br><br>
        <label for="dragCoefficient">Drag Coefficient:</label><br>
        <input type="number" id="dragCoefficient" name="dragCoefficient" step="0.01" required><br><br>
        <button type="button" onclick="calculateGlideRatio()">Calculate Glide Ratio</button>
    </form>
    <div id="glideRatioResult"></div>
`;

    // Function to calculate glide ratio
    function calculateGlideRatio() {
        const liftCoefficient = parseFloat(document.getElementById("liftCoefficient").value);
        const dragCoefficient = parseFloat(document.getElementById("dragCoefficient").value);

        if (isNaN(liftCoefficient) || isNaN(dragCoefficient)) {
            document.getElementById("glideRatioResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const glideRatio = liftCoefficient / dragCoefficient;

        document.getElementById("glideRatioResult").innerHTML = `
            <h4>Results:</h4>
            <p>Glide Ratio: ${glideRatio.toFixed(2)}</p>
        `;
    }
    // Attach the calculateGlideRatio function to the window object
    window.calculateGlideRatio = calculateGlideRatio;
    return div;
}