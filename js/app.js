let activeMenuItem = null;
let activeSubmenuItem = null;
// LOAD MAIN MENU
const menuContainer = document.getElementById("menu");
const submenuContainer = document.getElementById("submenu");
const resultArea = document.getElementById("resultArea");

// Create menu list
Object.keys(calculatorData).forEach(category => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.innerHTML = category;

  menuItem.onclick = () => {
  // Remove old active menu
  document.querySelectorAll(".menu-item")
    .forEach(item => item.classList.remove("active"));

  // Set new active
  menuItem.classList.add("active");
  activeMenuItem = category;

  loadSubmenu(category);
};
  menuContainer.appendChild(menuItem);
});

// LOAD SUBMENU
function loadSubmenu(category) {
  submenuContainer.innerHTML = "";

  calculatorData[category].forEach(calc => {
    const item = document.createElement("div");
    item.classList.add("submenu-item");
    item.innerHTML = calc;
    item.onclick = () => {
      // Remove old active submenu
      document.querySelectorAll(".submenu-item")
        .forEach(i => i.classList.remove("active"));

      // Set active submenu
      item.classList.add("active");
      activeSubmenuItem = calc;

      loadCalculator(calc);
    };

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
