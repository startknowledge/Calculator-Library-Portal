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
    <br>
    <p>The Glide Ratio Calculator helps pilots and aeronautical engineers evaluate the performance of an aircraft during unpowered flight. By inputting the lift and drag coefficients, users can determine how far an aircraft can glide horizontally for every unit of altitude lost.</p>
    <p>This calculator is particularly useful for glider pilots, flight instructors, and aerospace engineers who need to assess aircraft efficiency and optimize flight paths. Understanding glide ratios is essential for safe landings and efficient flight planning.</p> 
    <p><b>Note:</b> Ensure that the lift and drag coefficients are accurate to get a reliable glide ratio.</p>
    <p><b>Example:</b> For a lift coefficient of 1.2 and a drag coefficient of 0.1, the glide ratio would be 12:1.</p>
    <p><b>Formula:</b> Glide Ratio = Lift Coefficient / Drag Coefficient</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual glide performance may vary based on additional factors such as aircraft weight, atmospheric conditions, and pilot technique.</p>
    <br>
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