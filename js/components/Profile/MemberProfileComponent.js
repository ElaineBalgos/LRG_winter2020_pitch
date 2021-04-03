export default {
    name: "TheMemberProfileComponent",

    template:`
    <div class="container flex">
        <h2 class="title">Personal Details</h2>
        <div class="left">
            <img src="./img/profile.png" alt="">
        </div>
        <div class="right">
            <h2>Personal Details</h2>
            <div>
                <form>
                    <p id="msg">{{ displayMsg }}</p>
                    <p><span>First name</span><span id="fname">{{ firstname }}</span></p>
                    <p><span>Last name</span><span id="lname">{{ lastname }}</span></p>
                    <p><span>Username</span><span><input type="text" id="uname" v-model="input.username"></span></p>
                    <p><span>Password</span><span><input type="text" id="pword" placeholder="*******" v-model="input.password"></span></p>
                    <p><span>Email</span><span><input type="text" id="email" v-model="input.email"></span></p>
                    <p><span>Gender</span><span>
                        <select id="gender" v-model="input.gender">
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Other</option>
                        </select>
                    </span></p>
                    <div class="btn" @click.prevent="editUserInfo">
                        <input type="button" value="SAVE">
                    </div>
                </form>
            </div>
        </div>    
    </div>
    `,

    created: function() {
        console.log("create user profile page");
    },

    data: function() {
        return {
            user: {},
            firstname: "",
            lastname: "",
            displayMsg: "",
            input: {
                username: "",
                password: "",
                email: "",
                gender: ""
            }
        }
    },

    mounted: function () {
        console.log("mounted... fetching data");
        this.getCurrUser();
    },

    methods: {
        getCurrUser() {
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
                    this.user = data;
                    this.firstname = data.user_fname;
                    this.lastname = data.user_lname;
                    this.input.username = data.user_name;
                    this.input.email = data.user_email;
                    this.input.gender = data.user_gender;
    
                } else {
                    console.log("fetch user info failed");
                }
            })
            .catch(err => console.error(err));
        },

        editUserInfo(){
            if (this.input.username.trimStart() !== "" && 
                this.input.email.trimStart() !== "" && 
                this.input.gender.trimStart() !== ""){
                console.log("send");

                let formData = new FormData();

                formData.append("editor", "member");
                formData.append("user_id", localStorage.getItem("user_id"));
                formData.append("user_name", this.input.username.trimStart());
                if (this.input.password.trimStart() !== "") {
                    formData.append("user_pass", this.input.password.trimStart());
                }
                
                formData.append("user_email", this.input.email.trimStart());
                formData.append("user_gender", this.input.gender.trimStart());

                let url = "./includes/admin/admin_edituser.php";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (typeof data === "object"){
                        console.log("edit user successfully");
                        console.log(data);

                        this.displayMsg = "You have successfully edited your profile.";
                        this.input.password = "";

                        localStorage.setItem("user_name", data.user_name);
                        this.$root.setAuthentication(true, data);

                        this.$emit("edituser", {msg: "edit yourself", self: true});
                        
                    } else {
                        console.log("edit user info failed");
                        this.displayMsg = data;
                    }
                })
                .catch(err => console.error(err));
            } else {
                this.displayMsg = "Edit failed... Please fill out all fields ...";
                this.input.username = this.user.user_name;
                this.input.password =  "";
                this.input.email = this.user.user_email;
                this.input.gender = this.user.user_gender;
                
            } 
        } 
    }
}