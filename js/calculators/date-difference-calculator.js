export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Start Date:</label>
    <input type="date" id="startDate">

    <label>End Date:</label>
    <input type="date" id="endDate">

    <button onclick="dateDiff()">Calculate</button>
    <p id="diffResult"></p>
    <br>
    <p><i>Calculate the difference between two dates in days.</i></p>
    <p>Example: If you enter "2023-01-01" as the start date and "2023-01-31" as the end date, the result will be "30 days".</p>
    <p>Use this tool to find out the number of days between any two dates for planning events, tracking deadlines, or calculating durations.</p>
    <p>Note: Make sure to enter the dates in the correct format (YYYY-MM-DD) for accurate results.</p>
    <p>Formula: The difference in days is calculated by subtracting the two dates and converting the result from milliseconds to days.</p>
    <p>Category: Age & Date Calculators</p>
    <p>Tags: Date Difference, Days Between Dates, Calendar, Age & Date Calculators</p>
    <p>See more: <a href="/age-calculator.html">Age Calculator</a>, <a href="/working-days-calculator.html">Working Days Calculator</a>, <a href="/retirement-age-calculator.html">Retirement Age Calculator</a></p>
    <p>Formula: The difference in days is calculated by subtracting the two dates and converting the result from milliseconds to days.</p>
    <p>Meta Description: Use our Date Difference Calculator to find the number of days between two dates. Ideal for event planning, deadline tracking, and duration calculations.</p>
    <p>
  `;

  window.dateDiff = function () {
    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);

    if (!start || !end) return;

    let diffMs = Math.abs(end - start);
    let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    document.getElementById("diffResult").innerHTML =
      `<b>Total Days:</b> ${diffDays}`;
  };

  return div;
}
