let activeMenuItem = null;

const menuContainer = document.getElementById("menu");
const submenuContainer = document.getElementById("submenu");
const resultArea = document.getElementById("resultArea");
const menuSearch = document.getElementById("menuSearch");

function activateCategory(categoryName, calculatorName) {

  // 🔥 Highlight main category (with badge-safe matching)
  document.querySelectorAll(".menu-item").forEach(item => {
    const text = item.querySelector(".menu-text")?.textContent;

    if (text === categoryName) {
      item.classList.add("active");
      activeMenuItem = categoryName;   // ✅ IMPORTANT
    } else {
      item.classList.remove("active");
    }
  });

  // Load submenu
  loadSubmenu(categoryName);

  // Highlight calculator inside submenu
  setTimeout(() => {
    document.querySelectorAll(".submenu-item").forEach(item => {
      if (item.textContent === calculatorName) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, 50);
}


/* =========================
   CREATE CATEGORY MENU
========================= */
Object.keys(calculatorData).forEach(category => {
  const div = document.createElement("div");
  div.className = "menu-item";
  const count = calculatorData[category].length;

  div.innerHTML = `
  
  <span class="menu-text">${category}</span>
  <span class="menu-badge">${count}</span>
  <span class="pin" title="Pin Category">📌</span> 
`;

  const pin = div.querySelector(".pin");
  pin.onclick = e => {
    e.stopPropagation(); // prevent category click
    localStorage.setItem("pinnedCategory", category);
    renderMenu(); // re-render menu with pinned category on top
  };

  div.onclick = () => {
    document.querySelectorAll(".menu-item")
      .forEach(i => i.classList.remove("active"));

    div.classList.add("active");
    activeMenuItem = category;
    loadSubmenu(category);
  };

  menuContainer.appendChild(div);
});

/* =========================
   🔍 GLOBAL SEARCH FUNCTION
========================= */
function globalSearch() {
  const text = menuSearch.value.toLowerCase().trim();

  submenuContainer.innerHTML = "";
  resultArea.innerHTML = "<h2>Search Results</h2>";

  if (text === "") {
    resultArea.innerHTML = `
      <h2>Select any calculator</h2>
      <p>Type calculator name in search box</p>
    `;
    return;
  }

  let found = false;

  Object.keys(calculatorData).forEach(category => {
    calculatorData[category].forEach(calc => {
      if (calc.toLowerCase().includes(text)) {
        found = true;

        const item = document.createElement("div");
        item.className = "submenu-item";
        item.textContent = `${calc} (${category})`;

        item.onclick = () => {
          // remove active from all search results
          document.querySelectorAll(".submenu-item #resultArea ")
            .forEach(el => el.classList.remove("active"));
          item.classList.add("active"); // ✔ tick / highlight

          activateCategory(category, calc);
          loadCalculator(calc);
        };

        resultArea.appendChild(item);
      }
    });
  });

  if (!found) {
    resultArea.innerHTML += "<p>No calculator found.</p>";
  }
}

if (menuSearch) {
  menuSearch.addEventListener("input", globalSearch);
}

/* =========================
   LOAD SUBMENU
========================= */
function loadSubmenu(category) {
  submenuContainer.innerHTML = "";

  const favs = getFavourites();

  calculatorData[category].forEach(calc => {
    const row = document.createElement("div");
    row.className = "submenu-item-row";

    const name = document.createElement("span");
    name.textContent = calc;
    name.className = "submenu-item";

    const star = document.createElement("span");
    star.textContent = "⭐";
    star.className = "star";
    if (favs.includes(calc)) star.classList.add("active");

    star.onclick = e => {
      e.stopPropagation();
      toggleFavourite(calc);
      star.classList.toggle("active");
    };

    row.onclick = () => {
      document.querySelectorAll(".submenu-item-row")
        .forEach(i => i.classList.remove("active"));
      row.classList.add("active");
      activateCategory(category, calc);
      loadCalculator(calc);
    };

    row.appendChild(name);
    row.appendChild(star);
    submenuContainer.appendChild(row);
  });
}


function renderRecent() {
  const recent = JSON.parse(localStorage.getItem("recent") || "[]");
  const recentContainer = document.getElementById("recent");
  if(!recentContainer) return;

  recentContainer.innerHTML = "<h3>Recently Used</h3>";
  recent.forEach(calc => {
    const div = document.createElement("div");
    div.textContent = calc;
    div.className = "submenu-item recent-item";
    div.onclick = () => loadCalculator(calc);
    recentContainer.appendChild(div);
  });
}
/* =========================
   LOAD CALCULATOR
========================= */
function loadCalculator(name) {
  resultArea.innerHTML = `<h2>${name}</h2>`;
  localStorage.setItem("lastOpened", name);
  addRecent(name); // add to recent list

  import(`./calculators/${name.toLowerCase().replace(/ /g, '-')}.js`)
    .then(m => resultArea.appendChild(m.default()))
    .catch(() => {
      resultArea.innerHTML += "<p>Calculator file not found.</p>";
    });
  }

// On page load:
window.addEventListener("DOMContentLoaded", () => {
  const last = localStorage.getItem("lastOpened");
  if(last) activateCategory(activeMenuItem || "Default", last);
});
    

function addRecent(calc) {
  let recent = JSON.parse(localStorage.getItem("recent") || "[]");
  recent = recent.filter(c => c !== calc); // remove duplicate
  recent.unshift(calc);
  if(recent.length > 5) recent.pop();
  localStorage.setItem("recent", JSON.stringify(recent));
}
document.addEventListener("keydown", function(e) {
  if(e.key === "Enter") {
    const activeItem = document.querySelector(".submenu-item.active");
    if(activeItem) activeItem.click();
  }
});

function getFavourites() {
  return JSON.parse(localStorage.getItem("favourites") || "[]");
}

function toggleFavourite(calc) {
  let favs = getFavourites();
  if (favs.includes(calc)) {
    favs = favs.filter(c => c !== calc);
  } else {
    favs.push(calc);
  }
  localStorage.setItem("favourites", JSON.stringify(favs));
}
function renderMenu() {
  const pinnedCategory = localStorage.getItem("pinnedCategory");
  if (!pinnedCategory) return; // no pinned category
  const items = Array.from(menuContainer.children);
  const pinnedItem = items.find(item => {
    const text = item.querySelector(".menu-text")?.textContent;
    return text === pinnedCategory;
  });
  if (pinnedItem) {
    menuContainer.prepend(pinnedItem);
  }
}
renderMenu();
renderRecent();





