export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Home Insurance Calculator</h3>
    <p><b>Formula:</b> Property Value × Premium Rate (%)</p>

    <label>Property Value (₹)</label>
    <input type="number" id="prop" value="4000000">

    <label>Premium Rate (%)</label>
    <input type="number" id="rate" value="0.3">

    <button onclick="calcInsurance()">Calculate</button>
    <p id="insResult"></p>
    <br>
    <p>The Home Insurance Calculator helps you estimate the annual insurance premium for your home based on its property value and the premium rate. By entering these values, users can quickly calculate the cost of insuring their home.</p>
    <p>This calculator is useful for homeowners and prospective buyers who want to understand the insurance costs associated with their property. It provides a quick way to evaluate how much they need to budget for home insurance.</p>  
    <p>Ensure that the property value and premium rate inputs are accurate to get a reliable insurance premium estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your home's property value in the "Property Value" field and the insurance premium rate in the "Premium Rate" field. Click the "Calculate" button to see the estimated annual insurance premium displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Property Value (₹):</b> The total market value of your home.</li>
      <li><b>Premium Rate (%):</b> The annual insurance premium rate as a percentage of the property value.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Annual Insurance Premium (₹):</b> The estimated annual cost to insure your home based on the provided inputs.</li>
    </ul>
    <p><b>Note:</b> Ensure that the property value and premium rate inputs are accurate to get a reliable insurance premium estimate.</p>
    <p><b>Example:</b> For a property value of ₹40,00,000 and a premium rate of 0.3%, the annual insurance premium would be approximately ₹12,000.</p>
    <p><b>Formula:</b> Annual Insurance Premium = Property Value × Premium Rate (%)</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual insurance premiums may vary based on additional factors such as location, coverage options, and insurer policies.</p>
    <br>
  `;

  window.calcInsurance = function () {
    let propValue =
      +document.getElementById("prop").value;

    let rateValue =
      +document.getElementById("rate").value / 100;

    let premium = propValue * rateValue;

    document.getElementById("insResult").innerHTML =
      `<b>Annual Insurance Premium:</b> ₹${premium.toFixed(2)}`;
  };

  return div;
}
