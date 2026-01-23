export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter population of area:</label>
    <input type="number" id="population" placeholder="Enter population">

    <label>Enter area in sq. km:</label>
    <input type="number" id="area" placeholder="Enter area">

    <button onclick="calculateDensity()">Calculate</button>
    <p id="densityResult"></p>
    <br>
    <h3>Urban Population Density Calculator</h3>
    <p>This calculator estimates the population density of an urban area based on user inputs.</p>
    <p>Based on the total population and area size, it calculates the density in people per square kilometer.</p>
    <p>It is useful for urban planners and demographers.</p>
    <p>Note: Population density is a key metric for urban planning and resource allocation.</p>
    <h4>How to Use:</h4>
    <ol>
      <li>Input the total population of the urban area.</li>
      <li>Enter the area size in square kilometers.</li>
      <li>Click "Calculate" to see the population density.</li>
    </ol>
    <h4>Details:</h4>
    <p>Estimate population density (people per sq. km) in urban areas.</p>
    <p><b>Explanation:</b></p>
    <p>Population density helps urban planners allocate resources efficiently.</p>
    <p><b>Formula:</b></p>
    <p>Population Density = Population ÷ Area</p>
    <p><b>Example:</b>  
    50,000 people ÷ 10 sq.km = <b>5,000 people/sq.km</b>.</p>
    <p><b>Disclaimer:</b> Population may fluctuate; density is approximate.</p>
    <br>
  `;

  window.calculateDensity = function () {
    const pop = parseFloat(document.getElementById("population").value);
    const area = parseFloat(document.getElementById("area").value);
    if (isNaN(pop) || isNaN(area) || area === 0) return;

    const density = (pop / area).toFixed(2);
    document.getElementById("densityResult").innerHTML =
      `<b>Population Density:</b> ${density} people/sq.km`;
  };

  return div;
}
