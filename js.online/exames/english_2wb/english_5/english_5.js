// script.js

// Fetch the local JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get references to DOM elements
    const searchInput = document.getElementById('searchInput');
    const tableBody = document.getElementById('tableBody');

    // Populate the table with data
    const populateTable = (data) => {
      tableBody.innerHTML = '';
      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.enWord}</td>
          <td>${item.heWord}</td>
        `;
        tableBody.appendChild(row);
      });
    };

    // Filter table based on search input
    searchInput.addEventListener('input', (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredData = data.filter(item => 
        item.enWord.toLowerCase().includes(searchText) ||
        item.heWord.toLowerCase().includes(searchText)
      );
      populateTable(filteredData);
    });

    // Initial population of the table
    populateTable(data);
  })
  .catch(error => console.error(error));
