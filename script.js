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
if (whatsappBtn) {

    whatsappBtn.addEventListener("click", () => {

        const name = document.querySelector('input[type="text"]').value;
        const phone = document.querySelector('input[type="tel"]').value;
        const size = document.querySelector("select").value;
        const quantity = document.querySelector('input[type="number"]').value;

        const division = document.getElementById("division").value;
        const district = document.getElementById("district").value;
        const address = document.getElementById("address").value;

        const message =
`🛍️ রঙতুলি ফ্যাশন হাউজ

Order ID: ${orderId.textContent}

নাম: ${name}
মোবাইল: ${phone}
সাইজ: ${size}
পরিমাণ: ${quantity}

বিভাগ: ${division}
জেলা: ${district}
ঠিকানা: ${address}`;

        window.open(
            "https://wa.me/8801988508824?text=" +
            encodeURIComponent(message),
            "_blank"
        );

    });

}
// ===== Step 8B =====

const districtData = {
    "ঢাকা":["ঢাকা","গাজীপুর","নারায়ণগঞ্জ","মানিকগঞ্জ"],
    "চট্টগ্রাম":["চট্টগ্রাম","কক্সবাজার","কুমিল্লা","ফেনী"],
    "রাজশাহী":["রাজশাহী","বগুড়া","পাবনা"],
    "খুলনা":["খুলনা","যশোর","সাতক্ষীরা"],
    "বরিশাল":["বরিশাল","ভোলা","পটুয়াখালী"],
    "সিলেট":["সিলেট","মৌলভীবাজার","হবিগঞ্জ"],
    "রংপুর":["রংপুর","দিনাজপুর","কুড়িগ্রাম"],
    "ময়মনসিংহ":["ময়মনসিংহ","জামালপুর","নেত্রকোনা"]
};

const division = document.getElementById("division");
const district = document.getElementById("district");

if (division) {

    division.addEventListener("change", function(){

        district.innerHTML =
        '<option value="">জেলা নির্বাচন করুন</option>';

        const list = districtData[this.value] || [];

        list.forEach(item=>{

            district.innerHTML +=
            `<option>${item}</option>`;

        });

    });

}
// ===== Admin Panel =====

const addProductBtn = document.getElementById("addProductBtn");

if(addProductBtn){

    addProductBtn.addEventListener("click",()=>{

        alert("পরবর্তী ধাপে নতুন পণ্য যোগ করার সিস্টেম যুক্ত করা হবে।");

    });

}
// ===== Sidebar =====

const sidebar = document.getElementById("sidebar");
const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");

if(openMenu){
    openMenu.addEventListener("click",()=>{
        sidebar.classList.add("active");
    });
}

if(closeMenu){
    closeMenu.addEventListener("click",()=>{
        sidebar.classList.remove("active");
    });
}
// ===== Product Filter =====

const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        products.forEach(product => {

            if (
                filter === "all" ||
                product.dataset.category === filter
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});
// ===== Product Gallery =====

function changeImage(id, image){

    document.getElementById(id).src = image;

}
// ===== Wishlist =====

document.querySelectorAll(".wishlist-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        btn.textContent =
            btn.classList.contains("active") ? "♥" : "♡";

    });

});
