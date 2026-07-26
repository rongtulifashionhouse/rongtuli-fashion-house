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
