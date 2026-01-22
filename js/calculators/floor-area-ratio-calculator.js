export default function () {
  const div = document.createElement("div");

  div.innerHTML = newFunction();

  window.calcFAR = function () {
    let built = +document.getElementById("built").value;
    let plot = +document.getElementById("plot").value;

    let far = built / plot;

    document.getElementById("farResult").innerHTML =
      `<b>FAR Value:</b> ${far.toFixed(2)}`;
  };

  return div;

  function newFunction() {
    return `
    <h3>Floor Area Ratio (FAR) Calculator<br> FAR = Total Built-up Area / Plot Area</h3>

    <label>Total Built-up Area (sq.ft)</label>
    <input id="built" value="4000">

    <label>Plot Area (sq.ft)</label>
    <input id="plot" value="2000">

    <button onclick="calcFAR()">Calculate</button>
    <p id="farResult"></p>
    <br>   
    <p><u>Explanation about Floor Area Ratio (FAR)</u> :</p>
    <p>The Floor Area Ratio (FAR) is a crucial metric in urban planning that measures the total built-up area of a building relative to the area of the plot on which it is constructed. It is calculated by dividing the total built-up area by the plot area. A higher FAR indicates a denser development, while a lower FAR suggests more open space relative to the built area.</p>
    <p>For example, if a building has a total built-up area of 4,000 square feet on a plot of land measuring 2,000 square feet, the FAR would be 2.0 (4000 / 2000). This means that the building's total floor area is twice the size of the plot area.</p>
    <p>Understanding FAR is essential for architects, developers, and urban planners as it influences building design, land use planning, and zoning regulations. It helps in maintaining a balance between built-up areas and open spaces, contributing to sustainable urban development.</p>
    <p>When planning a construction project, it is important to consider the FAR limits set by local zoning laws, as exceeding these limits can lead to legal complications and impact the overall design of the building.</p>
    <p>formula to calculate floor area ratio based on appliances:</p>
    <p>formal FAR = (Total Built-up Area including appliances) / Plot Area</p>
    <p>Where, Total Built-up Area including appliances = Built-up Area + Sum of areas occupied by appliances</p>
    <p>Areas occupied by common appliances can be estimated as follows:</p>
    <ul>
      <li>Air Conditioner: 100 sq.ft per unit</li>
      <li>Refrigerator: 50 sq.ft per unit</li>
      <li>Washing Machine: 30 sq.ft per unit</li>
      <li>Microwave Oven: 20 sq.ft per unit</li>
      <li>Television: 15 sq.ft per unit</li>
    </ul>
    <p>To calculate the FAR including appliances, follow these steps:</p>
    <ol>
      <li>Calculate the total built-up area including appliances:</li>
      <ul>
        <li>Total Built-up Area including appliances = Built-up Area + Sum of areas occupied by appliances</li>
      </ul>
      <li>Divide the total built-up area including appliances by the plot area:</li>
      <ul>
        <li>FAR = (Total Built-up Area including appliances) / Plot Area</li>
      </ul>
    </ol>   
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a professional for critical electrical decisions.</p>
    <br>
    
  `;
  }
}
