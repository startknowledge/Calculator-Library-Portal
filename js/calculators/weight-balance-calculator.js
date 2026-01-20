export default function () {
  const div = document.createElement("div");
    div.innerHTML = `   
    <h3>Weight Balance Calculator</h3>
    <p>This calculator determines the weight and balance of an aircraft to ensure safe flight operations.</p>
    <form id="weightBalanceCalcForm">
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>
        <label for="centerOfGravity">Center of Gravity (inches from reference point):</label><br>
        <input type="number" id="centerOfGravity" name="centerOfGravity" step="0.01" required><br><br>
        <button type="button" onclick="calculateWeightBalance()">Calculate Weight Balance</button>
    </form>
    <div id="weightBalanceResult"></div>
`;

    // Function to calculate weight balance
    function calculateWeightBalance() {
        const weight = parseFloat(document.getElementById("weight").value);
        const centerOfGravity = parseFloat(document.getElementById("centerOfGravity").value);

        if (isNaN(weight) || isNaN(centerOfGravity)) {
            document.getElementById("weightBalanceResult").innerHTML = "Please enter valid numbers.";
            return;
        }

        // Simplified calculation for demonstration purposes
        const weightBalance = weight * centerOfGravity;

        document.getElementById("weightBalanceResult").innerHTML = `
            <h4>Results:</h4>
            <p>Weight Balance: ${weightBalance.toFixed(2)} lbs-inches</p>
        `;
    }
    // Attach the calculateWeightBalance function to the window object
    window.calculateWeightBalance = calculateWeightBalance;
    return div;
}