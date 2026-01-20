// LOAD MAIN MENU
const menuContainer = document.getElementById("menu");
const submenuContainer = document.getElementById("submenu");
const resultArea = document.getElementById("resultArea");

// Create menu list
Object.keys(calculatorData).forEach(category => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.innerHTML = category;

  menuItem.onclick = () => loadSubmenu(category);
  menuContainer.appendChild(menuItem);
});

// LOAD SUBMENU
function loadSubmenu(category) {
  submenuContainer.innerHTML = ""; // clear previous submenu

  calculatorData[category].forEach(calc => {
    const item = document.createElement("div");
    item.classList.add("submenu-item");
    item.innerHTML = calc;

    item.onclick = () => loadCalculator(calc);
    submenuContainer.appendChild(item);
  });
}

// LOAD CALCULATOR FORM
function loadCalculator(name) {
  resultArea.innerHTML = `<h2>${name}</h2>`;

  import(`./calculators/${name.toLowerCase().replace(/ /g, '-')}.js`)
    .then(module => {
      resultArea.appendChild(module.default());
    })
    .catch(() => {
      resultArea.innerHTML += "<p>Calculator file not found.</p>";
    });
}