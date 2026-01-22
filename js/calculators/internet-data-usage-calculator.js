export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Internet Data Usage Calculator</h3>

    <label>Speed (Mbps)</label>
    <input id="speed" value="10">

    <label>Usage Time (hours)</label>
    <input id="hours" value="2">

    <button onclick="calcData()">Calculate</button>
    <p id="dataResult"></p>
    <br>
    <p>The Internet Data Usage Calculator helps you estimate the amount of data consumed based on your internet speed and usage time. By entering your speed in Mbps and the duration of usage in hours, users can quickly calculate their data consumption in gigabytes (GB).</p>
    <p>This calculator is useful for individuals who want to monitor their data usage and manage their internet plans effectively.</p>
    <p>Ensure that the speed and usage time inputs are accurate to get a reliable data usage estimate.</p>
    <p>Explained below are the steps to use the calculator effectively.</p>
    <p><b>How to Use:</b> Enter your internet speed in megabits per second (Mbps) in the "Speed" field and the duration of usage in hours in the "Usage Time" field. Click the "Calculate" button to see the estimated data usage displayed below.</p>
    <p><b>Inputs:</b></p>
    <ul>
      <li><b>Speed (Mbps):</b> Your internet speed in megabits per second.</li>
      <li><b>Usage Time (hours):</b> The total time you use the internet in hours.</li>
    </ul>
    <p><b>Output:</b></p>
    <ul>
      <li><b>Data Used (GB):</b> The estimated amount of data consumed in gigabytes.</li>
    </ul>
    <p><b>Note:</b> Ensure that the speed and usage time inputs are accurate to get a reliable data usage estimate.</p>
    <p><b>Example:</b> For a speed of 10 Mbps and a usage time of 2 hours, the data used would be 9.00 GB.</p>
    <p><b>Formula:</b> Data Used (GB) = (Speed (Mbps) × Usage Time (hours) × 3600) / 8 / 1024</p>
    <p><b>Disclaimer:</b> This calculator provides an estimate and actual data usage may vary based on additional factors such as network conditions, type of activities performed online, and specific device settings.</p>
    <br>
  `;

  window.calcData = function () {
    let speed = +document.getElementById("speed").value;
    let hours = +document.getElementById("hours").value;

    let data = (speed * hours * 3600) / 8 / 1024;

    document.getElementById("dataResult").innerHTML =
      `<b>Data Used:</b> ${data.toFixed(2)} GB`;
  };

  return div;
}
