export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Date of Birth:</label>
    <input type="date" id="dob">
    <button onclick="calcAge()">Calculate Age</button>
    <p id="ageResult"></p>
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
