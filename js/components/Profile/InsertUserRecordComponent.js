export default {
    name: "TheInsertUserRecordComponent",

    template:`
    <tr>
        <td><span class="add">*</span></td>
        <td>
            <select v-model="input.level">
                <option value="0">Member</option>
                <option value="1">Admin</option>
            </select> 
        </td>
        <td><input type="text" maxlength="20" v-model="input.firstname"/></td>
        <td><input type="text" maxlength="20" v-model="input.lastname"/></td>
        <td><input type="text" maxlength="20" v-model="input.username"/></td>
        <td><input type="text" maxlength="30" v-model="input.email"/></td>
        <td>
            <span class="save-btn" @click="clickInsert">Add User</span>
        </td>
    </tr>
    `,

    data: function(){
        return {
            input: {
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                level: "0"
            },
        }
    },

    methods: {
        clickInsert() {
            console.log("click insert");

            if (this.input.firstname.trimStart() !== "" && 
                this.input.lastname.trimStart() !== "" && 
                this.input.username.trimStart() !== "" && 
                this.input.email.trimStart() !== "" && 
                this.input.level.trimStart() !== ""){

                console.log("send");

                let formData = new FormData();
                
                formData.append("editor", "admin");
                formData.append("user_name", this.input.username.trimStart());
                formData.append("user_email", this.input.email.trimStart());
                formData.append("user_fname", this.input.firstname.trimStart());
                formData.append("user_lname", this.input.lastname.trimStart());
                formData.append("user_level", this.input.level.trimStart());

                let url = "./includes/admin/admin_createuser.php";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.$emit("displaymsg", data); 
                    this.$emit("adduser", {msg: "add a user", self: false});
                    this.clearInput();

                })
                .catch(err => console.error(err));
            } else {
                this.$emit("displaymsg", "Please fill out the form."); 
            }
        },

        clearInput() {
            this.input.firstname = "";
            this.input.lastname = "";
            this.input.username = "";
            this.input.email = "";
            this.input.level = "0";
        }
        
    }
}