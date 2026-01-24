export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Payload Calculator</h3>
    <p>This calculator determines the payload of an aircraft based on its weight and fuel capacity.</p>

    <form id="payloadCalcForm">
        <label for="weight">Aircraft Weight (lbs):</label><br>
        <input type="number" id="weight" name="weight" required><br><br>

        <label for="fuelCapacity">Fuel Capacity (gallons):</label><br>
        <input type="number" id="fuelCapacity" name="fuelCapacity" required><br><br>

        <button type="button" onclick="calculatePayload()">Calculate Payload</button>
    </form>

    <div id="payloadResult"></div>

    <p><b>Explanation:</b><br>
    The payload is the weight that the aircraft can carry excluding fuel weight. This calculator subtracts the weight of fuel from the total aircraft weight to estimate payload capacity.</p>

    <p><b>Formula:</b><br>
    Payload (lbs) = Aircraft Weight − (Fuel Capacity × 6.7)<br>
    (Assuming 6.7 lbs per gallon of fuel)</p>

    <p><b>Example:</b><br>
    Aircraft Weight = 20,000 lbs, Fuel Capacity = 500 gallons → Payload = 20,000 − (500 × 6.7) = <b>16,650 lbs</b></p>

    <p><b>Disclaimer:</b><br>
    This calculator provides an estimate. Actual payload may vary based on aircraft type, fuel type, and operational conditions.<br></p>
  `;

  // Function to calculate payload
  function calculatePayload() {
      const weight = parseFloat(document.getElementById("weight").value);
      const fuelCapacity = parseFloat(document.getElementById("fuelCapacity").value);

      if (isNaN(weight) || isNaN(fuelCapacity) || weight <= 0 || fuelCapacity < 0) {
          document.getElementById("payloadResult").innerHTML = "Please enter valid positive numbers.";
          return;
      }

      const payload = weight - (fuelCapacity * 6.7); // lbs per gallon

      document.getElementById("payloadResult").innerHTML = `
          <h4>Results:</h4>
          <p>Payload: ${payload.toFixed(2)} lbs</p>
      `;
  }

  // Attach to window for onclick
  window.calculatePayload = calculatePayload;

  return div;
}
