export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Date & Time:</label>
    <input type="datetime-local" id="unixTime">

    <button onclick="toUnix()">Convert</button>
    <p id="unixResult"></p>
    <br>
    <p>The Unix Timestamp Converter allows you to convert a specific date and time into its corresponding Unix timestamp. A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds.</p>
    <p>To use the converter, simply enter the desired date and time in the input field and click the "Convert" button. The resulting Unix timestamp will be displayed below the button.</p>
    <p><b>Example:</b> If you enter "2023-01-01T00:00", the converter will return "1672531200", which is the Unix timestamp for January 1, 2023, at midnight UTC.</p>
    <p><b>Note:</b> Ensure that the date and time you enter are in the correct format (YYYY-MM-DDTHH:MM) to get an accurate conversion.</p>
    <p><b>Formula:</b> Unix Timestamp = (Date and Time in milliseconds since Jan 1, 1970) / 1000</p>
    <p>It is useful for developers, data analysts, and anyone working with time-based data who needs to convert human-readable dates into a machine-friendly format.</p>
    <p>Remember that Unix timestamps are typically represented in seconds, so the conversion involves dividing the milliseconds value by 1000.</p>
    <p><b>Disclaimer:</b> This converter provides a simple way to obtain Unix timestamps for various applications, including programming, data analysis, and time-based calculations.</p>
    <br>
  `;

  window.toUnix = function () {
    const d = new Date(document.getElementById("unixTime").value);
    document.getElementById("unixResult").innerHTML =
      `<b>Unix Timestamp:</b> ${Math.floor(d.getTime() / 1000)}`;
  };

  return div;
}
