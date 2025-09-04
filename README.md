My dashboard shows 3 metrics with 3 different types:

1. **Visited Pathname** (Pie Chart):  
   Helps show which pages are most visited.

2. **JavaScript Enabled** (Bar Chart):  
   Shows if users have JS enabled or not, and connected type.

3. **ZingGrid Table**:  
   Shows full static data from database. You can sort and search.

I use Chart.js and ZingGrid. The data comes from `/api/static` which is backed by a real database.  
Charts are rendered dynamically after `DOMContentLoaded`.
