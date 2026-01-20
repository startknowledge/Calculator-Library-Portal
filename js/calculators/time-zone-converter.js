export default function () {
  const div = document.createElement("div");
    div.innerHTML = `
    <h3>Time Zone Calculator</h3>
    <p>This calculator helps you convert time between different time zones around the world. Simply select the source and target time zones, enter the time you want to convert, and click "Convert" to see the result.</p>
    <div>
      <label for="from-timezone">From Time Zone:</label>
      <select id="from-timezone">
        <option value="UTC">UTC</option>
        <option value="GMT">GMT</option>
        <option value="EST">EST</option>
        <option value="PST">PST</option>
        <option value="CST">CST</option>
        <option value="MST">MST</option>
      </select>
      <br><br>
      <label for="to-timezone">To Time Zone:</label>
      <select id="to-timezone">
        <option value="UTC">UTC</option>
        <option value="GMT">GMT</option>
        <option value="EST">EST</option>
        <option value="PST">PST</option>
        <option value="CST">CST</option>
        <option value="MST">MST</option>
      </select>
        <br><br>
        <label for="time-input">Time (HH:MM):</label>
        <input type="text" id="time-input" placeholder="HH:MM">
        <br><br>
        <button onclick="convertTime()">Convert</button>
        <br><br>
        <div id="result"></div>
    </div>
    <table>
      <tr><th>Time Zone</th><th>Offset from UTC</th></tr>
        <tr><td>UTC (Universal Time Coordinated) : </td><td>+00:00</td></tr>    
        <tr><td>GMT (Greenwich Mean Time): </td><td>+00:00</td></tr>
        <tr><td>EST (Eastern Standard Time) :</td><td>-05:00</td></tr>
        <tr><td>PST (Pacific Standard Time) :</td><td>-08:00</td></tr>
        <tr><td>CST (Central Standard Time) :</td><td>-06:00</td></tr>
        <tr><td>MST (Mountain Standard Time) :</td><td>-07:00</td></tr>
    </table>
    `;
    return div;
}

function convertTime() {
  const fromTimezone = document.getElementById("from-timezone").value;
  const toTimezone = document.getElementById("to-timezone").value;
  const timeInput = document.getElementById("time-input").value;
  const resultDiv = document.getElementById("result");
    const timeParts = timeInput.split(":");
    if (timeParts.length !== 2) {
      resultDiv.innerHTML = "Invalid time format. Please use HH:MM.";
      return;
    }
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1], 10);
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      resultDiv.innerHTML = "Invalid time. Please enter a valid time in HH:MM format.";
      return;
    }
    const timezoneOffsets = {
      "UTC": 0,
      "GMT": 0,
      "EST": -5,
      "PST": -8,
      "CST": -6,
      "MST": -7
    };
    const fromOffset = timezoneOffsets[fromTimezone];
    const toOffset = timezoneOffsets[toTimezone];
    const totalOffset = toOffset - fromOffset;
    hours += totalOffset;
    if (hours < 0) {
      hours += 24;
    } else if (hours >= 24) {
      hours -= 24;
    }
    const convertedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    resultDiv.innerHTML = `Converted Time: ${convertedTime} (${toTimezone})`;
}
window.convertTime = convertTime;

