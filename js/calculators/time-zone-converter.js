export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Time Zone Calculator</h2>

    <div>
      <label>From Time Zone:</label>
      <select id="from-timezone"></select>
      <br><br>
      <label>To Time Zone:</label>
      <select id="to-timezone"></select>
      <br><br>
      <label>Time (HH:MM):</label>
      <input type="text" id="time-input" placeholder="HH:MM">
      <br><br>
      <button onclick="convertTime()">Convert</button>
      <br><br>
      <div id="result"></div>
    </div>
    <br>

    <p><b>Explanation:</b> This calculator helps you convert time from one time zone to another by using the difference in UTC offsets between zones.</p>
    <p><b>Formula:</b> <i>Converted Time = Input Time + (Target UTC Offset - Source UTC Offset)</i></p>
    <p><b>Calculator is a tool:</b> It allows travelers, remote workers, and global teams to quickly know the time in different parts of the world.</p>
    <p><b>Relative Note:</b> Time conversion is based on standard UTC offsets and does not account for daylight saving changes automatically.</p>
    <p><b>Based On:</b> Universal Coordinated Time (UTC) offsets of selected time zones.</p>
    <p><b>To Use the Calculator:</b> Select the source and target time zones, enter the time in HH:MM format, and click "Convert". The converted time will appear below.</p>
    <p><b>Note:</b> Ensure the time is entered in 24-hour format. For example, 14:30 for 2:30 PM.</p>
    <p><b>It is important:</b> This tool is for general reference and planning. It may not consider daylight saving time adjustments automatically.</p>
    <p><b>Disclaimer:</b> The developer is not responsible for errors or decisions based on this calculator. Always verify critical times manually if necessary.</p>
    <br><hr>
  `;

  const timezones = {
    "UTC": 0, "GMT": 0, "BST": 1, "IST": 1, "WET": 0, "WEST": 1,
    "CET": 1, "CEST": 2, "EET": 2, "EEST": 3,
    "MSK": 3, "GST": 4, "PKT": 5, "IST (India)": 5.5, "BST (Bangladesh)": 6,
    "THA": 7, "CST (China)": 8, "JST": 9, "KST": 9, "ACST": 9.5, "AEST": 10,
    "AEDT": 11, "NZST": 12, "NZDT": 13,
    "EST": -5, "EDT": -4, "CST (US)": -6, "CDT": -5, "MST (US)": -7, "MDT": -6,
    "PST": -8, "PDT": -7, "HST": -10, "AKST": -9, "AKDT": -8
  };

  // Populate dropdowns
  const fromSelect = div.querySelector("#from-timezone");
  const toSelect = div.querySelector("#to-timezone");
  Object.keys(timezones).forEach(tz => {
    const offset = timezones[tz];
    const sign = offset >= 0 ? "+" : "";
    fromSelect.innerHTML += `<option value="${tz}">${tz} (UTC${sign}${offset})</option>`;
    toSelect.innerHTML += `<option value="${tz}">${tz} (UTC${sign}${offset})</option>`;
  });

  // Conversion function
  window.convertTime = function () {
    const fromTZ = fromSelect.value;
    const toTZ = toSelect.value;
    const timeInput = div.querySelector("#time-input").value;
    const resultDiv = div.querySelector("#result");

    const parts = timeInput.split(":");
    if (parts.length !== 2) {
      resultDiv.innerHTML = "❌ Invalid format. Use HH:MM";
      return;
    }

    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      resultDiv.innerHTML = "❌ Invalid time. Enter a valid HH:MM";
      return;
    }

    const offsetDiff = timezones[toTZ] - timezones[fromTZ];
    let convertedHours = hours + offsetDiff;

    if (convertedHours < 0) convertedHours += 24;
    if (convertedHours >= 24) convertedHours -= 24;

    const convertedTime = `${String(convertedHours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
    resultDiv.innerHTML = `<b>Converted Time:</b> ${convertedTime} (${toTZ})`;
  };

  return div;
}
