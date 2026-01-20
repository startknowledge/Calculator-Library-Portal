export default function() {
  const div = document.createElement("div");

  div.innerHTML = `<br>
    <label>From Unit:</label>
    <select id="tempFrom">
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
      <option value="K">Kelvin</option>
    </select>
    <br>
    <label>To Unit:</label>
    <select id="tempTo">
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
      <option value="K">Kelvin</option>
    </select>
    <br>
    <label>Value:</label>
    <input type="number" id="tempValue" placeholder="Enter value">
    <br>
    <button onclick="convertTemp()">Convert</button>

    <p id="tempResult"></p>
  `;

  window.convertTemp = function () {
    let from = document.getElementById("tempFrom").value;
    let to = document.getElementById("tempTo").value;
    let value = parseFloat(document.getElementById("tempValue").value);

    let C;
    if (from === "C") C = value;
    if (from === "F") C = (value - 32) * 5/9;
    if (from === "K") C = value - 273.15;

    let result;
    if (to === "C") result = C;
    if (to === "F") result = (C * 9/5) + 32;
    if (to === "K") result = C + 273.15;

    document.getElementById("tempResult").innerHTML = "<b>Result:</b> " + result;
  };

  return div;
}
