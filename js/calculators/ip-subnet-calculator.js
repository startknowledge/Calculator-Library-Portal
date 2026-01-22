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
    <br>
    <p>The IP Subnet Calculator helps you determine the appropriate subnet mask and related network information based on the number of required hosts. By entering a base IP address and the number of hosts, users can quickly calculate the required subnet, total IPs, usable hosts, and key network addresses.</p>
    <p>This calculator is useful for network administrators and IT professionals looking to design and manage IP networks efficiently.</p>  
    <p>Ensure that the base IP address and number of hosts inputs are accurate to get a reliable subnetting result.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter the base IP address in the "Base IP Address" field and the number of required hosts in the "Number of Required Hosts" field. Click the "Calculate" button to see the subnetting details displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Base IP Address:</b> The starting IP address for the subnet.</li>
      <li><b>Number of Required Hosts:</b> The total number of hosts that need to be accommodated in the subnet.</li>
    </ul>
    <p><b>Outputs:</b></p>
    <ul>
      <li><b>Required Subnet:</b> The subnet mask in CIDR notation.</li>
    </ul>
    <p><b>Note:</b> Ensure that the base IP address and number of hosts inputs are accurate to get a reliable subnetting result.</p>
    <p><b>Example:</b> For a base IP address of 192.168.1.0 and 50 required hosts, the required subnet would be /26.</p>
    <p><b>Formula:</b> Required Subnet = 32 - ceil(log₂(hosts + 2))</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual network requirements may vary based on additional factors such as network topology, routing protocols, and specific device characteristics.</p>
    <br>
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
