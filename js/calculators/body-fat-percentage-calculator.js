export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Waist (cm)</label>
    <input id="waist">

    <label>Neck (cm)</label>
    <input id="neck">

    <label>Height (cm)</label>
    <input id="height">

    <button onclick="calcFat()">Calculate</button>
    <p id="fatResult"></p><br>
    <p><u>Explanation about Body Fat Percentage</u> :</p>
    <p>Body Fat Percentage is a measure of the proportion of fat in your body compared to your total body weight. It is an important indicator of overall health and fitness, as excessive body fat can increase the risk of various health conditions such as heart disease, diabetes, and hypertension.</p>
    <p>The U.S. Navy Method is a commonly used formula to estimate body fat percentage based on measurements of the waist, neck, and height. The formula
    for calculating body fat percentage using the U.S. Navy Method for men is as follows:</p>
    <p><b>Body Fat % = 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76</b></p>
    <p><u>Where:</u></p>
    <ul>
      <li><b>waist</b> is the circumference of the waist in centimeters.</li>
      <li><b>neck</b> is the circumference of the neck in centimeters.</li>
      <li><b>height</b> is the height in centimeters.</li>
    </ul>
    <p>For example, if a man has a waist circumference of 85 cm, a neck circumference of 40 cm, and a height of 175 cm, his body fat percentage would be calculated as follows:</p>
    <p>Body Fat % = 86.010 × log10(85 - 40) - 70.041 × log10(175) + 36.76 ≈ 18.12%</p>
    <p>It is important to note that while the U.S. Navy Method provides a convenient way to estimate body fat percentage, it may not be as accurate as other methods such as DEXA scans or hydrostatic weighing. For a more precise assessment of body fat percentage, consider consulting a healthcare professional or fitness expert.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of body fat percentage. For specific health assessments, please consult a qualified healthcare professional.</p>
    <br>

  `;

  window.calcFat = function () {
    let fat = 86.010 * Math.log10(waist.value - neck.value)
            - 70.041 * Math.log10(height.value) + 36.76;

    fatResult.innerHTML = `<b>Body Fat:</b> ${fat.toFixed(2)} %`;
  };

  return div;
}
