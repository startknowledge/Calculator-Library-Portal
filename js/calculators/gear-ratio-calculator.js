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
