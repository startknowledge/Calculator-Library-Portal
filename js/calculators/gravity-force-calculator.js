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
        <br>
        <p>The Gravity Force Calculator computes the gravitational force between two masses based on Newton's law of universal gravitation. By inputting the masses and the distance between them, users can determine the gravitational attraction in newtons (N).</p>
        <p>This calculator is useful for students, educators, and scientists who need to understand gravitational interactions in physics and astronomy. It aids in visualizing the effects of mass and distance on gravitational force.</p> 
        <p><b>Note:</b> Ensure that the mass and distance inputs are accurate to get a reliable gravitational force calculation.</p>
        <p><b>Example:</b> For Earth (5.972 × 10^24 kg) and Moon (7.348 × 10^22 kg) separated by 3.844 × 10^8 m, the gravitational force is approximately 1.98 × 10^20 N.</p>
        <p><b>Formula:</b> F = G * (m1 * m2) / r², where G is the gravitational constant (6.67430 × 10^-11 N·m²/kg²)</p>
        <p><b>Disclaimer:</b> This calculator provides an estimate and actual gravitational forces may vary based on additional factors such as relativistic effects and non-point masses.</p>
        <br>
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