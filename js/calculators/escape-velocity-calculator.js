export default function () {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>Escape Velocity Calculator</h3>
        <label>Mass of Central Body (kg)</label>
        <input id="mass" value="5.972e24">
        <label>Radius of Central Body (m)</label>
        <input id="radius" value="6.371e6">
        <button onclick="calcEscapeVelocity()">Calculate</button>
        <p id="escapeVelocityResult"></p>
    `;
    window.calcEscapeVelocity = function () {
        const mass = +document.getElementById("mass").value;
        const radius = +document.getElementById("radius").value;
        const G = 6.67430e-11; // Gravitational constant

        if (mass <= 0 || radius <= 0) {
            escapeVelocityResult.textContent = "Please enter valid values.";
            return;
        }

        const escapeVelocity = Math.sqrt(2 * G * mass / radius);
        escapeVelocityResult.textContent = `Escape Velocity: ${escapeVelocity.toFixed(2)} m/s`;
    };
    return div;
}