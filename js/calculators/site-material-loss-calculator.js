export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Material Purchased (₹)</label>
    <input type="number" id="purchased">

    <label>Material Used (₹)</label>
    <input type="number" id="used">

    <button onclick="calcMaterialLoss()">Calculate</button>
    <p id="materialResult"></p>
  `;

  window.calcMaterialLoss = function () {
    let purchased = +document.getElementById("purchased").value;
    let used = +document.getElementById("used").value;

    let loss = purchased - used;

    document.getElementById("materialResult").innerHTML =
      `<b>Material Loss:</b> ₹${loss}`;
  };

  return div;
}
