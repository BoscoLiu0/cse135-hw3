## 🌐 Site URL
- https://reporting.ucsdcse135.site
  
## 🧑‍🤝‍🧑 Team Members
- Liu

## 📊 Dashboard Design

We chose 3 metrics:
1. **Pathname** – bar chart showing most visited pages.
2. **JavaScript Enabled** – pie chart showing which users have JS.
3. **Full static data** – ZingGrid table with sortable/filterable sessions.

Chart.js and ZingGrid are used. The data comes from `/api/static`. Charts are rendered dynamically on DOMContentLoaded.

---

## 📄 Detailed Report (Part 6)

### Metric: `jsEnabled`
### Question: How many users visiting our site have JavaScript enabled?

- **Chart type**: Pie chart (shows percentage visually).
- **Grid**: Full static table using ZingGrid.
- **Why**: JS is essential for analytics. Knowing how many users disable JS helps us design proper fallbacks.

## Extra Credit:
- `pathname.html`: shows which pages are most visited.
- `loadtime.html`: visualizes page load time performance.
- `useragent.html`: displays the types of devices/browsers used.
- `sessionid.html`: shows active session IDs and how they are tracked.
