export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Mixing Time Calculator</h3>

    <p>
      This calculator estimates the mixing time of a tank based on its volume
      and the flow rate of the incoming fluid.
    </p>

    <label>Tank Volume (m³)</label>
    <input type="number" id="vol" min="0" step="0.01" value="10" placeholder="e.g. 10">

    <label>Flow Rate (m³/min)</label>
    <input type="number" id="flow" min="0.01" step="0.01" value="0.5" placeholder="e.g. 0.5">

    <button onclick="calcMix()">Calculate</button>

    <p id="mixResult"></p>
    <br>

    <p><b>Formula:</b><br>
      Mixing Time = Tank Volume ÷ Flow Rate
    </p>

    <p><b>Example:</b><br>
      Tank Volume = 10 m³<br>
      Flow Rate = 0.5 m³/min<br>
      <b>Mixing Time = 20 minutes</b>
    </p>

    <p><b>Use Case:</b><br>
      Useful in chemical engineering, water treatment, process industries,
      and any situation involving tank mixing operations.
    </p>

    <p><b>Disclaimer:</b> This calculator provides an estimate for planning purposes only.</p><br>
  `;

  window.calcMix = function () {
    const vol = parseFloat(document.getElementById("vol").value);
    const flow = parseFloat(document.getElementById("flow").value);

    if (isNaN(vol) || isNaN(flow) || vol <= 0 || flow <= 0) {
      document.getElementById("mixResult").innerHTML =
        "<b>Please enter valid positive values.</b>";
      return;
    }

    const mixingTime = vol / flow;

    document.getElementById("mixResult").innerHTML =
      `<b>Mixing Time:</b> ${mixingTime.toFixed(2)} minutes`;
  };

  return div;
}
