let employees = JSON.parse(localStorage.getItem("employees")) || [];
let currentPage = 1;
const rowsPerPage = 3;

function addEmployee() {
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    if (name && position) {
        employees.push({ name, position });
        localStorage.setItem("employees", JSON.stringify(employees));
        document.getElementById("name").value = "";
        document.getElementById("position").value = "";
        displayEmployees();
    }
}

function displayEmployees() {
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";
    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedItems = employees.slice(start, end);
    paginatedItems.forEach((emp, index) => {
        let row = `<tr>
                    <td>${start + index + 1}</td>
                    <td>${emp.name}</td>
                    <td>${emp.position}</td>
                </tr>`;
        table.innerHTML += row;
    });
    updatePagination();
}

function updatePagination() {
    const pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";
    let totalPages = Math.ceil(employees.length / rowsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.innerHTML += `<button onclick="goToPage(${i})">${i}</button>`;
    }
}

function goToPage(page) {
    currentPage = page;
    displayEmployees();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayEmployees();
    }
}

function nextPage() {
    let totalPages = Math.ceil(employees.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayEmployees();
    }
}

displayEmployees();