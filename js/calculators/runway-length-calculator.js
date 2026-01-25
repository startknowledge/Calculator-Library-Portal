export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Runway Length Calculator</h3>

    <p>This calculator estimates the required runway length for an aircraft based on takeoff speed and acceleration.</p>

    <h4>Formula</h4>
    <p>
      Runway Length = (Takeoff Speed²) / (2 × Acceleration)
    </p>

    <form id="runwayLengthCalcForm">
        <label for="takeoffSpeed">Takeoff Speed (knots):</label><br>
        <input type="number" id="takeoffSpeed" name="takeoffSpeed" required><br><br>

        <label for="acceleration">Acceleration (feet/sec²):</label><br>
        <input type="number" id="acceleration" name="acceleration" required><br><br>

        <button type="button" onclick="calculateRunwayLength()">Calculate Runway Length</button>
    </form>

    <div id="runwayLengthResult"></div>

    <h4>Example</h4>
    <p>
      Takeoff Speed = 150 knots<br>
      Acceleration = 10 ft/sec²<br>
      Required Runway Length = (150²) / (2 × 10) = 1125 feet
    </p>

    <h4>Note</h4>
    <p>
      The runway length calculated is an ideal estimate. Actual requirements may vary based on aircraft type, weight, wind conditions, and runway slope.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This tool provides approximate values for educational purposes only. Do not use it for actual flight operations or planning.
    </p>
  `;

  window.calculateRunwayLength = function () {
    const takeoffSpeed = parseFloat(document.getElementById("takeoffSpeed").value);
    const acceleration = parseFloat(document.getElementById("acceleration").value);

    if (isNaN(takeoffSpeed) || isNaN(acceleration) || acceleration <= 0) {
      document.getElementById("runwayLengthResult").innerHTML = "Please enter valid positive numbers.";
      return;
    }

    const runwayLength = (takeoffSpeed * takeoffSpeed) / (2 * acceleration);

    document.getElementById("runwayLengthResult").innerHTML = `
      <h4>Results:</h4>
      <p>Required Runway Length: ${runwayLength.toFixed(2)} feet</p>
    `;
  };

  return div;
}
