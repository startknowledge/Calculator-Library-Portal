export default function () {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>Orbit Time Calculator</h3>
        <p>Calculate the orbital period (time for one complete orbit) of a satellite or celestial body using Kepler's 3rd law.</p>

        <label>Orbital Radius (m)</label>
        <input id="radius" value="6.771e6" placeholder="e.g. 6.771e6">

        <label>Gravitational Constant (m³/kg·s²)</label>
        <input id="G" value="6.67430e-11" placeholder="6.67430e-11">

        <label>Mass of Central Body (kg)</label>
        <input id="mass" value="5.972e24" placeholder="e.g. Earth mass 5.972e24">

        <button onclick="calcOrbitTime()">Calculate</button>
        <p id="orbitTimeResult"></p>

        <p><b>Formula:</b><br>
           Orbit Time (T) = 2π × √(r³ / (G × M))
        </p>

        <p><b>Example:</b><br>
           Orbital radius = 6.771×10⁶ m (approx. 400 km above Earth's surface)<br>
           G = 6.67430×10⁻¹¹ m³/kg·s²<br>
           Mass of Earth = 5.972×10²⁴ kg<br>
           Orbit Time ≈ 5559 seconds ≈ 92.65 minutes
        </p>

        <p><b>Use Case:</b><br>
           Useful for students, engineers, and enthusiasts to calculate satellite orbital periods.</p>

        <p><b>Disclaimer:</b><br>
           This calculator provides estimates based on ideal circular orbits. Actual orbital times may vary due to elliptical orbits, atmospheric drag, and perturbations.<br></p>
    `;

    window.calcOrbitTime = function () {
        const radius = +document.getElementById("radius").value;
        const G = +document.getElementById("G").value;
        const mass = +document.getElementById("mass").value;

        if (radius <= 0 || G <= 0 || mass <= 0) {
            orbitTimeResult.textContent = "Please enter valid positive values.";
            return;
        }

        const orbitTime = 2 * Math.PI * Math.sqrt(Math.pow(radius, 3) / (G * mass));
        orbitTimeResult.textContent = `Orbit Time: ${orbitTime.toFixed(2)} seconds (~${(orbitTime/60).toFixed(2)} minutes)`;
    };

    return div;
}
