export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter patient weight (kg):</label>
    <input type="number" id="doseWeight" placeholder="Enter weight">

    <label>Enter dosage per kg (mg):</label>
    <input type="number" id="dosePerKg" placeholder="mg per kg">

    <button onclick="calculateDosage()">Calculate</button>
    <p id="dosageResult"></p>
    <br>
    <h3>Dosage Calculator</h3>
    <p>Calculate medicine dosage based on body weight.</p>
    <p><b>Explanation:</b></p>
    <p>Dosage is often prescribed per kilogram of body weight.</p>
    <p><b>Formula:</b></p>
    <p>Total Dosage (mg) = Weight × Dosage per kg</p>
    <p><b>Example:</b>  
    60 kg × 5 mg/kg = <b>300 mg</b></p>
    <p><b>Disclaimer:</b> Always follow doctor’s prescription.</p>
    <br>
  `;

  window.calculateDosage = function () {
    const weight = parseFloat(document.getElementById("doseWeight").value);
    const dose = parseFloat(document.getElementById("dosePerKg").value);
    if (isNaN(weight) || isNaN(dose)) return;

    const totalDose = (weight * dose).toFixed(2);
    document.getElementById("dosageResult").innerHTML =
      `<b>Total Dosage:</b> ${totalDose} mg`;
  };

  return div;
}
