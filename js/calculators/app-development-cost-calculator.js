export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>App Development Cost Calculator</h3>

    <label>Developer Cost per Month (₹)</label>
    <input type="number" id="dev" value="60000">

    <label>Project Duration (Months)</label>
    <input type="number" id="dur" value="6">

    <button onclick="calcApp()">Calculate</button>
    <p id="appResult"></p>
  `;

  window.calcApp = function () {
    let dev = +document.getElementById("dev").value;
    let dur = +document.getElementById("dur").value;

    let total = dev * dur;

    document.getElementById("appResult").innerHTML =
      `<b>Total App Development Cost:</b> ₹${total.toLocaleString()}`;
  };

  return div;
}
