export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Lighting Cost Calculator</h3>

    <p>
      This calculator helps estimate the total cost of installing lights
      based on the number of lights and the cost per light.
    </p>

    <label>Number of Lights</label>
    <input type="number" id="lights" value="20" min="1">

    <label>Cost per Light (₹)</label>
    <input type="number" id="rate" value="800" min="0">

    <button onclick="calcLight()">Calculate</button>

    <p id="lightResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>Total Lighting Cost = Number of Lights × Cost per Light</p>

    <p><b>Example:</b></p>
    <p>
      If you install 20 lights at ₹800 each,<br>
      Total Cost = 20 × 800 = <b>₹16,000</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for homes, offices, street lighting projects,
      and smart city infrastructure planning.
    </p>

    <p><b>Disclaimer:</b> This calculator estimates only fixture costs.
    Installation, wiring, maintenance, and electricity costs are not included.</p>
  `;

  window.calcLight = function () {
    const lights = parseFloat(document.getElementById("lights").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(lights) || isNaN(rate) || lights <= 0 || rate < 0) {
      document.getElementById("lightResult").innerHTML =
        "<b>Please enter valid input values.</b>";
      return;
    }

    const total = lights * rate;

    document.getElementById("lightResult").innerHTML =
      `<b>Total Lighting Cost:</b> ₹${total.toLocaleString()}`;
  };

  return div;
}
