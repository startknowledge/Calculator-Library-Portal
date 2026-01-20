export default function () {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>Gravity Force Calculator</h3>
        <label>Mass 1 (kg)</label>
        <input id="mass1" value="5.972e24">
        <label>Mass 2 (kg)</label>
        <input id="mass2" value="7.348e22">
        <label>Distance (m)</label>
        <input id="distance" value="3.844e8">
        <button onclick="calcGravityForce()">Calculate</button>
        <p id="gravityForceResult"></p>
    `;
    window.calcGravityForce = function () {
        const mass1 = +document.getElementById("mass1").value;
        const mass2 = +document.getElementById("mass2").value;
        const distance = +document.getElementById("distance").value;
        const G = 6.67430e-11; // Gravitational constant

        if (mass1 <= 0 || mass2 <= 0 || distance <= 0) {
            gravityForceResult.textContent = "Please enter valid values.";
            return;
        }

        const gravityForce = G * mass1 * mass2 / (distance ** 2);
        gravityForceResult.textContent = `Gravity Force: ${gravityForce.toFixed(2)} N`;
    };
    return div;
}