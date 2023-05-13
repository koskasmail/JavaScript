// Function to fetch the JSON data
async function fetchJSON() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      return data.records;
    } catch (error) {
      console.log('Error:', error);
      return [];
    }
  }
  
  // Function to display a random JSON record
  function displayRandomRecord(records) {
    const recordContainer = document.getElementById('record-container');
  
    if (records.length === 0) {
      recordContainer.textContent = 'No records found.';
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * records.length);
    const randomRecord = records[randomIndex];
  
    const recordHTML = `
      <p><strong>ID:</strong> ${randomRecord.id}</p>
      <p><strong>Name:</strong> ${randomRecord.name}</p>
      <p><strong>Age:</strong> ${randomRecord.age}</p>
    `;
  
    recordContainer.innerHTML = recordHTML;
  }
  
  // Fetch JSON data and display a random record when the page loads
  window.addEventListener('DOMContentLoaded', async () => {
    const records = await fetchJSON();
    displayRandomRecord(records);
  });
  