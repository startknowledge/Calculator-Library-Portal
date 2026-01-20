export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <label>Joining Date:</label>
    <input type="date" id="joinDate">

    <button onclick="calcService()">Calculate</button>
    <p id="serviceResult"></p>
  `;

  window.calcService = function () {
    let join = new Date(document.getElementById("joinDate").value);
    let today = new Date();

    let years = today.getFullYear() - join.getFullYear();
    let months = today.getMonth() - join.getMonth();
    let days = today.getDate() - join.getDate();

    if (days < 0) { months--; days += 30; }
    if (months < 0) { years--; months += 12; }

    document.getElementById("serviceResult").innerHTML =
      `<b>Service:</b> ${years} Years, ${months} Months, ${days} Days`;
  };

  return div;
}
