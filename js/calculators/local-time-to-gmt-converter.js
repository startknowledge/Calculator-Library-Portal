export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Local Time to GMT Converter</h3>

    <p>
      This calculator converts local time to Greenwich Mean Time (GMT)
      based on the UTC offset of your local time zone.
    </p>

    <label>Local Time</label>
    <input type="time" id="localTime">

    <label>UTC Offset (Hours)</label>
    <input type="number" id="offset" placeholder="e.g. +5.5 for IST">

    <button onclick="convertToGMT()">Convert</button>

    <p id="gmtResult"></p>
    <br>

    <p><b>Formula:</b></p>
    <p>GMT Time = Local Time − UTC Offset</p>

    <p><b>Example:</b></p>
    <p>
      Local Time = 14:30<br>
      UTC Offset = +5.5 (India)<br>
      GMT Time = <b>09:00</b>
    </p>

    <p><b>Use Case:</b></p>
    <p>
      Useful for international meetings, aviation, global trading,
      server logs, and time zone conversions.
    </p>

    <p><b>Disclaimer:</b>
      Daylight Saving Time (DST) is not automatically applied.
    </p>
  `;

  window.convertToGMT = function () {
    const time = document.getElementById("localTime").value;
    const offset = parseFloat(document.getElementById("offset").value);

    if (!time || isNaN(offset)) {
      document.getElementById("gmtResult").innerHTML =
        "<b>Please enter valid time and UTC offset.</b>";
      return;
    }

    const [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + minutes - offset * 60;

    // Normalize time
    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    const gmtHours = Math.floor(totalMinutes / 60);
    const gmtMinutes = totalMinutes % 60;

    document.getElementById("gmtResult").innerHTML =
      `<b>GMT Time:</b> ${String(gmtHours).padStart(2, "0")}:${String(gmtMinutes).padStart(2, "0")}`;
  };

  return div;
}
