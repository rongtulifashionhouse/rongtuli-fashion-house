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
