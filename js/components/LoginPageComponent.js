export default {
    name: "TheLoginPage",

    template:
    `
    <div class="login">
        <div class="top"><router-link to="/"><img src="./img/logo.png" alt=""></router-link></div>
        <div class="login-box">
            <div class="img"><img src="./img/users-solid.png" alt=""></div>
            <form action="" method="POST">
                <p id="msg">{{ displayMsg }}</p>
                <div class="item">
                    <input v-model="input.username" name="username" id="username" type="text" placeholder="Username" required/>
                </div>
                <div class="item">
                    <input v-model="input.password" name="password" id="password" type="password" placeholder="Password" required>
                </div>
                <div class="link">
                    <router-link :to="{ name: 'Contact' }" class="montserrat">Forgot your password?</router-link>
                </div>
                <div class="btn" @click.prevent="login">
                    <!-- <input type="text" value="SIGN IN" onclick="location.href='./index.html'"> -->
                    <input type="submit" value="SIGN IN">
                </div>
            </form>
        </div>

    </div>
    `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },
            displayMsg: ""
        }
    },

    created: function() {
        console.log("Login page created");
    },

    methods: {
        login() {
            console.log("Click login button!");
           
            // Check for valid input
           if (this.input.username != "" && this.input.password != "") {
               
                // do login
                //let loginData = JSON.stringify({username: this.input.username, password: this.input.password});
                let loginData = new FormData();
                loginData.append("username", this.input.username);
                loginData.append("password", this.input.password);

                let url = "./includes/admin/admin_login.php";

                fetch(url, {
                    method: "POST",
                    body: loginData
                })
                .then(res => res.json())
                .then(data => {
                    if (typeof data === "object") {
                        console.log("login successfully");
                        console.log(data);
                        this.$emit("setauth", true, data);
                        localStorage.setItem("user_id", data.user_id);
                        localStorage.setItem("user_name", data.user_name);
                        this.$router.replace({ name: "UserProfile" }); 

                    } else {
                        console.log("login failed");
                        this.displayMsg = data;
                    }
                })
                .catch( error => console.error(error));
           } else {
               console.log("A username and password needs to be input");
               this.displayMsg = "Please fill out the fileds.";
           }
        }            
   }
}