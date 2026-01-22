export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Total Load (Watt)</label>
    <input type="number" id="load">

    <button onclick="calcInv()">Calculate</button>
    <p id="invResult"></p>
    <br>
    <p>The Inverter Backup Calculator helps you determine the required inverter capacity based on your total load in watts. By entering the total load, users can quickly calculate the recommended inverter size in volt-amperes (VA).</p>

    <p>This calculator is useful for individuals and businesses looking to ensure they have an adequate inverter to support their electrical load during power outages.</p>
    <p>Ensure that the total load input is accurate to get a reliable inverter size estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your total load in watts in the "Total Load" field. Click the "Calculate" button to see the recommended inverter size displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Total Load (Watt):</b> The total electrical load in watts that the inverter needs to support.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Required Inverter (VA):</b> The recommended inverter size in volt-amperes.</li>
    </ul>
    <p><b>Note:</b> Ensure that the total load input is accurate to get a reliable inverter size estimate.</p>
    <p><b>Example:</b> For a total load of 800 watts, the required inverter size would be 1000 VA.</p>
    <p><b>Formula:</b> Required Inverter (VA) = Total Load (Watt) / 0.8</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual inverter requirements may vary based on additional factors such as power factor, surge loads, and specific device characteristics.</p>
    <br>
  `;

  window.calcInv = function () {
    let va = load.value / 0.8;
    invResult.innerHTML =
      `<b>Required Inverter:</b> ${va.toFixed(0)} VA`;
  };

  return div;
}
