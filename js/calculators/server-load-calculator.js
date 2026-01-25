export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="calculator">
      <h3>Server Load Calculator</h3>
      <p>Calculate the total server load based on the number of concurrent users and the number of requests each user generates.</p>

      <label>Concurrent Users</label>
      <input id="users" type="number" value="200">

      <label>Requests per User</label>
      <input id="req" type="number" value="5">

      <button onclick="calcServer()">Calculate</button>
      <p id="serverResult"></p>
      <br>

      <p><b>Explanation:</b> This calculator estimates the total number of requests your server will handle, which is essential for capacity planning and load balancing.</p>
      <p><b>For example:</b> If you have 200 users and each user makes 5 requests, total server load = 200 × 5 = 1000 requests.</p>
      <p><b>Formula:</b> Server Load = Concurrent Users × Requests per User</p>
      <p>Calculator is a tool to help system administrators and developers estimate server demand.</p>
      <p>Relative accuracy depends on correct input of users and requests.</p>
      <p>Based on standard web server load calculation practices.</p>
      <p>To use the calculator, enter the number of users and requests per user, then click "Calculate".</p>
      <p><b>Note:</b> Ensure the numbers entered are realistic for your server capacity to avoid miscalculations.</p>
      <p>It is important to input valid numeric values.</p>
      <p><b>Disclaimer:</b> This calculator provides an estimation only and does not account for caching, asynchronous requests, or network latency.</p>
      <br>
    </div>
  `;

  window.calcServer = function () {
    const users = parseFloat(document.getElementById("users").value);
    const req = parseFloat(document.getElementById("req").value);

    if (isNaN(users) || isNaN(req) || users < 0 || req < 0) {
      document.getElementById("serverResult").innerHTML = "<b>Please enter valid non-negative numbers</b>";
      return;
    }

    const totalRequests = users * req;

    document.getElementById("serverResult").innerHTML =
      `<b>Total Requests:</b> ${totalRequests}`;
  };

  return div;
}
