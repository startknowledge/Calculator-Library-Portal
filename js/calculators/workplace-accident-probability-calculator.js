export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Workplace Accident Probability Calculator</h3>
    <p>This calculator estimates the probability of workplace accidents based on various factors.</p>
    <form id="workplaceAccidentProbCalcForm">
        <label for="numEmployees">Number of Employees:</label><br>
        <input type="number" id="numEmployees" name="numEmployees" required><br><br>
        <label for="numAccidents">Number of Accidents in Past Year:</label><br>
        <input type="number" id="numAccidents" name="numAccidents" required><br><br>
        <label for="safetyMeasures">Number of Safety Measures Implemented:</label><br>
        <input type="number" id="safetyMeasures" name="safetyMeasures" required><br><br>
        <button type="button" onclick="calculateAccidentProbability()">Calculate Accident Probability</button>
    </form>
    <div id="workplaceAccidentProbResult"></div>
    <br>
    <h3>Workplace Accident Probability Calculator</h3>
    <p>Based on inputs, this tool helps estimate the likelihood of accidents occurring in a workplace setting.</p>
    <p>It is important for organizations to monitor and improve workplace safety to minimize risks.</p>
    <p>Note: This calculator provides an estimate and should be used alongside professional safety assessments.</p>
    <p>Estimate probability of accidents in a workplace.</p>
    <p><b>Explanation:</b></p>
    <p>This calculator helps assess workplace safety performance.</p>
    <p><b>Formula:</b></p>
    <p>Accident Probability = Accidents ÷ Employees</p>
    <p><b>Example:</b>  
    5 accidents ÷ 100 employees = <b>0.05</b>.</p>
    <p><b>Disclaimer:</b> Past data may not guarantee future outcomes.</p>
    <br>
`;
    // Function to calculate workplace accident probability
    function calculateAccidentProbability() {
        const numEmployees = parseFloat(document.getElementById("numEmployees").value);
        const numAccidents = parseFloat(document.getElementById("numAccidents").value);
        const safetyMeasures = parseFloat(document.getElementById("safetyMeasures").value);
        if (isNaN(numEmployees) || isNaN(numAccidents) || isNaN(safetyMeasures) || numEmployees <= 0) {
            document.getElementById("workplaceAccidentProbResult").innerHTML = "Please enter valid numbers for all fields (number of employees must be greater than 0).";
            return;
        }
        // Basic probability calculation adjusted for safety measures
        let baseProbability = numAccidents / numEmployees;
        let adjustedProbability = baseProbability / (1 + (safetyMeasures * 0.1));
        document.getElementById("workplaceAccidentProbResult").innerHTML = `
            <h4>Results:</h4>
            <p>Estimated Workplace Accident Probability: ${(adjustedProbability * 100).toFixed(2)}%</p>
        `;
    }
    // Attach the calculateAccidentProbability function to the window object
    window.calculateAccidentProbability = calculateAccidentProbability;
    return div;
}