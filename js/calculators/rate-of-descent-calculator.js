export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rate of Descent Calculator</h3>
    <p>Calculate the rate at which an aircraft descends based on altitude lost and time taken.</p>

    <label>Altitude Lost (feet)</label>
    <input type="number" id="altitude" placeholder="Enter altitude lost">

    <label>Time Taken (minutes)</label>
    <input type="number" id="time" placeholder="Enter time">

    <button onclick="calculateROD()">Calculate</button>

    <p id="rodResult"></p>

    <h4>Explanation:</h4>
    <p>
      Rate of Descent (ROD) shows how fast an aircraft loses altitude.
      It is used during approach, descent planning, and landing procedures.
    </p>

    <h4>Formula:</h4>
    <p>
      Rate of Descent (ft/min) = Altitude Lost (ft) ÷ Time (min)
    </p>

    <h4>How to Use:</h4>
    <p>
      1. Enter the total altitude lost in feet.<br>
      2. Enter the time taken in minutes.<br>
      3. Click Calculate to get the rate of descent.
    </p>

    <h4>Relative Concepts:</h4>
    <p>
      Higher descent rates are common during emergency or steep descents.<br>
      Controlled descent rates are required for passenger comfort and safety.
    </p>

    <h4>Note:</h4>
    <p>
      Excessive rate of descent near landing can cause hard landings.
      Pilots manage descent using power, pitch, and flap configuration.
    </p>

    <h4>Disclaimer:</h4>
    <p>
      This calculator provides an approximate value for educational
      and planning purposes only. Actual aircraft performance may vary.
    </p>
  `;

  window.calculateROD = function () {
    const altitude = parseFloat(document.getElementById("altitude").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(altitude) || isNaN(time) || time <= 0) {
      document.getElementById("rodResult").innerHTML =
        "Please enter valid values.";
      return;
    }

    const rod = altitude / time;

    document.getElementById("rodResult").innerHTML =
      `<b>Rate of Descent:</b> ${rod.toFixed(2)} ft/min`;
  };

  return div;
}
