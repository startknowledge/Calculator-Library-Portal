export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Aircraft Range Calculator</h3>
    <p>Estimate the maximum distance an aircraft can fly based on fuel capacity and consumption rate.</p>

    <label>Fuel Capacity (gallons)</label>
    <input type="number" id="fuelCapacity" placeholder="Enter fuel capacity">

    <label>Fuel Consumption Rate (gallons/hour)</label>
    <input type="number" id="fuelConsumptionRate" placeholder="Enter fuel burn rate">

    <button onclick="calculateRange()">Calculate</button>

    <p id="rangeResult"></p>

    <h4>Explanation:</h4>
    <p>
      This calculator estimates the aircraft range by first calculating endurance
      (how long the aircraft can fly) and then multiplying it by an assumed average speed.
    </p>

    <h4>Formula:</h4>
    <p>
      Endurance (hours) = Fuel Capacity ÷ Fuel Consumption Rate<br>
      Range (miles) = Endurance × Average Speed
    </p>

    <h4>Assumption:</h4>
    <p>
      An average cruise speed of <b>150 mph</b> is used for estimation purposes.
    </p>

    <h4>Range vs Endurance:</h4>
    <p>
      <b>Range</b> is the maximum distance an aircraft can fly.<br>
      <b>Endurance</b> is the maximum time an aircraft can stay airborne.
    </p>

    <h4>Factors Affecting Range:</h4>
    <p>
      Aircraft weight, fuel load, altitude, air density, wind conditions,
      and lift-to-drag (L/D) ratio all influence actual range.
    </p>

    <h4>Note:</h4>
    <p>
      For maximum range, aircraft typically fly near the speed that provides the
      best lift-to-drag ratio.
    </p>

    <h4>Disclaimer:</h4>
    <p>
      This calculator provides an approximate estimate for educational and planning purposes only.
      Actual aircraft range may vary significantly based on real-world conditions.
    </p>
  `;

  window.calculateRange = function () {
    const fuelCapacity = parseFloat(document.getElementById("fuelCapacity").value);
    const fuelConsumptionRate = parseFloat(document.getElementById("fuelConsumptionRate").value);

    if (isNaN(fuelCapacity) || isNaN(fuelConsumptionRate) || fuelConsumptionRate <= 0) {
      document.getElementById("rangeResult").innerHTML =
        "Please enter valid numeric values.";
      return;
    }

    const endurance = fuelCapacity / fuelConsumptionRate;
    const averageSpeed = 150; // mph (assumed)
    const range = endurance * averageSpeed;

    document.getElementById("rangeResult").innerHTML =
      `<b>Estimated Range:</b> ${range.toFixed(2)} miles`;
  };

  return div;
}
