export default function () {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>Time Dilation Calculator</h3>
        <label>Velocity (m/s)</label>
        <input id="velocity" value="299792458">
        <label>Speed of Light (m/s)</label>
        <input id="c" value="299792458">
        <button onclick="calcTimeDilation()">Calculate</button>
        <p id="timeDilationResult"></p>
    `;
    window.calcTimeDilation = function () {
        const velocity = +document.getElementById("velocity").value;
        const c = +document.getElementById("c").value;

        if (velocity <= 0 || c <= 0) {
            timeDilationResult.textContent = "Please enter valid values.";
            return;
        }

        const timeDilation = 1 / Math.sqrt(1 - (velocity ** 2 / c ** 2));
        timeDilationResult.textContent = `Time Dilation: ${timeDilation.toFixed(2)} seconds`;
    };
    return div;
}