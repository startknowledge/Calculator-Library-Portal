export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Date of Birth:</label>
    <input type="date" id="dob">
    <button onclick="calcAge()">Calculate Age</button>
    <p id="ageResult"></p>
     
    <p><u>Explanation about Age Calculation</u> :</p>
    <p>Age calculation is the process of determining the length of time that has elapsed since a person's birth date up to the current date. It is typically expressed in years, months, and days. Accurate age calculation is important for various legal, medical, and social purposes, such as determining eligibility for certain rights and services, assessing health risks, and understanding demographic information.</p>
    <p>The most common method of calculating age involves subtracting the birth year from the current year. However, to obtain a precise age, it is essential to consider the birth month and day as well. If the current date has not yet reached the birthday in the current year, one year is subtracted from the total.</p>
    <p>For example, if a person was born on June 15, 1990, and today's date is March 10, 2023, the calculation would be as follows:</p>
    <ul>
      <li>Current Year - Birth Year: 2023 - 1990 = 33 years</li>
      <li>Since March 10 is before June 15, we subtract one year: 33 - 1 = 32 years</li>
      <li>Next, we calculate the months and days from the last birthday to the current date.</li>
      <li>From June 15, 2022, to March 10, 2023, is 8 months and 23 days.</li>
    </ul>
    <p>Therefore, the person's age would be 32 years, 8 months, and 23 days.</p>
    <p>Various tools and software applications are available to assist with age calculation, ensuring accuracy and convenience. These tools often take into account leap years and varying month lengths to provide precise results.</p>
    <p>Understanding age calculation is essential for individuals and organizations alike, as it plays a crucial role in many aspects of life, from legal matters to healthcare and social services.</p>
    <p>For more detailed information, please refer to demographic studies or official guidelines on age calculation.</p>
    <p>Disclaimer: The explanation provided here is for general informational purposes only and may not cover all aspects of age calculation. For specific details, please consult official resources or professionals in relevant fields.</p>
        
  `;

  window.calcAge = function () {
    let dob = new Date(document.getElementById("dob").value);
    if (!dob) return;

    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    document.getElementById("ageResult").innerHTML =
      `<b>Age:</b> ${years} Years, ${months} Months, ${days} Days`;
  };

  return div;
}
