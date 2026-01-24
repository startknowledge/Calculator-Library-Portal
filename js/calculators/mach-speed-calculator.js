export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mach Speed Calculator</h3>

    <p>
      This calculator determines the Mach number of an aircraft
      based on its true airspeed and the local speed of sound.
    </p>

    <label>True Airspeed (knots)</label>
    <input type="number" id="trueAirspeed" min="0" placeholder="e.g. 450">

    <label>Speed of Sound (knots)</label>
    <input type="number" id="speedOfSound" min="1" placeholder="e.g. 661">

    <button onclick="calculateMachSpeed()">Calculate</button>

    <div id="machSpeedResult"></div>
    <br>

    <p><b>Formula:</b></p>
    <p>Mach Number = True Airspeed ÷ Speed of Sound</p>

    <p><b>Example:</b></p>
    <p>
      True Airspeed = 450 knots<br>
      Speed of Sound = 661 knots<br>
      <b>Mach = 0.68</b>
    </p>

    <p><b>Mach Classification:</b></p>
    <ul>
      <li>Subsonic: Mach &lt; 1</li>
      <li>Transonic: Mach 0.8 – 1.2</li>
      <li>Supersonic: Mach &gt; 1</li>
      <li>Hypersonic: Mach &gt; 5</li>
    </ul>

    <p><b>Use Case:</b></p>
    <p>
      Useful for aviation, aerospace engineering,
      flight planning, and performance analysis.
    </p>

    <p><b>Disclaimer:</b>
      Speed of sound varies with altitude and temperature.
      This calculator provides an approximate result.
    </p>
  `;

  window.calculateMachSpeed = function () {
    const trueAirspeed = parseFloat(
      document.getElementById("trueAirspeed").value
    );
    const speedOfSound = parseFloat(
      document.getElementById("speedOfSound").value
    );

    if (
      isNaN(trueAirspeed) ||
      isNaN(speedOfSound) ||
      trueAirspeed < 0 ||
      speedOfSound <= 0
    ) {
      document.getElementById("machSpeedResult").innerHTML =
        "<b>Please enter valid positive values.</b>";
      return;
    }

    const machSpeed = trueAirspeed / speedOfSound;

    document.getElementById("machSpeedResult").innerHTML = `
      <h4>Result</h4>
      <p><b>Mach Number:</b> ${machSpeed.toFixed(2)}</p>
    `;
  };

  return div;
}
