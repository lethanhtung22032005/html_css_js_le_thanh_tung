class Employee {
    constructor(id, name, position, salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmployeeManager {
    constructor() {
        this.employees = [];
    }

    add(id, name, position, salary) {
        this.employees.push(new Employee(id, name, position, salary));
        console.log("Đã thêm nhân viên!");
    }

    remove(id) {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1 && confirm(`Xóa nhân viên ID ${id}?`)) {
            this.employees.splice(index, 1);
            console.log("Đã xóa!");
        } else console.log("Không tìm thấy ID.");
    }

    update(id, salary) {
        const emp = this.employees.find(e => e.id === id);
        emp ? (emp.salary = salary, console.log("Cập nhật lương!")) : console.log("Không tìm thấy ID.");
    }

    search(name) {
        const result = this.employees.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        console.log(result.length ? result : "Không tìm thấy.");
    }
}

const test = new EmployeeManager();
test.add(1, "Nguyễn Văn A", "Dev", 1000);
test.add(2, "Trần Thị B", "Design", 1200);
test.add(3, "Lê Văn C", "Manager", 1500);
test.remove(2);
test.update(1, 1300);
test.search("Nguyễn");
