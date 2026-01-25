export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reactor Volume Calculator</h3>

    <p>
      This calculator is used in chemical engineering to determine the required
      reactor volume based on the flow rate and residence time.
    </p>

    <label>Flow Rate (m³/hr)</label>
    <input type="number" id="flow" value="5">

    <label>Residence Time (hr)</label>
    <input type="number" id="time" value="2">

    <button onclick="calcReactor()">Calculate</button>

    <div id="reactorResult"></div>

    <hr>

    <h4>Explanation</h4>
    <p>
      Reactor volume represents the space required for reactants to stay inside
      the reactor for a specific duration to achieve the desired conversion.
      It is directly proportional to the flow rate and residence time.
    </p>

    <h4>Formula</h4>
    <p>
      <b>Reactor Volume (V) = Flow Rate (Q) × Residence Time (τ)</b>
    </p>

    <h4>Where</h4>
    <p>
      Q = Volumetric flow rate (m³/hr)<br>
      τ = Residence time (hours)
    </p>

    <h4>How to Use</h4>
    <p>
      1. Enter the flow rate of the fluid.<br>
      2. Enter the required residence time.<br>
      3. Click the Calculate button to get reactor volume.
    </p>

    <h4>Example</h4>
    <p>
      Flow Rate = 5 m³/hr<br>
      Residence Time = 2 hr<br>
      Reactor Volume = 10 m³
    </p>

    <h4>Note</h4>
    <p>
      This formula is commonly applied to ideal reactors such as Continuous Stirred
      Tank Reactors (CSTR) under steady-state conditions.
    </p>

    <h4>Disclaimer</h4>
    <p>
      This calculator provides a simplified estimation for educational purposes.
      Actual reactor design may require additional parameters such as reaction
      kinetics, temperature, pressure, and safety factors.
    </p>
  `;

  window.calcReactor = function () {
    let flow = parseFloat(document.getElementById("flow").value);
    let time = parseFloat(document.getElementById("time").value);

    if (isNaN(flow) || isNaN(time)) {
      document.getElementById("reactorResult").innerHTML =
        "<b>Please enter valid values.</b>";
      return;
    }

    let volume = flow * time;

    document.getElementById("reactorResult").innerHTML =
      `<b>Reactor Volume:</b> ${volume.toFixed(2)} m³`;
  };

  return div;
}
