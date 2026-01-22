export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Floor Area Ratio (FAR) Calculator<br> FAR = Total Built-up Area / Plot Area</h3>

    <label>Total Built-up Area (sq.ft)</label>
    <input id="built" value="4000">

    <label>Plot Area (sq.ft)</label>
    <input id="plot" value="2000">

    <button onclick="calcFAR()">Calculate</button>
    <p id="farResult"></p>
    <br>
    <hr>
    <h4>About Floor Area Ratio (FAR)</h4>
    <p>Floor Area Ratio (FAR) is a measure used in urban planning to determine the density of a building on a given plot of land. It is calculated by dividing the total built-up area of a building by the area of the plot on which it is constructed. A higher FAR indicates a denser development, while a lower FAR suggests more open space relative to the built area. FAR regulations are often set by local governments to control urban growth, manage infrastructure demands, and ensure adequate light and air for residents.</p>
    <p>For example, if a building has a total built-up area of 4,000 square feet on a plot of land measuring 2,000 square feet, the FAR would be 2.0 (4000 / 2000). This means that the building's total floor area is twice the size of the plot area.</p>
    <p>Understanding FAR is crucial for architects, developers, and urban planners as it influences building design, land use planning, and zoning regulations. It helps in maintaining a balance between built-up areas and open spaces, contributing to sustainable urban development.</p>
    <p>In summary, Floor Area Ratio is a key metric in urban planning that helps regulate building density and land use, ensuring that developments are in line with community standards and infrastructure capabilities.</p>
    <p>For more information, visit <a href="https://en.wikipedia.org/wiki/Floor_area_ratio" target="_blank">Wikipedia: Floor Area Ratio</a>.</p>
    <p>Calculator by <a href="https://www.calculators.tech" target="_blank">calculators.tech</a></p>
    <p>&copy; 2024 calculators.tech</p>
    <br>

  `;

  window.calcFAR = function () {
    let built = +document.getElementById("built").value;
    let plot = +document.getElementById("plot").value;

    let far = built / plot;

    document.getElementById("farResult").innerHTML =
      `<b>FAR Value:</b> ${far.toFixed(2)}`;
  };

  return div;
}
