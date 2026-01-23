export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter Degree (Decimal):</label>
    <input type="number" step="any" id="dmsValue" placeholder="e.g. 23.75">

    <button onclick="dmsConvert()">Convert</button>
    <p id="dmsResult"></p>
    <br>
    <p>About Degree to Minutes and Seconds Converter</p>
    <p>Calculating minutes and seconds from decimal degrees is essential in various fields such as navigation, astronomy, and geography.</p>
    <p><b>Explanation:</b></p>
    <p>Degrees can be expressed in a more detailed format using minutes and seconds.
      This format is commonly used in navigation, astronomy, and geography.
    </p>
    <p>To convert decimal degrees to minutes and seconds, the following formulas are used:</p>
    <p><b>Formula:</b></p>
    <p>
      Minutes = Decimal Part × 60<br>
      Seconds = Remaining Decimal × 60
    </p>
    <p>Relationships between degrees, minutes, and seconds are essential for precise angular measurements.</p>
    <p><b>Example:</b>  
    23.75° = 23° 45′ 00″</p>
    <p>Based on the input degree value, it calculates the equivalent minutes and seconds.</p>
    <p><b>Note:</b> One degree equals 60 minutes and one minute equals 60 seconds.</p>
    <p><b>Disclaimer:</b> Output values are rounded for clarity.</p>
    <br>
  `;

  window.dmsConvert = function () {
    const val = parseFloat(document.getElementById("dmsValue").value);
    if (isNaN(val)) return;

    const deg = Math.floor(val);
    const minFloat = (val - deg) * 60;
    const min = Math.floor(minFloat);
    const sec = ((minFloat - min) * 60).toFixed(2);

    document.getElementById("dmsResult").innerHTML =
      `<b>Result:</b> ${deg}° ${min}′ ${sec}″`;
  };

  return div;
}
