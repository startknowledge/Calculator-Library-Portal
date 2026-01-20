export default function() {
  const div = document.createElement("div");

  div.innerHTML = `<br>
    <label>From Unit:</label>
    <select id="fromUnitL">
      <option value="mm">Millimeter</option>
      <option value="cm">Centimeter</option>
      <option value="m">Meter</option>
      <option value="km">Kilometer</option>
      <option value="inch">Inch</option>
      <option value="ft">Feet</option>
    </select>
    <br>
    <label>To Unit:</label>
    <select id="toUnitL">
      <option value="mm">Millimeter</option>
      <option value="cm">Centimeter</option>
      <option value="m">Meter</option>
      <option value="km">Kilometer</option>
      <option value="inch">Inch</option>
      <option value="ft">Feet</option>
    </select>
    <br>
    <label>Value:</label>
    <input type="number" id="valueL" placeholder="Enter value">
    <br>  
    <button onclick="convertLength()">Convert</button>

    <p id="resultL"></p>
  `;

  window.convertLength = function () {
    let from = document.getElementById("fromUnitL").value;
    let to = document.getElementById("toUnitL").value;
    let value = parseFloat(document.getElementById("valueL").value);

    const factor = {
      mm: 1,
      cm: 10,
      m: 1000,
      km: 1000000,
      inch: 25.4,
      ft: 304.8
    };

    let mmValue = value * factor[from];
    let converted = mmValue / factor[to];

    document.getElementById("resultL").innerHTML = "<b>Result:</b> " + converted;
  };

  return div;
}
