// ===== Admin Login =====

function loginAdmin(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    if(username==="admin" && password==="123456"){

        alert("লগইন সফল!");

    }else{

        document.getElementById("loginMessage")
        .innerText="ইউজারনেম অথবা পাসওয়ার্ড ভুল হয়েছে।";

    }

}
// ===== Dashboard Login =====

function loginAdmin(){

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

if(user==="admin" && pass==="123456"){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

}else{

document.getElementById("loginMessage").innerHTML="ভুল Username অথবা Password";

}

}
// ===== Product Form =====

function showProductForm(){

document.getElementById("productForm").style.display="block";

}

function logoutAdmin(){

document.getElementById("dashboard").style.display="none";

document.getElementById("loginBox").style.display="block";

}
// ===== Product Save =====

function saveProduct(){

const name=document.getElementById("productName").value;

const price=document.getElementById("productPrice").value;

if(name===""||price===""){

alert("সব তথ্য দিন");

return;

}

const item=document.createElement("div");

item.className="product-item";

item.innerHTML=`
item.innerHTML=`

<b>${name}</b>

<br>

<span>৳ ${price}</span>

<br>

<button class="edit-btn"
onclick="editProduct(this)">

✏️ Edit

</button>

<button class="delete-btn"
onclick="deleteProduct(this)">

🗑️ Delete

</button>

`;

document.getElementById("productList").appendChild(item);

document.getElementById("productName").value="";

document.getElementById("productPrice").value="";

alert("পণ্য যোগ হয়েছে");

}
// ===== Edit & Delete =====

function editProduct(button){

const item=button.parentElement;

const title=item.querySelector("b").innerText;

const price=item.querySelector("span").innerText.replace("৳ ","");

const newTitle=prompt("নতুন পণ্যের নাম",title);

if(newTitle===null)return;

const newPrice=prompt("নতুন দাম",price);

if(newPrice===null)return;

item.querySelector("b").innerText=newTitle;

item.querySelector("span").innerText="৳ "+newPrice;

}

function deleteProduct(button){

if(confirm("আপনি কি এই পণ্যটি মুছে ফেলতে চান?")){

button.parentElement.remove();

}

}
// ===== Image Preview =====

function previewImage(event){

const img=document.getElementById("imagePreview");

img.src=URL.createObjectURL(event.target.files[0]);

img.style.display="block";

}
/* ==========================================
   Admin Login
========================================== */

function loginAdmin(){

const user=document.getElementById("username").value.trim();

const pass=document.getElementById("password").value.trim();

if(user==="admin" && pass==="123456"){

document.getElementById("loginBox").style.display="none";

document.getElementById("dashboard").style.display="block";

}else{

document.getElementById("loginMessage").innerText="❌ ভুল Username অথবা Password";

}

}

/* ==========================================
   Logout
========================================== */

function logoutAdmin(){

document.getElementById("dashboard").style.display="none";

document.getElementById("loginBox").style.display="block";

document.getElementById("username").value="";

document.getElementById("password").value="";

document.getElementById("loginMessage").innerText="";

}

/* ==========================================
   Show Product Form
========================================== */

function showProductForm(){

document.getElementById("productForm").style.display="block";

}

/* ==========================================
   Image Preview
========================================== */

function previewImage(event){

const img=document.getElementById("imagePreview");

img.src=URL.createObjectURL(event.target.files[0]);

img.style.display="block";

}

/* ==========================================
   Save Product
========================================== */

function saveProduct(){

const name=document.getElementById("productName").value;

const category=document.getElementById("productCategory").value;

const price=document.getElementById("productPrice").value;

const discount=document.getElementById("productDiscount").value;

const colour=document.getElementById("productColor").value;

const size=document.getElementById("productSize").value;

const stock=document.getElementById("productStock").value;

const rating=document.getElementById("productRating").value;

const description=document.getElementById("productDescription").value;

const image=document.getElementById("imagePreview").src;

if(name==="" || price===""){

alert("পণ্যের নাম এবং দাম লিখুন");

return;

}

const item=document.createElement("div");

item.className="product-item";

item.innerHTML=`

<img src="${image}" style="width:120px;border-radius:10px;margin-bottom:10px;">

<b>${name}</b>

<span>📂 ${category}</span>

<span>💰 ৳ ${price}</span>

<span>🏷️ ${discount}% Discount</span>

<span>🎨 ${colour}</span>

<span>📏 ${size}</span>

<span>📦 ${stock}</span>

<span>${rating}</span>

<span>${description}</span>

<br>

<button class="edit-btn" onclick="editProduct(this)">✏️ Edit</button>

<button class="delete-btn" onclick="deleteProduct(this)">🗑️ Delete</button>

`;

document.getElementById("productList").appendChild(item);

document.getElementById("productForm").reset();

document.getElementById("imagePreview").style.display="none";

alert("✅ পণ্য সফলভাবে যোগ হয়েছে");

}

/* ==========================================
   Edit Product
========================================== */

function editProduct(btn){

alert("Edit System Module 36-এ সম্পূর্ণ করা হবে।");

}

/* ==========================================
   Delete Product
========================================== */

function deleteProduct(btn){

if(confirm("আপনি কি এই পণ্যটি মুছে ফেলতে চান?")){

btn.parentElement.remove();

}

    }
