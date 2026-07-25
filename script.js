// =====================================
// Rongtuli Fashion House
// Step 3
// =====================================

console.log("রঙতুলি ফ্যাশন হাউজ চালু হয়েছে");

// ভবিষ্যতের জন্য থ্রি-ডট মেনুর ভিত্তি
const menuButton = document.querySelector(".menu-btn");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        alert("মেনু অপশন পরবর্তী ধাপে যোগ করা হবে");
    });
}

// সার্চের ভিত্তি
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        console.log("Search:", this.value);
    });
}
// ===== Step 7 : Order Modal =====

const orderModal = document.getElementById("orderModal");
const orderButtons = document.querySelectorAll(".order-btn");
const closeButton = document.querySelector(".close-btn");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        orderModal.style.display = "flex";
    });
});

if (closeButton) {
    closeButton.addEventListener("click", () => {
        orderModal.style.display = "none";
    });
}

// বাইরে ক্লিক করলে বন্ধ হবে
window.addEventListener("click", (e) => {
    if (e.target === orderModal) {
        orderModal.style.display = "none";
    }
});
