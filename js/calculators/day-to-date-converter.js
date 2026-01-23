export default function () {
    const div = document.createElement("div");

    div.innerHTML = `
        <label>Day Name:</label>
        <input type="text" id="dayName" placeholder="Monday">

        <label>Month:</label>
        <input type="number" id="month" placeholder="1-12" min="1" max="12">

        <label>Year:</label>
        <input type="number" id="year" placeholder="2024">

        <button onclick="dayToDate()">Find Date</button>
        <p id="dateResult"></p>
        <br>
        <p><i>Find the first date of a specific day in a given month and year.</i></p>
        <p>Example: If you enter "Monday", "1" (January), and "2024", the result will be "January 1, 2024".</p>
        <p>Use this tool to quickly determine dates for planning events, meetings, or any specific day occurrences.</p>
        <p>Note: Ensure to enter valid day names (e.g., Sunday, Monday) and valid month (1-12) and year values for accurate results.</p>
        <p>Formula: The date is calculated by iterating through the days of the specified month until the desired day of the week is found.</p>
        <p>Category: Time Zone Converter</p>
        <p>Tags: Date, Day, Weekday, Calendar, Time Zone Converter</p>
        <p>disclaimer: This Day to Date Converter is provided for informational purposes only. While we strive for accuracy, we cannot guarantee the correctness of the results. Always double-check important dates with a reliable calendar source.</p>
        <p>Related Calculators: Date to Day Converter, Day of the Year Calculator, Leap Year Calculator</p>
        <p>Meta Description: Use our Day to Date Converter to find the first occurrence of a specific day in a given month and year. Perfect for planning events and meetings.</p>
        <br>
    `;

    window.dayToDate = function () {
        const dayName = document.getElementById("dayName").value.trim();
        const month = parseInt(document.getElementById("month").value);
        const year = parseInt(document.getElementById("year").value);

        if (!dayName || !month || !year) {
            document.getElementById("dateResult").innerHTML = "Please fill in all fields.";
            return;
        }

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayIndex = days.findIndex(d => d.toLowerCase() === dayName.toLowerCase());

        if (dayIndex === -1) {
            document.getElementById("dateResult").innerHTML = "Invalid day name.";
            return;
        }

        let date = new Date(year, month - 1, 1);
        while (date.getDay() !== dayIndex) {
            date.setDate(date.getDate() + 1);
        }

        document.getElementById("dateResult").innerHTML = `First ${dayName} in ${month}/${year}: ${date.toDateString()}`;
    };

    return div;
}