export default function () {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>Time Dilation Calculator</h3>
        <p>This calculator estimates time dilation according to Einstein's special relativity formula. Time slows down for an object moving at high velocity relative to a stationary observer.</p>

        <label>Velocity of Object (m/s)</label>
        <input id="velocity" value="299792458">

        <label>Speed of Light (m/s)</label>
        <input id="c" value="299792458">

        <button onclick="calcTimeDilation()">Calculate</button>

        <p id="timeDilationResult"></p>
        <br>
        <p><b>Formula:</b> Δt' = Δt / √(1 - v²/c²)</p>
        <p><b>Δt:</b> Proper time (stationary observer), <b>Δt'</b>: Dilated time, <b>v:</b> velocity, <b>c:</b> speed of light</p>
        <p><b>Example:</b> If a spaceship moves at 0.8c, time for the crew slows down relative to Earth.</p>
        <p><b>Note:</b> Ensure velocity &lt; speed of light. Input in meters/second.</p>
        <p><b>Disclaimer:</b> For educational/reference purposes only. Relativistic effects are significant only at near-light speeds.</p>
    `;

    window.calcTimeDilation = function () {
        const velocity = +document.getElementById("velocity").value;
        const c = +document.getElementById("c").value;

        if (velocity <= 0 || c <= 0 || velocity >= c) {
            timeDilationResult.innerHTML = "❌ Please enter valid positive values (velocity must be less than speed of light).";
            return;
        }

        const timeDilation = 1 / Math.sqrt(1 - (velocity ** 2 / c ** 2));

        timeDilationResult.innerHTML = `<b>Time Dilation Factor:</b> ${timeDilation.toFixed(5)} ×`;
    };

    return div;
}
