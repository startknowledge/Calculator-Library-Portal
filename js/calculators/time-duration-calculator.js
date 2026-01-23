export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Start Time:</label>
    <input type="datetime-local" id="startTime">

    <label>End Time:</label>
    <input type="datetime-local" id="endTime">

    <button onclick="calcDuration()">Calculate</button>
    <p id="durationResult"></p>
    <br>
    <p><b>Explanation:</b>The Time Duration Calculator computes the difference between two specified date and time values. It calculates the total duration in hours and minutes by finding the absolute difference between the start and end times provided by the user.</p>
    <p><b>How to Use:</b> Enter the start date and time in the "Start Time" field and the end date and time in the "End Time" field. Click the "Calculate" button to see the duration between the two timestamps displayed in hours and minutes.</p>
    <p><b>Applications:</b>This calculator is useful for scheduling, time tracking, event planning, and any scenario where understanding the time elapsed between two events is necessary.</p>
    <p><b>Note:</b> Ensure that the end time is later than the start time to get a meaningful duration result.</p>
    <p><b>Example:</b>If the start time is "2023-10-01 14:30" and the end time is "2023-10-01 18:45", the calculator will output "Duration: 4 hrs 15 mins".</p>
    <p><b>Limitations:</b>This calculator does not account for time zones or daylight saving time changes. It assumes both timestamps are in the same time zone.</p>
    <p><b>Disclaimer:</b>This tool is provided for informational purposes only and should not be used for critical time calculations in professional settings.</p>
    <br>    
  `;

  window.calcDuration = function () {
    const start = new Date(document.getElementById("startTime").value);
    const end = new Date(document.getElementById("endTime").value);

    const diff = Math.abs(end - start);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);

    document.getElementById("durationResult").innerHTML =
      `<b>Duration:</b> ${hours} hrs ${minutes} mins`;
  };

  return div;
}
