export default function() {
  const div = document.createElement("div");

  div.innerHTML = `<br>
    <label>From Unit:</label>
    <select id="fromUnitW">
      <option value="mg">Milligram</option>
      <option value="g">Gram</option>
      <option value="kg">Kilogram</option>
      <option value="lb">Pound</option>
    </select>
    <br>
    <label>To Unit:</label>
    <select id="toUnitW">
      <option value="mg">Milligram</option>
      <option value="g">Gram</option>
      <option value="kg">Kilogram</option>
      <option value="lb">Pound</option>
    </select>
    <br>
    <label>Value:</label>
    <input type="number" id="valueW" placeholder="Enter value">
    <br>
    <button onclick="convertWeight()">Convert</button>

    <p id="resultW"></p>
  `;

  window.convertWeight = function () {
    let from = document.getElementById("fromUnitW").value;
    let to = document.getElementById("toUnitW").value;
    let value = parseFloat(document.getElementById("valueW").value);

    const factor = {
      mg: 1,
      g: 1000,
      kg: 1000000,
      lb: 453592
    };

    let mgValue = value * factor[from];
    let converted = mgValue / factor[to];

    document.getElementById("resultW").innerHTML = "<b>Result:</b> " + converted;
  };

  return div;
}
