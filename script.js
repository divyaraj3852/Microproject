const fetchDataBtn = document.getElementById('fetchDataBtn');
const dataTable = document.getElementById('dataTable');
const tableBody = dataTable.getElementsByTagName('tbody')[0];

fetchDataBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();

    tableBody.innerHTML = '';

    data.forEach(item => {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = item.id;
      row.appendChild(idCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement('td');
      emailCell.textContent = item.email;
      row.appendChild(emailCell);

      const ageCell = document.createElement('td');
      ageCell.textContent = item.age;
      row.appendChild(ageCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});