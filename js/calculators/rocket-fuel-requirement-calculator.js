export default function () {
    const div = document.createElement("div");

  div.innerHTML = `
    <h3>Rocket Fuel Requirement Calculator</h3>
    <label>Mass of Rocket (kg)</label>
    <input id="mass" value="1000">
    <label>Delta-V Required (m/s)</label>
    <input id="deltaV" value="9500">
    <label>Specific Impulse (s)</label>
    <input id="isp" value="300">
    <button onclick="calcRocketFuel()">Calculate</button>
    <p id="fuelResult"></p>
  `;
    window.calcRocketFuel = function () {
    const g0 = 9.80665; // Standard gravity in m/s²
    let m0 = +document.getElementById("mass").value;
    let deltaV = +document.getElementById("deltaV").value;
    let isp = +document.getElementById("isp").value;

    if (m0 <= 0 || deltaV <= 0 || isp <= 0) {
        fuelResult.textContent = "Please enter valid values.";
        return;
    }

    let fuelMass = m0 * (1 - Math.exp(-deltaV / (g0 * isp)));
    fuelResult.textContent = `Fuel Required: ${fuelMass.toFixed(2)} kg`;
};  
    return div;
}   