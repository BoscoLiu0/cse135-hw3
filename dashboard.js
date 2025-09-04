document.addEventListener("DOMContentLoaded", async () => {
  const API_BASE = "https://ucsdcse135.site/api";

  try {
    const res = await fetch(`${API_BASE}/static`);
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("No static data found.");
      return;
    }

    // 1. Pathname distribution
    const pathnameCount = {};
    data.forEach(row => {
      const pathname = row.pathname || "Unknown";
      pathnameCount[pathname] = (pathnameCount[pathname] || 0) + 1;
    });
    drawPieChart("pathnameChart", pathnameCount);

    // 2. JavaScript enabled (Boolean)
    const jsEnabledCount = { "Enabled": 0, "Disabled": 0 };
    data.forEach(row => {
      if (row.js_enabled === true || row.js_enabled === "true" || row.js_enabled === 1) {
        jsEnabledCount["Enabled"]++;
      } else {
        jsEnabledCount["Disabled"]++;
      }
    });
    drawBarChart("jsChart", jsEnabledCount);

// 3. Connection Type Chart (e.g., wifi, 4g, etc.)
const connectionCount = {};
data.forEach(row => {
  const conn = row.connection_type || "unknown";
  connectionCount[conn] = (connectionCount[conn] || 0) + 1;
});
drawBarChart("connChart", connectionCount);

    // 4. Grid: ZingGrid can load data automatically
    document.querySelector("zing-grid").setAttribute("src", `${API_BASE}/static`);
  } catch (err) {
    console.error("Failed to load dashboard data:", err);
  }
});

function drawPieChart(canvasId, dataMap) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(dataMap),
      datasets: [{
        data: Object.values(dataMap),
        backgroundColor: generateColors(Object.keys(dataMap).length),
      }]
    },
    options: {
      responsive: true
    }
  });
}

function drawBarChart(canvasId, dataMap) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(dataMap),
      datasets: [{
        label: "Count",
        data: Object.values(dataMap),
        backgroundColor: generateColors(Object.keys(dataMap).length),
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function generateColors(n) {
  const colors = [];
  const baseColors = [
    "#4e79a7", "#f28e2b", "#e15759", "#76b7b2",
    "#59a14f", "#edc949", "#af7aa1", "#ff9da7",
    "#9c755f", "#bab0ab"
  ];
  for (let i = 0; i < n; i++) {
    colors.push(baseColors[i % baseColors.length]);
  }
  return colors;
}
