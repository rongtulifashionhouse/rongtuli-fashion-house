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

<b>${name}</b>

<br>

৳ ${price}

`;

document.getElementById("productList").appendChild(item);

document.getElementById("productName").value="";

document.getElementById("productPrice").value="";

alert("পণ্য যোগ হয়েছে");

}
