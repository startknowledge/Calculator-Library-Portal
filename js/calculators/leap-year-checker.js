export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Enter Year:</label>
    <input type="number" id="yearValue" placeholder="Enter year">

    <button onclick="checkLeapYear()">Check</button>
    <p id="leapResult"></p>
    <br>
    <h3>Leap Year Checker</h3>
    <p>Check whether a given year is a leap year or not.</p>
    <p>Useful for calendar and date calculations.</p>
    <p><b>Explanation:</b></p>
    <p>A leap year has 366 days instead of 365.</p>
    <p><b>Formula:</b></p>
    <p>
      Year divisible by 4 AND  
      (not divisible by 100 OR divisible by 400)
    </p>
    <p><b>Example:</b>  
    2024 is a <b>Leap Year</b>.</p>
    <p><b>Disclaimer:</b> Works as per Gregorian calendar rules.</p>
    <br>
  `;

  window.checkLeapYear = function () {
    const year = parseInt(document.getElementById("yearValue").value);
    if (isNaN(year)) return;

    const isLeap =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    document.getElementById("leapResult").innerHTML =
      isLeap
        ? `<b>${year}</b> is a <b>Leap Year</b>`
        : `<b>${year}</b> is <b>NOT</b> a Leap Year`;
  };

  return div;
}
