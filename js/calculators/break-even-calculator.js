export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Break Even Calculator</h3>

    <label>Fixed Cost (₹)</label>
    <input id="fixed" value="50000">

    <label>Selling Price per Unit (₹)</label>
    <input id="sp" value="500">

    <label>Variable Cost per Unit (₹)</label>
    <input id="vc" value="300">

    <button onclick="calcBE()">Calculate</button>
    <p id="beResult"></p>
  `;

  window.calcBE = function () {
    let fixed = +document.getElementById("fixed").value;
    let sp = +document.getElementById("sp").value;
    let vc = +document.getElementById("vc").value;

    let units = fixed / (sp - vc);

    document.getElementById("beResult").innerHTML =
      `<b>Break Even Units:</b> ${units.toFixed(0)}`;
  };

  return div;
}
