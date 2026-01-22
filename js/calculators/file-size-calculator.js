export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>File Size Calculator</h3>

    <label>Bitrate (Mbps)</label>
    <input id="rate" value="5">

    <label>Duration (minutes)</label>
    <input id="time" value="10">

    <button onclick="calcFile()">Calculate</button>
    <p id="fileResult"></p>
    <br>
    <p><u>Explanation about File Size Calculator</u> :</p>
    <p>The File Size Calculator is a tool designed to help individuals and businesses calculate the size of a file based on its bitrate and duration. By inputting the bitrate in Mbps and the duration in minutes, users can quickly determine the file size in megabytes.</p>
    <p>The calculator uses the following formula:</p>
    <p>File Size (MB) = (Bitrate (Mbps) * Duration (minutes) * 60 seconds/minute) / 8 bits/byte</p>
    <p>To use the calculator, simply enter the bitrate in Mbps and the duration in minutes in the provided input fields. After clicking the "Calculate" button, the tool will compute and display the file size in megabytes.</p>
    <p>This calculator is particularly useful for individuals and businesses who need to manage file sizes and storage efficiently. By knowing the file size, users can make informed decisions about storage capacity and data transfer.</p>
    <p>In summary, the File Size Calculator is a valuable resource for anyone involved in digital media or data management, providing clarity on file sizes to aid in effective storage and transfer planning.</p>
    <p><b>Note:</b> This calculator provides an estimate of the file size based on the inputs provided. Actual file sizes may vary depending on compression, format, and other factors.</p>
    <p>For personalized advice and detailed file size analysis, consider consulting with a digital media expert or IT professional.</p>
    <p>Happy Calculating!</p>
    <p>-- The Calculators Team</p>
    <p>Disclaimer: This calculator provides estimates based on the inputs provided and should be used for informational purposes only. Always consult with a certified textile professional for critical purchasing decisions.</p>
    <br>
  `;

  window.calcFile = function () {
    let rate = +document.getElementById("rate").value;
    let time = +document.getElementById("time").value;

    let size = (rate * time * 60) / 8;

    document.getElementById("fileResult").innerHTML =
      `<b>File Size:</b> ${size.toFixed(2)} MB`;
  };

  return div;
}
