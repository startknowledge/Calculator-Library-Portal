export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Gear Ratio = Driven Gear Teeth / Driver Gear Teeth</h3>

    <label>Driver Gear Teeth</label>
    <input id="driver" value="20">

    <label>Driven Gear Teeth</label>
    <input id="driven" value="60">

    <button onclick="calcGear()">Calculate</button>
    <p id="gearResult"></p>
    <br>
    <p>The Gear Ratio Calculator helps you determine the gear ratio between a driver gear and a driven gear based on the number of teeth on each gear. Simply enter the number of teeth for both gears and click "Calculate" to see the gear ratio.</p>
    <p>This calculator is useful for mechanical engineers, hobbyists, and anyone involved in designing or analyzing gear systems. It aids in understanding the relationship between gear sizes and their rotational speeds.</p> 
    <p><b>Note:</b> Ensure that the number of teeth inputs are accurate to get a reliable gear ratio.</p>
    <p><b>Example:</b> For a driver gear with 20 teeth and a driven gear with 60 teeth, the gear ratio would be 3:1.</p>
    <p><b>Formula:</b> Gear Ratio = Driven Gear Teeth / Driver Gear Teeth</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual gear performance may vary based on additional factors such as gear material, lubrication, and load conditions.</p>
    <br>
  `;

  window.calcGear = function () {
    let driver = +document.getElementById("driver").value;
    let driven = +document.getElementById("driven").value;

    let ratio = driven / driver;

    gearResult.innerHTML =
      `<b>Gear Ratio:</b> ${ratio.toFixed(2)} : 1`;
  };

  return div;
}
