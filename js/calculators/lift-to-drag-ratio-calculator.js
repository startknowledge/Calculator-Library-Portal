export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Lift to Drag Ratio (L/D) Calculator</h3>

    <p>
      The Lift to Drag Ratio (L/D) is a key aerodynamic parameter that indicates
      how efficiently an aircraft generates lift compared to drag.
    </p>

    <form id="liftToDragRatioCalcForm">
      <label for="liftCoefficient">Lift Coefficient (C<sub>L</sub>):</label>
      <input type="number" id="liftCoefficient" step="0.01" required>

      <label for="dragCoefficient">Drag Coefficient (C<sub>D</sub>):</label>
      <input type="number" id="dragCoefficient" step="0.01" required>

      <button type="button" onclick="calculateLiftToDragRatio()">
        Calculate
      </button>
    </form>

    <div id="liftToDragRatioResult"></div>
    <br>

    <p><b>Formula:</b></p>
    <p>
      Lift to Drag Ratio (L/D) = Lift Coefficient (C<sub>L</sub>) ÷
      Drag Coefficient (C<sub>D</sub>)
    </p>

    <p><b>Example:</b></p>
    <p>
      If C<sub>L</sub> = 0.6 and C<sub>D</sub> = 0.03,<br>
      L/D = 0.6 ÷ 0.03 = <b>20</b>
    </p>

    <p><b>Why Lift-to-Drag Ratio is Important:</b></p>
    <p>
      A higher L/D ratio means better aerodynamic efficiency, longer glide range,
      improved fuel efficiency, and optimal aircraft performance.
    </p>

    <p><b>Disclaimer:</b> This calculator provides a simplified theoretical value.
    Real-world aircraft performance depends on speed, altitude, weight, and design.</p>
  `;

  window.calculateLiftToDragRatio = function () {
    const liftCoefficient = parseFloat(
      document.getElementById("liftCoefficient").value
    );
    const dragCoefficient = parseFloat(
      document.getElementById("dragCoefficient").value
    );

    if (
      isNaN(liftCoefficient) ||
      isNaN(dragCoefficient) ||
      dragCoefficient === 0
    ) {
      document.getElementById("liftToDragRatioResult").innerHTML =
        "<b>Please enter valid values (Drag Coefficient cannot be zero).</b>";
      return;
    }

    const liftToDragRatio = liftCoefficient / dragCoefficient;

    document.getElementById("liftToDragRatioResult").innerHTML = `
      <h4>Result</h4>
      <p>
        Lift to Drag Ratio (L/D):
        <b>${liftToDragRatio.toFixed(2)}</b>
      </p>
    `;
  };

  return div;
}
