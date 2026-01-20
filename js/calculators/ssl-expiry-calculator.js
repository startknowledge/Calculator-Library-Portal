export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>SSL Expiry Calculator</h3>

    <label>SSL Expiry Date</label>
    <input type="date" id="expiry">

    <button onclick="calcSSL()">Calculate</button>
    <p id="sslResult"></p>
  `;

  window.calcSSL = function () {
    let expiry = new Date(document.getElementById("expiry").value);
    let today = new Date();

    let diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

    document.getElementById("sslResult").innerHTML =
      `<b>Days Remaining:</b> ${diff} days`;
  };

  return div;
}
