export default function () {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>Orbit Time Calculator</h3>
        <label>Orbital Radius (m)</label>
        <input id="radius" value="6.771e6">
        <label>Gravitational Constant (m³/kg·s²)</label>
        <input id="G" value="6.67430e-11">
        <label>Mass of Central Body (kg)</label>
        <input id="mass" value="5.972e24">
        <button onclick="calcOrbitTime()">Calculate</button>
        <p id="orbitTimeResult"></p>
    `;
    window.calcOrbitTime = function () {
        const radius = +document.getElementById("radius").value;
        const G = +document.getElementById("G").value;
        const mass = +document.getElementById("mass").value;

        if (radius <= 0 || G <= 0 || mass <= 0) {
            orbitTimeResult.textContent = "Please enter valid values.";
            return;
        }

        const orbitTime = 2 * Math.PI * Math.sqrt(radius ** 3 / (G * mass));
        orbitTimeResult.textContent = `Orbit Time: ${orbitTime.toFixed(2)} seconds`;
    };
    return div;
}