export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br>
  <h3>Concrete Volume Calculator</h3>
  <h3>Concrete Volume (m³) = Length (m) × Width (m) × Height (m)</h3>
    <label>Length (m)</label>
    <input type="number" id="l">

    <label>Width (m)</label>
    <input type="number" id="w">

    <label>Height (m)</label>
    <input type="number" id="h">

    <button onclick="calcConcrete()">Calculate</button>
    <p id="concResult"></p>
    <br>
    <p><u>Explanation about Concrete Volume Calculator</u> :</p>
    <p>The Concrete Volume Calculator is a practical tool designed to help construction professionals, contractors, and DIY enthusiasts accurately calculate the volume of concrete required for various construction projects. Whether you're planning to pour a new driveway, build a foundation, or create a patio, this calculator simplifies the process of determining the amount of concrete needed based on the dimensions of the area to be filled.</p>
    <p>To use the calculator, simply input the length, width, and height (or depth) of the area in meters. The calculator then computes the total volume of concrete required in cubic meters (m³) by multiplying these three dimensions together. This information is crucial for ordering the right amount of concrete, minimizing waste, and ensuring that your project stays within budget.</p>
    <p>This calculator is especially useful for estimating costs and planning logistics for construction projects. By providing an accurate volume calculation, it helps
    users make informed decisions about material purchases and project timelines.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional construction advice or detailed project planning.</p>
    <br>
  `;

  window.calcConcrete = function () {
    let volume = l.value * w.value * h.value;

    concResult.innerHTML =
      `<b>Concrete Volume:</b> ${volume.toFixed(2)} m³`;
  };

  return div;
}
