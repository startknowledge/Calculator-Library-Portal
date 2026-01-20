export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Reactor Volume = Flow Rate × Residence Time</h3>

    <label>Flow Rate (m³/hr)</label>
    <input id="flow" value="5">

    <label>Residence Time (hr)</label>
    <input id="time" value="2">

    <button onclick="calcReactor()">Calculate</button>
    <p id="reactorResult"></p>
  `;

  window.calcReactor = function () {
    let flow = +document.getElementById("flow").value;
    let time = +document.getElementById("time").value;

    reactorResult.innerHTML =
      `<b>Reactor Volume:</b> ${(flow * time).toFixed(2)} m³`;
  };

  return div;
}
