export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>IP Subnet Calculator</h3>

    <label>Base IP Address</label>
    <input id="ip" value="192.168.1.0">

    <label>Number of Required Hosts</label>
    <input id="hosts" type="number" value="50" min="1">

    <button id="calcBtn">Calculate</button>

    <div id="subnetResult"></div>
  `;

  function ipToNumber(ip) {
    return ip.split(".").reduce((sum, part) => (sum << 8) + Number(part), 0);
  }

  function numberToIp(num) {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255
    ].join(".");
  }

  div.querySelector("#calcBtn").onclick = function () {
    const hosts = Number(div.querySelector("#hosts").value);
    const ipStr = div.querySelector("#ip").value;

    if (hosts <= 0) {
      div.querySelector("#subnetResult").innerHTML =
        `<span style="color:red">Enter valid host number</span>`;
      return;
    }

    let bits = Math.ceil(Math.log2(hosts + 2));
    let subnet = 32 - bits;
    let totalIPs = Math.pow(2, bits);

    let baseIpNum = ipToNumber(ipStr);

    let network = baseIpNum;
    let firstIP = network + 1;
    let lastIP = network + totalIPs - 2;
    let broadcast = network + totalIPs - 1;

    div.querySelector("#subnetResult").innerHTML = `
      <b>Required Subnet:</b> /${subnet}<br>
      <b>Total IPs:</b> ${totalIPs}<br>
      <b>Usable Hosts:</b> ${totalIPs - 2}<br><br>

      <b>Network Address:</b> ${numberToIp(network)}<br>
      <b>First Usable IP:</b> ${numberToIp(firstIP)}<br>
      <b>Last Usable IP:</b> ${numberToIp(lastIP)}<br>
      <b>Broadcast Address:</b> ${numberToIp(broadcast)}
    `;
  };

  return div;
}
