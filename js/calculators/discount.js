export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
   <br><br>
    <input id="price" type="number" placeholder="Price"><br>
    <input id="per" type="number" placeholder="Discount %"><br>
    <button id="btn">Calculate</button>
    <p id="r"></p>
    <br>
    <p><u>Explanation about Discount Calculator</u> :</p>
    <p>The Discount Calculator is a simple yet effective tool designed to help users quickly determine the discount amount and final price of an item after applying a percentage discount. This calculator is particularly useful for shoppers, retailers, and anyone looking to make informed purchasing decisions by understanding the financial impact of discounts.</p>
    <p>To use the Discount Calculator, simply input the original price of the item and the discount percentage you wish to apply. Upon clicking the "Calculate" button, the calculator will compute both the discount amount and the final price after the discount has been applied.</p>
    <p>This tool is especially beneficial during sales events, holiday shopping, or when comparing prices across different retailers. By providing a clear breakdown of savings, the Discount Calculator empowers users to make smarter financial choices and take advantage of promotional offers.</p>
    <p>Disclaimer: This tool is intended for informational purposes only and should not be used as a substitute for professional financial advice.</p>
    <br>
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
