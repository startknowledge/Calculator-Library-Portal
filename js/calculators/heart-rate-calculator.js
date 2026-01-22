export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Age</label>
    <input id="hrAge">

    <button onclick="calcHR()">Calculate</button>
    <p id="hrResult"></p>
    <br>
    <p>The Heart Rate Calculator helps you estimate your maximum heart rate based on your age. By entering your age, users can quickly calculate their maximum heart rate in beats per minute (bpm).</p>
    <p>This calculator is useful for individuals who want to monitor their cardiovascular health and optimize their exercise routines. Knowing your maximum heart rate can help you set appropriate intensity levels for workouts.</p>
    <p><b>Note:</b> Ensure that the age input is accurate to get a reliable maximum heart rate estimate.</p>
    <p><b>Example:</b> For a 30-year-old individual, the maximum heart rate would be 190 bpm.</p>
    <p><b>Formula:</b> Maximum Heart Rate = 220 - Age</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual maximum heart rates may vary based on individual health conditions, fitness levels, and other factors.</p>
    <br>
  `;

  window.calcHR = function () {
    let hr = 220 - hrAge.value;
    hrResult.innerHTML = `<b>Max Heart Rate:</b> ${hr} bpm`;
  };

  return div;
}
