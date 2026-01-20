export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Camera Storage Calculator (HDD Requirement)</h3>

    <label>Number of Cameras</label>
    <input type="number" id="cams" value="1">

    <label>Resolution</label>
    <select id="resolution">
      <option value="0.5">480p</option>
      <option value="1">720p</option>
      <option value="2">1080p (Full HD)</option>
      <option value="4">4MP</option>
      <option value="8">4K</option>
    </select>

    <label>Frame Rate (FPS)</label>
    <input type="number" id="fps" value="25">

    <label>Recording Hours per Day</label>
    <input type="number" id="hours" value="24">

    <label>Recording Days</label>
    <input type="number" id="days" value="30">

    <label>Video Compression</label>
    <select id="compression">
      <option value="1">H.264</option>
      <option value="0.7">H.265</option>
      <option value="0.5">H.265+</option>
    </select>

    <label>Recording Mode</label>
    <select id="mode">
      <option value="1">Continuous (24×7)</option>
      <option value="0.4">Motion Based</option>
      <option value="0.6">Scheduled</option>
    </select>

    <button onclick="calcStorage()">Calculate</button>

    <p id="storageResult"></p>

    <small>
      * Approximation based on calculators by  
      <b>Western Digital</b>, <b>Seagate</b>, <b>Hikvision</b>
    </small>
    
  `;

  window.calcStorage = function () {
    let cams = +document.getElementById("cams").value;
    let resolution = +document.getElementById("resolution").value;
    let fps = +document.getElementById("fps").value;
    let hours = +document.getElementById("hours").value;
    let days = +document.getElementById("days").value;
    let compression = +document.getElementById("compression").value;
    let mode = +document.getElementById("mode").value;

    // Approx bitrate per camera (Mbps)
    let bitratePerCam = resolution * fps * 0.07 * compression;

    let totalBitrate = bitratePerCam * cams * mode;

    // Storage calculation
    let storageGB =
      (totalBitrate * 3600 * hours * days) / (8 * 1024);

    let storageTB = storageGB / 1024;

    document.getElementById("storageResult").innerHTML = `
      <b>Total Bitrate:</b> ${totalBitrate.toFixed(2)} Mbps<br>
      <b>Required Storage:</b> ${storageGB.toFixed(2)} GB<br>
      <b>Recommended HDD:</b> ${storageTB.toFixed(2)} TB
    `;
  };

  return div;
}
