export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Resistor Color Code Calculator (Up to 6 Bands)</h3>

    <p>
      This calculator helps you determine the resistance, tolerance,
      and temperature coefficient of resistors based on their color bands.
    </p>

    <label>Band 1 (Digit)</label>
    <select id="b1">${digitOptions()}</select>

    <label>Band 2 (Digit)</label>
    <select id="b2">${digitOptions()}</select>

    <label>Band 3 (Digit - Optional)</label>
    <select id="b3">${digitOptions(true)}</select>

    <label>Multiplier</label>
    <select id="mul">${multiplierOptions()}</select>

    <label>Tolerance</label>
    <select id="tol">${toleranceOptions()}</select>

    <label>Temperature Coefficient</label>
    <select id="tempCoeff">${tempOptions()}</select>

    <button onclick="calcResistor()">Calculate</button>
    <p id="resResult"></p>

    <hr>

    <h4>Formula</h4>
    <p>
      <b>Resistance (Ω)</b> = (Digit1 Digit2 [Digit3]) × Multiplier<br>
      Tolerance and Temperature Coefficient are read directly from bands.
    </p>

    <h4>How to Use</h4>
    <p>
      1. Select the color of Band 1, Band 2, and Band 3 (optional).<br>
      2. Select the multiplier color.<br>
      3. Select tolerance and temperature coefficient colors.<br>
      4. Click "Calculate" to get the resistance, tolerance, and temp coefficient.
    </p>

    <h4>Example</h4>
    <p>
      Band 1 = Red (2), Band 2 = Violet (7), Band 3 = Yellow (4), Multiplier = Orange (×1k), Tolerance = Gold (±5%)<br>
      Resistance = 274 × 1,000 = 274,000 Ω = 274 kΩ ±5%
    </p>

    <h4>Note</h4>
    <p>
      3-band resistors omit the third digit. Tolerance and temperature coefficient are optional but important for precise circuits.
    </p>

    <h4>Disclaimer</h4>
    <p>
      Results are for reference only. Verify resistor values with a multimeter for critical applications.
    </p>
  `;

  window.calcResistor = function () {
    let d1 = getDigit("b1");
    let d2 = getDigit("b2");
    let d3 = getDigit("b3"); // optional

    let digits = d3 >= 0 ? `${d1}${d2}${d3}` : `${d1}${d2}`;

    let multiplier = parseFloat(document.getElementById("mul").value);
    let tolerance = document.getElementById("tol").value;
    let tempCoeff = document.getElementById("tempCoeff").value;

    let resistance = parseInt(digits) * multiplier;

    document.getElementById("resResult").innerHTML = `
      <b>Resistance:</b> ${resistance.toLocaleString()} Ω<br>
      <b>Tolerance:</b> ${tolerance}<br>
      <b>Temperature Coefficient:</b> ${tempCoeff}
    `;
  };

  function getDigit(id) {
    let v = document.getElementById(id).value;
    return v === "" ? -1 : parseInt(v);
  }

  return div;
}

/* ---------- OPTIONS HELPERS ---------- */

function digitOptions(optional = false) {
  const colors = [
    ["Black", 0], ["Brown", 1], ["Red", 2], ["Orange", 3],
    ["Yellow", 4], ["Green", 5], ["Blue", 6],
    ["Violet", 7], ["Grey", 8], ["White", 9]
  ];

  let html = optional ? `<option value="">-- None --</option>` : "";
  colors.forEach(c => {
    html += `<option value="${c[1]}">${c[0]}</option>`;
  });
  return html;
}

function multiplierOptions() {
  const m = [
    ["Black ×1", 1],
    ["Brown ×10", 10],
    ["Red ×100", 100],
    ["Orange ×1k", 1000],
    ["Yellow ×10k", 10000],
    ["Green ×100k", 100000],
    ["Blue ×1M", 1000000],
    ["Gold ×0.1", 0.1],
    ["Silver ×0.01", 0.01]
  ];
  return m.map(x => `<option value="${x[1]}">${x[0]}</option>`).join("");
}

function toleranceOptions() {
  const t = [
    ["Brown ±1%", "±1%"],
    ["Red ±2%", "±2%"],
    ["Gold ±5%", "±5%"],
    ["Silver ±10%", "±10%"]
  ];
  return t.map(x => `<option value="${x[1]}">${x[0]}</option>`).join("");
}

function tempOptions() {
  const tc = [
    ["None", "-"],
    ["Brown 100 ppm", "100 ppm/°C"],
    ["Red 50 ppm", "50 ppm/°C"],
    ["Orange 15 ppm", "15 ppm/°C"],
    ["Yellow 25 ppm", "25 ppm/°C"]
  ];
  return tc.map(x => `<option value="${x[1]}">${x[0]}</option>`).join("");
}
