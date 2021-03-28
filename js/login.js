(() => {
    console.log("login page");

    if (localStorage.getItem("user")){
        window.location.href = "./profile.html";
    }

    let submitBtn = document.querySelector(".btn");

    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let msg = document.getElementById("msg");

    submitBtn.addEventListener("click", login);

    function login(){
        console.log("clcked");

        let password = passwordInput.value;
        let username = usernameInput.value;
        if (password !== "" && username !== "") {
            console.log("send");
            let formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            let url = "./includes/admin/admin_login.php";

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                // console.log(typeof data)
                if (typeof data === "object") {
                    console.log("login successfully");
                    // let user = JSON.stringify(data);
                    console.log(data);
                    localStorage.setItem("user_id", data.user_id);
                    window.location.href = "./profile.html";
                } else {
                    console.log("login failed");
                    msg.innerHTML = data;
                }
            })
            .catch( error => console.error(error));
        } else {
            msg.innerHTML = "Please fill out the fileds."
        }
    } 
})();