const tableBody = document.querySelector('#employeesTable tbody');
const form = document.getElementById('employeeForm');
const apiUrl = 'employees.json';

// Fetch and display employees
async function fetchEmployees() {
  const res = await fetch(apiUrl);
  const employees = await res.json();
  displayEmployees(employees);
}

// Display employees in the table
function displayEmployees(employees) {
  tableBody.innerHTML = '';
  employees.forEach(emp => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.department}</td>
      <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Add new employee
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const position = document.getElementById('position').value.trim();
  const department = document.getElementById('department').value.trim();

  const res = await fetch(apiUrl);
  const employees = await res.json();

  const newEmployee = {
    id: employees.length ? employees[employees.length - 1].id + 1 : 1,
    name,
    position,
    department
  };

  employees.push(newEmployee);

  await updateEmployeesFile(employees);
  fetchEmployees();
  form.reset();
});

// Delete employee
async function deleteEmployee(id) {
  const res = await fetch(apiUrl);
  const employees = await res.json();
  const updatedEmployees = employees.filter(emp => emp.id !== id);
  await updateEmployeesFile(updatedEmployees);
  fetchEmployees();
}

// Update the JSON file (requires server)
async function updateEmployeesFile(data) {
  await fetch('/updateEmployees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

// Initialize
fetchEmployees();
