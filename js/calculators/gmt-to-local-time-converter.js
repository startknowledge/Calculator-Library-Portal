export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>GMT Time:</label>
    <input type="datetime-local" id="gmtTime">

    <button onclick="gmtToLocal()">Convert</button>
    <p id="gmtResult"></p>
    <br>
    <p>Explanation:</p>
    <ul>
      <li><b>GMT (Greenwich Mean Time):</b> The mean solar time at the Royal Observatory in Greenwich, London, used as a global time standard.</li>
      <li><b>Local Time:</b> The time observed in a specific region or time zone, which may vary from GMT due to time zone differences and daylight saving adjustments.</li>
    </ul>
    <p>Based on the definitions above, the GMT to Local Time Converter is a tool that helps users convert a given date and time from GMT to their respective local time zones.</p>
    <p>The GMT to Local Time Converter allows you to convert a specified date and time from Greenwich Mean Time (GMT) to your local time zone. This is particularly useful for scheduling events, meetings, or understanding time differences across various regions.</p>
    <p>To use the converter, simply enter the desired GMT date and time in the input field and click the "Convert" button. The resulting local time will be displayed below the button.</p>
    <p><b>Example:</b> If you enter "2023-01-01T12:00", the converter will return the equivalent local time based on your current time zone settings.</p>
    <p><b>Note:</b> Ensure that the date and time you enter are in the correct format (YYYY-MM-DDTHH:MM) to get an accurate conversion.</p>
    <p><b>Formula:</b> Local Time = GMT Time + (Local Time Zone Offset)</p>
    <p>This converter is useful for travelers, remote workers, and anyone who needs to coordinate activities across different time zones.</p>
    <p><b>Disclaimer:</b> This converter provides an estimated local time based on your device's time zone settings. Ensure your device's time zone is set correctly for accurate results.</p>
    <br>
  `;

  window.gmtToLocal = function () {
    const d = new Date(document.getElementById("gmtTime").value + "Z");
    document.getElementById("gmtResult").innerHTML =
      `<b>Local Time:</b> ${d.toLocaleString()}`;
  };

  return div;
}
