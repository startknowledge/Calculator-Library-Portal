export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Takeoff Speed Calculator</h3>
    <p>This calculator determines the takeoff speed of an aircraft based on weight, runway length, and atmospheric conditions.</p>

    <form id="takeoffCalcForm">
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>

        <label for="runwayLength">Runway Length (ft):</label><br>
        <input type="number" id="runwayLength" name="runwayLength" required><br><br>

        <label for="temperature">Temperature (°F):</label><br>
        <input type="number" id="temperature" name="temperature" required><br><br>

        <button type="button" onclick="calculateTakeoffSpeed()">Calculate Takeoff Speed</button>
    </form>

    <div id="takeoffResult"></div>

    <br><br>
    <p><b>Explanation:</b> This calculator provides an estimate of the aircraft's required takeoff speed using basic input parameters. Useful for pilots and aviation enthusiasts for training or reference purposes.</p>
    <p><b>For example:</b> An aircraft weighing 50,000 lbs with a 5000 ft runway at 70°F.</p>
    <p><b>Formula (Simplified):</b> Takeoff Speed = 100 + (0.01 × Weight) + (0.02 × Runway Length) − (0.01 × Temperature)</p>
    <p>Calculator is a tool to simplify estimating takeoff speed.</p>
    <p>Relative accuracy depends on the validity of input values and the simplification used in the formula.</p>
    <p>Based on standard physics and aviation principles.</p>
    <p>To use the calculator, enter aircraft weight, runway length, and temperature, then click "Calculate Takeoff Speed".</p>
    <p><b>Note:</b> This is a simplified model. Real-world takeoff speed depends on many other factors such as wind, altitude, flap settings, and runway condition.</p>
    <p>It is important to enter valid numeric values.</p>
    <p><b>Disclaimer:</b> This calculator is for educational/reference purposes only and should not be used for actual flight operations.</p>
  `;

  // Function to calculate takeoff speed
  function calculateTakeoffSpeed() {
      const weight = parseFloat(document.getElementById("weight").value);
      const runwayLength = parseFloat(document.getElementById("runwayLength").value);
      const temperature = parseFloat(document.getElementById("temperature").value);

      if (isNaN(weight) || isNaN(runwayLength) || isNaN(temperature)) {
          document.getElementById("takeoffResult").innerHTML = "Please enter valid numbers.";
          return;
      }

      // Simplified calculation for demonstration purposes
      const takeoffSpeed = 100 + (0.01 * weight) + (0.02 * runwayLength) - (0.01 * temperature);

      document.getElementById("takeoffResult").innerHTML = `
          <h4>Results:</h4>
          <p>Takeoff Speed: ${takeoffSpeed.toFixed(2)} knots</p>
      `;
  }

  // Attach the function to the window
  window.calculateTakeoffSpeed = calculateTakeoffSpeed;

  return div;
}
