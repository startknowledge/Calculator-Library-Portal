export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Size Conversion Chart</h3>

    <label>Chest Size (Inches)</label>
    <input id="chest" value="40">

    <button onclick="calcSize()">Check Size</button>
    <p id="sizeResult"></p>
  `;

  window.calcSize = function () {
    let c = +document.getElementById("chest").value;
    let size = c < 38 ? "S" : c < 40 ? "M" : c < 42 ? "L" : "XL";

    document.getElementById("sizeResult").innerHTML =
      `<b>Garment Size:</b> ${size}`;
  };

  return div;
}
