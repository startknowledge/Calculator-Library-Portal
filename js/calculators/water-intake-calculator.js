export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Daily Water Intake Calculator</h2>
    <p>This calculator estimates the recommended daily water intake based on your body weight.</p>

    <div class="form-group">
      <label>Weight (kg)</label>
      <input type="number" id="waterWeight" placeholder="Enter your weight in kg">
    </div>

    <button onclick="calcWater()">Calculate</button>
    <p id="waterResult"></p>

    <br>
    <p><b>Explanation:</b> Daily water requirement depends on body weight and activity level. This calculator uses a simple guideline based on weight.</p>
    <p><b>Formula:</b> <i>Water Intake (L/day) = Weight (kg) × 0.033</i></p>
    <p><b>Calculator is a tool:</b> Helps individuals maintain proper hydration levels.</p>
    <p><b>Relative Note:</b> The result is an average estimate and may vary depending on climate, activity, and health conditions.</p>
    <p><b>Based On:</b> General health guidelines for daily water consumption.</p>
    <p><b>To Use the Calculator:</b> Enter your weight in kilograms and click "Calculate".</p>
    <p><b>Note:</b> Ensure weight is entered in kg for accurate results.</p>
    <p><b>It is important:</b> Drink according to thirst and consult a doctor for special medical conditions.</p>
    <p><b>Disclaimer:</b> This is an estimation only. The developer is not responsible for any health decisions made based on this calculator.</p>
    <br><hr>
  `;

  window.calcWater = function () {
    const weight = parseFloat(document.getElementById("waterWeight").value);

    if (isNaN(weight) || weight <= 0) {
      waterResult.innerHTML = "❌ Please enter a valid positive weight.";
      return;
    }

    const water = weight * 0.033;
    waterResult.innerHTML = `<b>Water Intake:</b> ${water.toFixed(2)} L/day`;
  };

  return div;
}
