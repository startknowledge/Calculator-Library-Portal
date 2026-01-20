export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Lift to Drag Ratio Calculator</h3>
    <p>This calculator determines the lift to drag ratio of an aircraft based on lift and drag coefficients.</p>
    <form id="liftToDragRatioCalcForm">
        <label for="liftCoefficient">Lift Coefficient:</label><br>
        <input type="number" id="liftCoefficient" name="liftCoefficient" step="0.01" required><br><br>
        <label for="dragCoefficient">Drag Coefficient:</label><br>
        <input type="number" id="dragCoefficient" name="dragCoefficient" step="0.01" required><br><br>
        <button type="button" onclick="calculateLiftToDragRatio()">Calculate Lift to Drag Ratio</button>
    </form>
    <div id="liftToDragRatioResult"></div>
`;

    // Function to calculate lift to drag ratio
    function calculateLiftToDragRatio() {
        const liftCoefficient = parseFloat(document.getElementById("liftCoefficient").value);
        const dragCoefficient = parseFloat(document.getElementById("dragCoefficient").value);

        if (isNaN(liftCoefficient) || isNaN(dragCoefficient)) {
            document.getElementById("liftToDragRatioResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const liftToDragRatio = liftCoefficient / dragCoefficient;

        document.getElementById("liftToDragRatioResult").innerHTML = `
            <h4>Results:</h4>
            <p>Lift to Drag Ratio: ${liftToDragRatio.toFixed(2)}</p>
        `;
    }
    // Attach the calculateLiftToDragRatio function to the window object
    window.calculateLiftToDragRatio = calculateLiftToDragRatio;
    return div;
}