export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter weight (kg):</label>
    <input type="number" id="bsaWeight" placeholder="Enter weight">

    <label>Enter height (cm):</label>
    <input type="number" id="bsaHeight" placeholder="Enter height">

    <button onclick="calculateBSA()">Calculate</button>
    <p id="bsaResult"></p>
    <br>
    <h3>Body Surface Area Calculator</h3>
    <p>Calculate Body Surface Area using Mosteller formula.</p>
    <p><b>Explanation:</b></p>
    <p>BSA is commonly used in medical dosage calculations.</p>
    <p><b>Formula:</b></p>
    <p>BSA = √[(Height × Weight) ÷ 3600]</p>
    <p><b>Example:</b>  
    Height 170 cm, Weight 65 kg → BSA ≈ <b>1.76 m²</b></p>
    <p><b>Disclaimer:</b> For reference only, consult medical professionals.</p>
    <br>
  `;

  window.calculateBSA = function () {
    const weight = parseFloat(document.getElementById("bsaWeight").value);
    const height = parseFloat(document.getElementById("bsaHeight").value);
    if (isNaN(weight) || isNaN(height)) return;

    const bsa = Math.sqrt((height * weight) / 3600).toFixed(2);
    document.getElementById("bsaResult").innerHTML =
      `<b>Body Surface Area:</b> ${bsa} m²`;
  };

  return div;
}
