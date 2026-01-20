export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Server Load = Users × Requests per User</h3>

    <label>Concurrent Users</label>
    <input id="users" value="200">

    <label>Requests per User</label>
    <input id="req" value="5">

    <button onclick="calcServer()">Calculate</button>
    <p id="serverResult"></p>
  `;

  window.calcServer = function () {
    let users = +document.getElementById("users").value;
    let req = +document.getElementById("req").value;

    document.getElementById("serverResult").innerHTML =
      `<b>Total Requests:</b> ${users * req}`;
  };

  return div;
}
