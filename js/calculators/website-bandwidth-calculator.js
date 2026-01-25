export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Monthly Bandwidth Calculator</h2>
    <p>This calculator estimates the monthly bandwidth usage of a website based on visitors, average page size, and pages viewed per visit.</p>

    <div class="form-group">
      <label>Monthly Visitors</label>
      <input type="number" id="visitors" value="10000" placeholder="Enter number of monthly visitors">
    </div>

    <div class="form-group">
      <label>Average Page Size (MB)</label>
      <input type="number" id="size" value="2" placeholder="Enter average page size in MB">
    </div>

    <div class="form-group">
      <label>Pages per Visit</label>
      <input type="number" id="pages" value="3" placeholder="Enter number of pages per visit">
    </div>

    <button onclick="calcBandwidth()">Calculate</button>
    <p id="bandResult"></p>

    <br>
    <p><b>Explanation:</b> The bandwidth usage depends on the number of visitors, the average size of pages they access, and the number of pages per visit.</p>
    <p><b>Formula:</b> <i>Bandwidth (GB) = Visitors × Average Page Size (MB) × Pages per Visit / 1024</i></p>
    <p><b>Calculator is a tool:</b> Helps website owners estimate monthly bandwidth requirements for hosting and planning.</p>
    <p><b>Relative Note:</b> The calculation assumes a consistent page size and number of visits. Real usage may vary.</p>
    <p><b>Based On:</b> Average website traffic and page size data.</p>
    <p><b>To Use the Calculator:</b> Enter the monthly visitors, average page size in MB, and pages per visit, then click "Calculate".</p>
    <p><b>Note:</b> Ensure all values are positive numbers for accurate results.</p>
    <p><b>It is important:</b> Use this as an estimation guide. Actual bandwidth may vary due to caching, images, videos, and user behavior.</p>
    <p><b>Disclaimer:</b> This calculator provides estimates only. The developer is not responsible for hosting decisions made based on this tool.</p>
    <br><hr>
  `;

  window.calcBandwidth = function () {
    const visitors = parseFloat(document.getElementById("visitors").value);
    const size = parseFloat(document.getElementById("size").value);
    const pages = parseFloat(document.getElementById("pages").value);

    if (isNaN(visitors) || isNaN(size) || isNaN(pages) || visitors <= 0 || size <= 0 || pages <= 0) {
      bandResult.innerHTML = "❌ Please enter valid positive numbers for all fields.";
      return;
    }

    const bandwidth = (visitors * size * pages) / 1024;
    bandResult.innerHTML = `<b>Monthly Bandwidth:</b> ${bandwidth.toFixed(2)} GB`;
  };

  return div;
}
