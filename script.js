function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

function filterProducts() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const priceFilter = document.getElementById("priceFilter");
    const products = document.querySelectorAll(".collection-product");
    const productCount = document.getElementById("productCount");
    const noProducts = document.getElementById("noProducts");

    if (!searchInput || !categoryFilter || !priceFilter) {
        return;
    }

    const searchValue = searchInput.value.toLowerCase().trim();
    const categoryValue = categoryFilter.value;
    const priceValue = priceFilter.value;

    let count = 0;

    products.forEach(function(product) {
        const name = product.dataset.name.toLowerCase();
        const category = product.dataset.category.toLowerCase();
        const price = Number(product.dataset.price);

        const matchesSearch = name.includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            category === categoryValue;

        let matchesPrice = true;

        if (priceValue === "under1000") {
            matchesPrice = price < 1000;
        } else if (priceValue === "1000-2000") {
            matchesPrice = price >= 1000 && price <= 2000;
        } else if (priceValue === "above2000") {
            matchesPrice = price > 2000;
        }

        if (matchesSearch && matchesCategory && matchesPrice) {
            product.style.display = "block";
            count++;
        } else {
            product.style.display = "none";
        }
    });

    if (productCount) {
        productCount.textContent = count;
    }

    if (noProducts) {
        noProducts.style.display = count === 0 ? "block" : "none";
    }
}

function clearFilters() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const priceFilter = document.getElementById("priceFilter");

    if (searchInput) {
        searchInput.value = "";
    }

    if (categoryFilter) {
        categoryFilter.value = "all";
    }

    if (priceFilter) {
        priceFilter.value = "all";
    }

    filterProducts();
}

function subscribeNewsletter(event) {
    event.preventDefault();

    alert("Thank you for subscribing to Nostra!");

    event.target.reset();
}

function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been sent successfully.");

    event.target.reset();
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("productContainer")) {
        filterProducts();
    }
});