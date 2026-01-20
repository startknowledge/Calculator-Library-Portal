export default function () {
  const div = document.createElement("div");

  // ===== MEN SIZE DATA =====
  const menSizes = {
    44: {
      Head: 21.7, "Neck Size": 14.6, Chest: 34.6, Waist: 29.1,
      "Lower Waist": 30.3, "Hip/Seat": 36.2, Shoulder: 5.1,
      "X-Shoulder": 18.1, "X-Back": 16.3, "X-Front": 15.0,
      "Nape to Waist": 16.5, "Armscye Depth": 8.7,
      "Sleeve Length": 25.2, Elbow: 9.6, Wrist: 6.5,
      "Body Rise": 10.4, "Crotch Length": 24.4,
      Knee: 13.8, Calf: 14.0, "High Ankle": 8.7, Ankle: 9.6
    },
    48: {
      Head: 22.4, "Neck Size": 15.4, Chest: 38.0, Waist: 33.1,
      "Lower Waist": 34.4, "Hip/Seat": 39.0, Shoulder: 5.9,
      "X-Shoulder": 18.9, "X-Back": 17.5, "X-Front": 16.9,
      "Nape to Waist": 17.3, "Armscye Depth": 9.3,
      "Sleeve Length": 26.8, Elbow: 10.0, Wrist: 6.7,
      "Body Rise": 10.6, "Crotch Length": 25.6,
      Knee: 14.6, Calf: 14.8, "High Ankle": 9.1, Ankle: 10.0
    }
  };

  // ===== WOMEN SIZE DATA =====
  const womenSizes = {
    S: {
      Bust: 32.3, Waist: 25.2, "Lower Waist": 32.3, Hip: 34.6,
      Head: 21.3, "Neck Size": 14.0, Shoulder: 4.7,
      "X-Shoulder": 15.0, "X-Back": 13.0, "X-Front": 12.0,
      "HPS to Waist": 16.5, "Nape to Waist": 16.0,
      "Armscye Depth": 8.1, "Sleeve Length": 22.6,
      Biceps: 10.4, Elbow: 8.7, Wrist: 6.1,
      "Waist to Knee": 22.8, "Waist to Hip": 7.9,
      "Waist to Floor": 40.6, "Body Rise": 10.8,
      "Max Thigh": 19.5, Knee: 13.2,
      Calf: 12.2, "High Ankle": 8.1, Ankle: 9.3
    },
    M: {
      Bust: 33.1, Waist: 27.6, "Lower Waist": 34.3, Hip: 37.0,
      Head: 22.0, "Neck Size": 14.6, Shoulder: 4.9,
      "X-Shoulder": 15.4, "X-Back": 13.6, "X-Front": 12.8,
      "HPS to Waist": 16.7, "Nape to Waist": 16.1,
      "Armscye Depth": 8.3, "Sleeve Length": 22.8,
      Biceps: 10.6, Elbow: 8.7, Wrist: 6.3,
      "Waist to Knee": 23.0, "Waist to Hip": 7.9,
      "Waist to Floor": 40.9, "Body Rise": 11.0,
      "Max Thigh": 20.5, Knee: 13.6,
      Calf: 12.8, "High Ankle": 8.3, Ankle: 9.4
    }
  };

  // ===== UI =====
  div.innerHTML = `
    <h3>Tailoring Size Chart Calculator</h3>

    <label>Gender</label>
    <select id="gender">
      <option value="men">Men</option>
      <option value="women">Women</option>
    </select>

    <label>Size</label>
    <select id="size"></select>

    <button id="showBtn">Show Measurements</button>

    <div id="sizeResult" style="margin-top:10px;"></div>
  `;

  // ===== DOM ELEMENTS =====
  const gender = div.querySelector("#gender");
  const size = div.querySelector("#size");
  const sizeResult = div.querySelector("#sizeResult");
  const showBtn = div.querySelector("#showBtn");

  // ===== LOAD SIZE OPTIONS =====
  function loadSizes() {
    size.innerHTML = "";
    const data = gender.value === "men" ? menSizes : womenSizes;

    Object.keys(data).forEach(s => {
      size.innerHTML += `<option value="${s}">${s}</option>`;
    });
  }

  // ===== SHOW TABLE =====
  function showSize() {
    const data =
      gender.value === "men"
        ? menSizes[size.value]
        : womenSizes[size.value];

    let html = `
      <table border="1" cellpadding="6" style="border-collapse:collapse">
        <tr><th>Measurement</th><th>Inches</th></tr>
    `;

    for (let key in data) {
      html += `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
    }
    html += "</table>";

    sizeResult.innerHTML = html;
  }

  // ===== EVENTS =====
  gender.addEventListener("change", loadSizes);
  showBtn.addEventListener("click", showSize);

  loadSizes(); // initial load

  return div;
}
