document.addEventListener("DOMContentLoaded", function () {
    const items = document.getElementById("category-menu");
    items.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "./category-manager.html";
    });

    const itemss = document.getElementById("category-pro");
    itemss.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "./product-manager.html"; // Thay đổi đường dẫn tại đây
    });

    const dashboardMenu = document.getElementById("dashboard-menu");
    dashboardMenu.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "./product-manager.html";
    });

    const modal = document.querySelector(".modal");
    const openModal = document.getElementById("myModal");
    const cancelButton = document.getElementById("cancelButton");
    const saveButton = document.getElementById("saveButton");
    const closeButtonAdd = document.getElementById("closeButtonAdd");

    openModal.addEventListener("click", function () {
        modal.style.display = "flex";
        document.getElementById("modal-title").textContent = "Thêm mới sản phẩm";
        document.getElementById("maSanPham").value = "";
        document.getElementById("tenSanPham").value = "";
        document.getElementById("giaSanPham").value = "";
        document.getElementById("soLuongSanPham").value = "";
        document.getElementById("dangHoatDong").checked = true;
    });

    cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    closeButtonAdd.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    const editModal = document.querySelector(".edit-modal");
    const closeButtonEditModal = document.getElementById("closeButton");
    const cancelButtonEditModal = document.querySelector("#edit-modal .cancel-button");

    closeButtonEditModal.addEventListener("click", function () {
        editModal.style.display = "none";
    });

    if (cancelButtonEditModal) {
        cancelButtonEditModal.addEventListener("click", function () {
            editModal.style.display = "none";
        });
    } else {
        console.error("Không tìm thấy nút Hủy trong modal chỉnh sửa.");
    }

    window.onclick = function (event) {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    };

    const logoutIcon = document.getElementById('logout-icon');
    logoutIcon.addEventListener('click', function () {
        const confirmLogout = confirm("Xác nhận đăng xuất?");
        if (confirmLogout) {
            window.location.href = './login.html';
        }
    });

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let currentPage = 1;
    const itemsPerPage = 5;
    let sortOrder = "asc";

    function renderProducts() {
        const tableBody = document.getElementById("product-table-body");
        tableBody.innerHTML = "";

        const statusFilter = document.getElementById("status").value;
        const searchName = document.getElementById("search-name").value.toLowerCase();

        let filteredProducts = products.filter(product => {
            const statusMatch = statusFilter === "" || product.status === statusFilter;
            const nameMatch = product.name.toLowerCase().includes(searchName);
            return statusMatch && nameMatch;
        });

        filteredProducts.sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageProducts = filteredProducts.slice(startIndex, endIndex);

        pageProducts.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td class="${product.status}">${product.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
                <td>
                    <button class="delete" data-id="${product.id}">
                        <img src="/Project_Frontend_Fundamental/assets/delete.png" alt="Xóa">
                    </button>
                    <button class="edit-button" data-id="${product.id}">
                        <img src="/Project_Frontend_Fundamental/assets/fix.png" alt="Sửa">
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        renderPagination(filteredProducts.length);
        addEventListeners();
    }

    function showNotification(message) {
        const notification = document.getElementById("notification");
        const notificationMessage = document.getElementById("notification-message");

        notificationMessage.textContent = message;
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);
    }

    document.querySelector("th:nth-child(2)").addEventListener("click", function () {
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
        renderProducts();
    });

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.className = "page-item";
            li.innerHTML = `<a href="#" class="page-link ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</a>`;
            pagination.appendChild(li);
        }
    }

    function addEventListeners() {
        document.querySelectorAll(".page-link").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                currentPage = parseInt(this.dataset.page);
                renderProducts();
            });
        });

        document.querySelectorAll(".delete").forEach(button => {
            button.addEventListener("click", function () {
                const id = this.dataset.id;
                const confirmDelete = confirm("Xác nhận xóa sản phẩm?");
                if (confirmDelete) {
                    products = products.filter(product => product.id !== id);
                    localStorage.setItem("products", JSON.stringify(products));
                    showNotification("Xóa sản phẩm thành công!");
                    renderProducts();
                }
            });
        });

        document.querySelectorAll(".edit-button").forEach(button => {
            button.addEventListener("click", function () {
                const id = this.dataset.id;
                const product = products.find(product => product.id === id);
                if (product) {
                    document.getElementById("edit-modal").style.display = "flex";
                    document.getElementById("productCode").value = product.id;
                    document.getElementById("productName").value = product.name;
                    document.getElementById("productPrice").value = product.price;
                    document.getElementById("productQuantity").value = product.quantity;
                    document.getElementById(product.status === "active" ? "statusActive" : "statusInactive").checked = true;
                    document.getElementById("edit-form").dataset.id = id;
                }
            });
        });
    }

    document.getElementById("edit-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const id = this.dataset.id;
        const name = document.getElementById("productName").value;
        const price = document.getElementById("productPrice").value;
        const quantity = document.getElementById("productQuantity").value;
        const status = document.querySelector('input[name="productStatus"]:checked').value;

        if (!name || !price || !quantity) {
            showNotification("Vui lòng nhập đầy đủ thông tin sản phẩm!");
            return;
        }

        if (products.some(product => product.name === name && product.id !== id)) {
            showNotification("Tên sản phẩm đã tồn tại!");
            return;
        }

        const productIndex = products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            products[productIndex].name = name;
            products[productIndex].price = price;
            products[productIndex].quantity = quantity;
            products[productIndex].status = status;
            localStorage.setItem("products", JSON.stringify(products));
            showNotification("Cập nhật sản phẩm thành công!");
            renderProducts();
            document.getElementById("edit-modal").style.display = "none";
        }
    });

    saveButton.addEventListener("click", function () {
        const id = document.getElementById("maSanPham").value;
        const name = document.getElementById("tenSanPham").value;
        const price = document.getElementById("giaSanPham").value;
        const quantity = document.getElementById("soLuongSanPham").value;
        const status = document.querySelector('input[name="trangThai"]:checked').value;

        if (!id || !name || !price || !quantity) {
            showNotification("Vui lòng nhập đầy đủ thông tin sản phẩm!");
            return;
        }

        if (products.some(product => product.id === id)) {
            showNotification("Mã sản phẩm đã tồn tại!");
            return;
        }

        if (products.some(product => product.name === name)) {
            showNotification("Tên sản phẩm đã tồn tại!");
            return;
        }

        products.push({ id, name, price, quantity, status });
        localStorage.setItem("products", JSON.stringify(products));
        showNotification("Thêm mới sản phẩm thành công!");
        modal.style.display = "none";
        renderProducts();
    });

    document.getElementById("status").addEventListener("change", renderProducts);
    document.getElementById("search-name").addEventListener("input", renderProducts);

    renderProducts();
});