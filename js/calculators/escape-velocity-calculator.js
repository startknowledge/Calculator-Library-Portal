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
        <br>
        <p><u>Explanation about Escape Velocity Calculator</u> :</p>
        <p>The Escape Velocity Calculator is a scientific tool designed to help users determine the minimum velocity required for an object to escape the gravitational pull of a celestial body, such as a planet or moon. By inputting the mass and radius of the central body, users can quickly calculate the escape velocity needed to break free from its gravitational influence.</p>
        <p>The escape velocity is calculated using the formula: v = √(2GM/r), where G is the gravitational constant (6.67430e-11 m³ kg⁻¹ s⁻²), M is the mass of the central body, and r is its radius. This formula takes into account both the gravitational force exerted by the body and the distance from its center.</p>
        <p>To use the calculator, simply enter the mass of the central body in kilograms and its radius in meters. After clicking the "Calculate" button, the tool will compute and display the escape velocity in meters per second (m/s).</p> 
        <p>This calculator is particularly useful for students, educators, and space enthusiasts who are interested in understanding the dynamics of celestial bodies and space travel. By knowing the escape velocity, users can gain insights into the energy requirements for launching spacecraft and the challenges associated with leaving a planet's gravitational field.</p>
        <p>In summary, the Escape Velocity Calculator is a valuable resource for anyone interested in astrophysics and space exploration, providing clarity on the velocity needed to overcome gravitational forces and aiding in effective scientific understanding.</p>
        <p><b>Note:</b> This calculator provides an estimate of escape velocity based on the inputs provided and assumes a spherical, non-rotating body with no atmosphere.</p> 
        <p>For personalized advice and detailed astrophysical calculations, consider consulting with an astrophysicist or space science expert.</p>
        <p>Happy Calculating!</p>
        <p>-- The Calculators Team</p>
        <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified astrophysics professional for critical space mission planning decisions.</p>
        <br>
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