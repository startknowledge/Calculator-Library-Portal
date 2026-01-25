export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rate of Climb Calculator</h3>
    <p>Calculate the rate at which an aircraft climbs based on altitude gained and time taken.</p>

    <label>Altitude Gained (feet)</label>
    <input type="number" id="altitude" placeholder="Enter altitude gained">

    <label>Time Taken (minutes)</label>
    <input type="number" id="time" placeholder="Enter time">

    <button onclick="calculateROC()">Calculate</button>

    <p id="rocResult"></p>

    <h4>Explanation:</h4>
    <p>
      Rate of Climb (ROC) indicates how fast an aircraft gains altitude.
      It is a critical performance parameter used during takeoff,
      climb, and obstacle clearance analysis.
    </p>

    <h4>Formula:</h4>
    <p>
      Rate of Climb (ft/min) = Altitude Gained (ft) ÷ Time (min)
    </p>

    <h4>How to Use:</h4>
    <p>
      1. Enter the total altitude gained in feet.<br>
      2. Enter the time taken in minutes.<br>
      3. Click on Calculate to get the rate of climb.
    </p>

    <h4>Relative Concepts:</h4>
    <p>
      Higher ROC indicates better climb performance.<br>
      ROC depends on engine power, aircraft weight,
      air density, and aerodynamic efficiency.
    </p>

    <h4>Note:</h4>
    <p>
      Rate of climb decreases with altitude due to reduced air density.
      Pilots aim for the best rate of climb speed (Vy) for maximum altitude gain.
    </p>

    <h4>Disclaimer:</h4>
    <p>
      This calculator provides an approximate value for educational
      and planning purposes only. Actual aircraft performance may vary.
    </p>
  `;

  window.calculateROC = function () {
    const altitude = parseFloat(document.getElementById("altitude").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(altitude) || isNaN(time) || time <= 0) {
      document.getElementById("rocResult").innerHTML =
        "Please enter valid values.";
      return;
    }

    const roc = altitude / time;

    document.getElementById("rocResult").innerHTML =
      `<b>Rate of Climb:</b> ${roc.toFixed(2)} ft/min`;
  };

  return div;
}
