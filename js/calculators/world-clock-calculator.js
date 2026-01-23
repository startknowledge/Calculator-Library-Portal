export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>UTC Offset (hours):</label>
    <input type="number" id="worldTZ" placeholder="+1">

    <button onclick="worldClock()">Show Time</button>
    <p id="worldResult"></p>
    <br>
    <p>This calculator helps you find the current time in any timezone based on its UTC offset.</p>
    <p>Enter the UTC offset in hours to see the current time in that timezone.</p>
    <p>For example, UTC+1 is 1 hour ahead of Coordinated Universal Time.</p>
    <p>UTC-5 is 5 hours behind Coordinated Universal Time.</p>
    <p>Simply input the offset and click "Show Time" to get the current time.</p>
    <p>Useful for travelers and international communication.</p>
    <p>Remember to consider Daylight Saving Time changes if applicable.</p>
    <p>Example Offsets:</p>
    <ul>
      <li>New York: -5</li> 
        <li>London: 0</li>
        <li>Berlin: +1</li>
        <li>Moscow: +3</li>
        <li>Beijing: +8</li>
        <li>Tokyo: +9</li>
        <li>Sydney: +10</li>
    </ul>
    <p>Note: Adjust for Daylight Saving Time if applicable.</p>
    <p><small>Calculates current time in a specified UTC offset timezone.</small></p>
    <p>Example: For UTC+1, enter 1; for UTC-5, enter -5.</p>
    <p>Click "Show Time" to see the current time in that timezone.</p>
    <p>Ensure your device's clock is accurate for correct results.</p>
    <p>Useful for scheduling across different time zones.</p>
    <p>Supports fractional offsets (e.g., +5.5 for India).</p>
    <p>Based on your local system time.</p>
    <p>Refresh the page to reset.</p>
    <p>Developed for quick timezone conversions.</p>
    <p>Free to use and share!</p>
    <p>Disclaimer: Results may vary based on device settings.</p>
    <br>
  `;

  window.worldClock = function () {
    const offset = parseFloat(document.getElementById("worldTZ").value);
    if (isNaN(offset)) return;

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const local = new Date(utc + offset * 3600000);

    document.getElementById("worldResult").innerHTML =
      `<b>Current Time:</b> ${local.toLocaleString()}`;
  };

  return div;
}
