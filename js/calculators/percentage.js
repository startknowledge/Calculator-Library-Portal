export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <br><br>
    <input id="value" type="number" placeholder="Value"><br>
    <input id="total" type="number" placeholder="Total"><br>
    <button id="btn">Calculate</button>
    <p id="r"></p>
  `;

  setTimeout(() => {
    document.getElementById("btn").onclick = () => {
      const v = +document.getElementById("value").value;
      const t = +document.getElementById("total").value;

      if (t === 0) return document.getElementById("r").innerText = "Total cannot be zero";

      document.getElementById("r").innerText = "Percentage: " + ((v / t) * 100).toFixed(2) + "%";
    };
  }, 20);

  return box;
}
