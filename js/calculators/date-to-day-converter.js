export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Select Date:</label>
    <input type="date" id="dateDay">

    <button onclick="dateToDay()">Convert</button>
    <p id="dayResult"></p>
    <br>
    <p><i>Find out the day of the week for any given date.</i></p>
    <p>Example: If you enter "2023-10-05", the result will be "Thursday".</p>
    <p>Use this tool to quickly determine the day of the week for birthdays, anniversaries, historical events, or any specific date.</p>
    <p>Note: Make sure to enter the date in the correct format (YYYY-MM-DD) for accurate results.</p>
    <p>Formula: The day of the week is calculated using JavaScript's built-in Date object which provides the getDay() method returning a number corresponding to the day of the week (0 for Sunday, 1 for Monday, etc.).</p>
    <p>Category: Time Zone Converter</p>
    <p>Tags: Date, Day, Weekday, Calendar, Time Zone Converter</p>
    <p>disclaimer: This Date to Day Converter is provided for informational purposes only. While we strive for accuracy, we cannot guarantee the correctness of the results. Always double-check important dates with a reliable calendar source.</p>
    <p>Related Calculators: Date Difference Calculator, Day of the Year Calculator, Leap Year Calculator</p>
    <p>Meta Description: Use our Date to Day Converter to find out the day of the week for any date. Perfect for planning events, remembering birthdays, or historical research.</p>
    <p>
  `;

  window.dateToDay = function () {
    const d = new Date(document.getElementById("dateDay").value);
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    document.getElementById("dayResult").innerHTML =
      `<b>Day:</b> ${days[d.getDay()]}`;
  };

  return div;
}
