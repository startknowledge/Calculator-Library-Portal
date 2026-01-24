export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <h3>Percentage Calculator</h3>
    <p>Calculate the percentage of a value relative to the total.</p>

    <label>Value Obtained:</label>
    <input id="value" type="number" placeholder="Enter value"><br><br>

    <label>Total Value:</label>
    <input id="total" type="number" placeholder="Enter total"><br><br>

    <button id="btn">Calculate</button>
    <p id="r"></p>

    <p><b>Formula:</b> Percentage = (Value ÷ Total) × 100</p>
    <p><b>Example:</b> Value = 45, Total = 50 → Percentage = (45 ÷ 50) × 100 = <b>90%</b></p>
    <p><b>Disclaimer:</b> This calculator provides an estimate for informational purposes only.</p>
    <br>
  `;

  setTimeout(() => {
    document.getElementById("btn").onclick = () => {
      const v = +document.getElementById("value").value;
      const t = +document.getElementById("total").value;

      if (isNaN(v) || isNaN(t)) {
        document.getElementById("r").innerText = "Please enter valid numbers";
        return;
      }

      if (t === 0) {
        document.getElementById("r").innerText = "Total cannot be zero";
        return;
      }

      document.getElementById("r").innerText = "Percentage: " + ((v / t) * 100).toFixed(2) + "%";
    };
  }, 20);

  return box;
}
