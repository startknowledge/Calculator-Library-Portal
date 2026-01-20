export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Lighting Cost Calculator</h3>

    <label>Number of Lights</label>
    <input id="lights" value="20">

    <label>Cost per Light (₹)</label>
    <input id="rate" value="800">

    <button onclick="calcLight()">Calculate</button>
    <p id="lightResult"></p>
  `;

  window.calcLight = function () {
    let lights = +document.getElementById("lights").value;
    let rate = +document.getElementById("rate").value;

    document.getElementById("lightResult").innerHTML =
      `<b>Total Lighting Cost:</b> ₹${lights * rate}`;
  };

  return div;
}
