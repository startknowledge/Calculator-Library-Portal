export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>Internet Data Usage Calculator</h3>

    <label>Speed (Mbps)</label>
    <input id="speed" value="10">

    <label>Usage Time (hours)</label>
    <input id="hours" value="2">

    <button onclick="calcData()">Calculate</button>
    <p id="dataResult"></p>
  `;

  window.calcData = function () {
    let speed = +document.getElementById("speed").value;
    let hours = +document.getElementById("hours").value;

    let data = (speed * hours * 3600) / 8 / 1024;

    document.getElementById("dataResult").innerHTML =
      `<b>Data Used:</b> ${data.toFixed(2)} GB`;
  };

  return div;
}
