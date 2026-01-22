export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Start Date:</label>
    <input type="date" id="workStart">

    <label>End Date:</label>
    <input type="date" id="workEnd">

    <button onclick="calcWorkDays()">Calculate</button>
    <p id="workResult"></p><br>
    <p><u>Explanation about Working Days Calculation</u> :</p>
    <p>Calculating the number of working days between two dates is essential for various purposes, such as project planning, payroll processing, and resource management. Working days typically refer to the days when business operations are conducted, usually excluding weekends (Saturdays and Sundays) and public holidays.</p>
    <p>The formula to calculate the number of working days between two dates involves iterating through each date in the range and counting only those that fall on weekdays (Monday to Friday).</p>
    <p>For example, if the start date is January 1, 2023 (a Sunday), and the end date is January 10, 2023 (a Tuesday), the working days would be calculated as follows:</p>
    <p>Working Days = January 2, 3, 4, 5, 6, 9, 10 = 7 working days</p>
    <p>This means there are 7 working days between January 1 and January 10, 2023, excluding weekends.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of Working Days Calculation. For specific date calculations, please consider public holidays and other non-working days relevant to your region or organization.</p>
    <br>
  `;

  window.calcWorkDays = function () {
    let start = new Date(document.getElementById("workStart").value);
    let end = new Date(document.getElementById("workEnd").value);

    let count = 0;

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      let day = d.getDay();  
      if (day !== 0 && day !== 6) count++;  // Exclude Sat/Sun
    }

    document.getElementById("workResult").innerHTML =
      `<b>Working Days:</b> ${count}`;
  };

  return div;
}
