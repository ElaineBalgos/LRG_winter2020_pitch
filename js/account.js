(()=>{

    console.log("enter account page");

    let logoutBtn = document.getElementById("logout");

    function logout(){
        localStorage.clear();
        // console.log("12345 logout");
        window.location.href = "./index.html";
    }

    function protectPage(){
        if (!localStorage.getItem("user_id")) {
            window.location.href = "./index.html";
        }
    }

    // code starts run here
    logoutBtn.addEventListener("click", logout);
    protectPage();

    if (window.location.href.includes("profile")){
        
        console.log("profile page");

        let submitBtn = document.querySelector(".btn");
        
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let uname = document.getElementById("uname");
        let pword = document.getElementById("pword");
        let email = document.getElementById("email");
        let gender = document.getElementById("gender");

        let msg = document.getElementById("msg");

        let formData = new FormData();
        formData.append("user_id", localStorage.getItem("user_id"));

        let url = "./includes/admin/admin_getuser.php";

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (typeof data === "object"){
                console.log(data);
                
                fname.innerHTML = data.user_fname;
                lname.innerHTML = data.user_lname;
                uname.value = data.user_name;
                email.value = data.user_email;
                
                // gender
                const len = gender.options.length;
                for (let i = 0; i < len; i++){
                    option = gender.options[i];
                    if (option.value === data.user_gender){
                        option.setAttribute("selected", true);
                        break;
                    }
                }

            } else {
                console.log("fetch user info failed");
            }
        })
        .catch(err => console.error(err));

        submitBtn.addEventListener("click", function editUser() {
            console.log("edit user!....");
            let user_name = uname.value;
            let user_pass = pword.value;
            let user_email = email.value;
            let user_gender = gender.options[gender.selectedIndex].value;
      
            if (user_name.trimStart() !== "" && user_email.trimStart() !== "" && user_gender.trimStart() !== ""){
                console.log("send");
    
                let formData = new FormData();
    
                formData.append("user_id", localStorage.getItem("user_id"));
                formData.append("user_name", user_name);
                if (user_pass.trimStart() !== "") {
                    formData.append("user_pass", user_pass);
                }
                
                formData.append("user_email", user_email);
                formData.append("user_gender", user_gender);
    
                let url = "./includes/admin/admin_edituser.php";
    
                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (typeof data === "object"){
                        console.log("edit user successfully");
                        // if (msg.innerHTML !== ""){
                        //     msg.innerHTML = "";
                        // }
                        msg.innerHTML = "You have successfully edited your profile.";
                        pword.value = "";
        
                    } else {
                        console.log("edit user info failed");
                        msg.innerHTML = data;
                    }
                })
                .catch(err => console.error(err));
            }
        });
    }
})();