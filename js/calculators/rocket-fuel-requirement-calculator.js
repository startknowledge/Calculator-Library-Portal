export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rocket Fuel Requirement Calculator</h3>

    <p>
      This calculator estimates the amount of fuel required for a rocket based on its mass, the required change in velocity (Delta-V), and the engine's specific impulse.
    </p>

    <h4>Formula</h4>
    <p>
      Fuel Mass = m₀ × (1 − exp(−Δv / (Isp × g₀)))<br>
      where:<br>
      m₀ = initial mass of the rocket (kg)<br>
      Δv = required change in velocity (m/s)<br>
      Isp = specific impulse of the engine (s)<br>
      g₀ = standard gravity = 9.80665 m/s²
    </p>

    <label>Mass of Rocket (kg)</label>
    <input id="mass" value="1000">

    <label>Delta-V Required (m/s)</label>
    <input id="deltaV" value="9500">

    <label>Specific Impulse (s)</label>
    <input id="isp" value="300">

    <button onclick="calcRocketFuel()">Calculate</button>
    <p id="fuelResult"></p>

    <h4>Example</h4>
    <p>
      Mass = 1000 kg<br>
      Δv = 9500 m/s<br>
      Isp = 300 s<br>
      <b>Fuel Required:</b> 8707.75 kg
    </p>

    <h4>Note</h4>
    <p>
      The result assumes a single-stage rocket and ideal conditions. Real rockets may require more fuel due to losses, payload, and structural mass.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an estimate for educational purposes. Do not use for actual rocket design or flight planning.
    </p>
  `;

  window.calcRocketFuel = function () {
    const g0 = 9.80665; // Standard gravity in m/s²
    let m0 = +document.getElementById("mass").value;
    let deltaV = +document.getElementById("deltaV").value;
    let isp = +document.getElementById("isp").value;

    if (m0 <= 0 || deltaV <= 0 || isp <= 0) {
      document.getElementById("fuelResult").textContent = "Please enter valid values.";
      return;
    }

    let fuelMass = m0 * (1 - Math.exp(-deltaV / (g0 * isp)));
    document.getElementById("fuelResult").innerHTML = `<b>Fuel Required:</b> ${fuelMass.toFixed(2)} kg`;
  };

  return div;
}
