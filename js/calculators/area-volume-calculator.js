export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
  <br>
  <h3>Area = Length × Width</h3>
  <h3>Volume = Area × Height</h3>
    <label>Length</label>
    <input type="number" id="L">

    <label>Width</label>
    <input type="number" id="W">

    <label>Height</label>
    <input type="number" id="H">

    <button onclick="calcAreaVol()">Calculate</button>
    <p id="areaVolResult"></p><br>
    <p><u>Explanation about Area and Volume Calculation</u> :</p>
    <p>Area and volume calculations are fundamental concepts in geometry that help us understand the size and capacity of different shapes and objects. The area refers to the amount of space covered by a two-dimensional shape, while volume refers to the amount of space occupied by a three-dimensional object.</p>
    <p>To calculate the area of a rectangle, we use the formula: Area = Length × Width. This means that by multiplying the length of the rectangle by its width, we can determine the total area it covers. For example, if a rectangle has a length of 5 meters and a width of 3 meters, its area would be 15 square meters (5 m × 3 m = 15 m²).</p>
    <p>Volume, on the other hand, is calculated for three-dimensional objects. For a rectangular prism (or cuboid), the formula for volume is: Volume = Area × Height. This means that by multiplying the area of the base (
Area = Length × Width) by the height of the prism, we can find out how much space it occupies. Continuing with our previous example, if the rectangular prism has a height of 4 meters, its volume would be 60 cubic meters (Area of base 15 m² × Height 4 m = 60 m³).</p>
    <p>Understanding how to calculate area and volume is essential in various fields such as architecture, engineering, and everyday problem-solving. It allows us to make informed decisions about space utilization, material requirements, and design considerations.</p>
    <p>For more detailed information, please refer to geometry textbooks or educational resources on area and volume calculations.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of area and volume calculation. For specific details, please consult official educational resources or professionals in relevant fields.</p>
    <br>

  `;

  window.calcAreaVol = function () {
    let area = L.value * W.value;
    let volume = area * H.value;

    areaVolResult.innerHTML =
      `<b>Area:</b> ${area} sq.m<br>
       <b>Volume:</b> ${volume} m³`;
  };

  return div;
}
