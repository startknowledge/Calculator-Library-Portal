export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Joining Date</label>
    <input type="date" id="joinDate">

    <label>Retirement Date</label>
    <input type="date" id="retireDate">

    <button onclick="calcService()">Calculate</button>
    <p id="serviceResult"></p>
  `;

  window.calcService = function () {
    let start = new Date(document.getElementById("joinDate").value);
    let end = new Date(document.getElementById("retireDate").value);

    let years = (end - start) / (1000 * 60 * 60 * 24 * 365);

    document.getElementById("serviceResult").innerHTML =
      `<b>Total Service:</b> ${years.toFixed(2)} Years`;
  };

  return div;
}
