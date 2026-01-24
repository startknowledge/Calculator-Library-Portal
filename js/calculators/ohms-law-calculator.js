export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Ohm's Law Calculator</h3>
    <p>Calculate Voltage using Ohm's Law: Voltage (V) = Current (I) × Resistance (R)</p>

    <label>Current (I in Ampere)</label>
    <input type="number" id="current" placeholder="e.g. 5">

    <label>Resistance (R in Ohm)</label>
    <input type="number" id="resistance" placeholder="e.g. 10">

    <button onclick="calcOhm()">Calculate</button>
    <p id="ohmResult"></p>
    <br>

    <p><b>Formula:</b><br>
      Voltage (V) = Current (I) × Resistance (R)
    </p>

    <p><b>Example:</b><br>
      Current = 5 A<br>
      Resistance = 10 Ω<br>
      Voltage = 5 × 10 = <b>50 V</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful for electronics students, engineers, and hobbyists to quickly calculate voltage across a resistor.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for educational purposes only.<br></p>
  `;

  window.calcOhm = function () {
    const I = parseFloat(document.getElementById("current").value);
    const R = parseFloat(document.getElementById("resistance").value);

    if (isNaN(I) || isNaN(R) || I < 0 || R < 0) {
      document.getElementById("ohmResult").innerHTML = "Please enter valid positive numbers.";
      return;
    }

    const V = I * R;
    document.getElementById("ohmResult").innerHTML = `<b>Voltage:</b> ${V} V`;
  };

  return div;
}
