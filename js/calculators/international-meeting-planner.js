export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Meeting Time:</label>
    <input type="datetime-local" id="meetTime">

    <label>Your UTC Offset:</label>
    <input type="number" id="meetFrom">

    <label>Other Country UTC Offset:</label>
    <input type="number" id="meetTo">

    <button onclick="planMeeting()">Plan</button>
    <p id="meetResult"></p>
    <br>
    <p>Explanation: This tool helps you find the corresponding time in another country based on your meeting time and UTC offsets.</p>
    <p>UTC Offset: The difference in hours between a specific location's time and Coordinated Universal Time (UTC).</p> 
    <p>Example: If you are in New York (UTC-4) and want to schedule a meeting with someone in London (UTC+1), enter -4 as your UTC offset and +1 for the other country.</p>
    <p>Steps to Use:</p>
    <ol>
      <li>Enter the date and time of your meeting in the "Meeting Time" field.</li>
      <li>Input your current UTC offset in the "Your UTC Offset" field.</li>
      <li>Input the UTC offset of the other country in the "Other Country UTC Offset" field.</li>
      <li>Click the "Plan" button to see the corresponding time in the other country.</li>
    </ol>
    <p>Example Calculation:</p>
    <p>If you set the meeting time to "2024-06-15 10:00" (10 AM), your UTC offset to -4 (New York), and the other country's UTC offset to +1 (London):</p>
    <ul>
      <li>Convert your meeting time to UTC: 10:00 + 4 hours = 14:00 (2 PM UTC)</li>
      <li>Convert UTC to the other country's time: 14:00 + 1 hour = 15:00 (3 PM London time)</li>
    </ul>
    <p>Result: The meeting time in London will be 3 PM on the same day.</p>
    <p>Important: Ensure to verify the current UTC offsets as they may change due to Daylight Saving Time or other local adjustments.</p>
    <p>for more accurate results, consider using online time zone converters or world clock tools.</p>
    <p>formula: Other Country Time = Meeting Time + (Other Country UTC Offset - Your UTC Offset)</p>   
    <p>Note: Adjust for Daylight Saving Time if applicable.</p>
    <p>Disclaimer: This calculator provides approximate conversions and may not account for all local time variations.</p>

  `;

  window.planMeeting = function () {
    const time = new Date(document.getElementById("meetTime").value);
    const from = parseFloat(document.getElementById("meetFrom").value);
    const to = parseFloat(document.getElementById("meetTo").value);

    if (!time || isNaN(from) || isNaN(to)) return;

    const utc = time.getTime() - from * 3600000;
    const other = new Date(utc + to * 3600000);

    document.getElementById("meetResult").innerHTML =
      `<b>Other Country Time:</b> ${other.toLocaleString()}`;
  };

  return div;
}
// International Meeting Planner Calculator
