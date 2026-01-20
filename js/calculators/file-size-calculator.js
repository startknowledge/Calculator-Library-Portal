export default function () {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>File Size Calculator</h3>

    <label>Bitrate (Mbps)</label>
    <input id="rate" value="5">

    <label>Duration (minutes)</label>
    <input id="time" value="10">

    <button onclick="calcFile()">Calculate</button>
    <p id="fileResult"></p>
  `;

  window.calcFile = function () {
    let rate = +document.getElementById("rate").value;
    let time = +document.getElementById("time").value;

    let size = (rate * time * 60) / 8;

    document.getElementById("fileResult").innerHTML =
      `<b>File Size:</b> ${size.toFixed(2)} MB`;
  };

  return div;
}
