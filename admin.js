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
