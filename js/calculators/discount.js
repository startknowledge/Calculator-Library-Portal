export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
   <br><br>
    <input id="price" type="number" placeholder="Price"><br>
    <input id="per" type="number" placeholder="Discount %"><br>
    <button id="btn">Calculate</button>
    <p id="r"></p>
  `;

  setTimeout(() => {
    document.getElementById("btn").onclick = () => {
      const p = +document.getElementById("price").value;
      const d = +document.getElementById("per").value;

      const discount = (p * d) / 100;
      const final = p - discount;

      document.getElementById("r").innerHTML =
        `Discount: ${discount.toFixed(2)}<br>Final Price: ${final.toFixed(2)}`;
    };
  }, 20);

  return box;
}
