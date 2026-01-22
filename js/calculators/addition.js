export default function () {
  const box = document.createElement("div");

  box.innerHTML = `
    <label>Enter A:</label>
    <input id="addA" type="number">

    <label>Enter B:</label>
    <input id="addB" type="number">

    <button id="calcAdd">Calculate</button>
    <h3 id="addResult"></h3>
    <p><u>Explanation about addition</u> :</p>
    <p>Addition is one of the basic operations in arithmetic, representing the process of combining two or more numbers to get a total sum. 
    It is denoted by the plus sign (+). For example, when you add 2 and 3, you combine them to get 5.</p>
    <p>Addition is commutative, meaning that the order of the numbers does not affect the result (e.g., 2 + 3 is the same as 3 + 2).
    It is also associative, which means that when adding three or more numbers, the grouping of the numbers does not change the sum (e.g., (2 + 3) + 4 is the same as 2 + (3 + 4)).
    <p>Addition is a fundamental concept used in various fields, including mathematics, finance, and everyday life, to quantify and combine values.</p>
  `;

  setTimeout(() => {
    document.getElementById("calcAdd").onclick = () => {
      let a = Number(document.getElementById("addA").value);
      let b = Number(document.getElementById("addB").value);
      document.getElementById("addResult").innerHTML = "Result: " + (a + b);
    };
  }, 50);

  return box;
}
