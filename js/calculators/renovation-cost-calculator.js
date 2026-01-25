export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Renovation Cost Calculator</h3>

    <p>
      This Renovation Cost Calculator helps estimate the total cost of renovating
      a residential or commercial property based on the renovation area and
      cost per square foot.
    </p>

    <label>Renovation Area (sq ft)</label>
    <input id="area" value="600" placeholder="Enter renovation area">

    <label>Renovation Cost per sq ft (₹)</label>
    <input id="rate" value="900" placeholder="Enter cost per sq ft">

    <button onclick="calcReno()">Calculate</button>
    <p id="renoResult"></p>

    <hr>

    <h4>Explanation</h4>
    <p>
      Renovation cost depends on factors such as material quality, labor charges,
      design complexity, and location. This calculator provides a quick estimate
      using a simple area-based pricing method.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Total Renovation Cost = Renovation Area × Cost per sq ft</b>
    </p>

    <h4>How to Use the Calculator</h4>
    <p>
      1. Enter the total area to be renovated in square feet.<br>
      2. Enter the renovation cost per square foot.<br>
      3. Click on the Calculate button to get the estimated renovation cost.
    </p>

    <h4>Example</h4>
    <p>
      Renovation Area = 600 sq ft<br>
      Cost per sq ft = ₹900<br>
      <b>Total Renovation Cost = ₹5,40,000</b>
    </p>

    <h4>Note</h4>
    <p>
      Renovation costs may vary depending on material quality, labor rates,
      city location, and contractor charges.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides an approximate estimate for informational purposes only.
      Actual renovation costs may differ based on site conditions and market prices.
    </p>
  `;

  window.calcReno = function () {
    let area = parseFloat(document.getElementById("area").value);
    let rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(area) || isNaN(rate)) {
      document.getElementById("renoResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let totalCost = area * rate;

    document.getElementById("renoResult").innerHTML =
      `<b>Total Renovation Cost:</b> ₹${totalCost.toFixed(2)}`;
  };

  return div;
}
