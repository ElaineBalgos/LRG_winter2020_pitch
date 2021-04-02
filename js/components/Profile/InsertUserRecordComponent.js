export default {
    name: "TheInsertUserRecordComponent",

    //props: ["user", "index",/* "editingInfo"*/],

    template:`
    <!-- <tr v-if="!editable">
        <td><span v-if="self" class="star">*</span>{{ index }}</td>
        <td>
            {{ user_level_name }}
        </td>
        <td>{{ input.firstname }}</td>
        <td>{{ input.lastname }}</td>
        <td>{{ input.username }}</td>
        <td>{{ input.email }}</td>
        
        <td>
            <span v-if="!self" class="edit-btn" @click="clickEdit">Edit</span>
            <span class="delete-btn" @click="clickDelete">Delete</span>
        </td>
    </tr> -->

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
            // user_level_name : (this.user.user_level === "0" ? "Member" : "Admin"),
            // editable: false,
            // self: (this.user.user_id === localStorage.user_id),
            // userid: this.user.user_id,
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
                })
                .catch(err => console.error(err));
            } else {
                this.$emit("displaymsg", "Please fill out the form."); 
            }
        },
    //     clickEdit() {
    //         console.log("click edit");
    //         this.editable = true;
    //         this.$parent.displayMsg="";
    //     },

    //     clickSave() {
    //         console.log("click save");
    //         this.editable = false;

    //         if (this.input.firstname.trimStart() !== "" && 
    //             this.input.lastname.trimStart() !== "" && 
    //             this.input.username.trimStart() !== "" && 
    //             this.input.email.trimStart() !== "" && 
    //             this.input.level.trimStart() !== ""){

    //             console.log("send");

    //             let formData = new FormData();
                
    //             formData.append("editor", "admin");
    //             formData.append("user_name", this.input.username.trimStart());
    //             formData.append("user_email", this.input.email.trimStart());
    //             formData.append("user_fname", this.input.firstname.trimStart());
    //             formData.append("user_lname", this.input.lastname.trimStart());
    //             formData.append("user_level", this.input.level.trimStart());


    //             let url = "./includes/admin/admin_edituser.php";

    //             fetch(url, {
    //                 method: "POST",
    //                 body: formData
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (typeof data === "object"){
    //                     console.log("edit user successfully");
    //                     console.log(data);

    //                     if (this.self) {
    //                         localStorage.setItem("user_name", data.user_name);
    //                         this.$root.setAuthentication(true, data);

    //                         // this.$parent.$parent.user_name = data.user_name;
    //                         // this.$parent.$parent.user_email =  this.input.email;
    //                     }

    //                     this.$emit("displaymsg", "Edit Successfully"); 

    //                     this.user_level_name = (this.input.level === "0" ? "Member" : "Admin");
                    
    //                 } else {
    //                     console.log("edit user info failed");
    //                     console.log(data);

    //                     this.$emit("displaymsg", data); 

    //                     // reset
    //                     this.input.firstname = this.user.user_fname;
    //                     this.input.lastname = this.user.user_lname;
    //                     this.input.username = this.user.user_name;
    //                     this.input.email = this.user.user_email;
    //                     this.input.level = this.user.user_level;
    //                 }
    //             })
    //             .catch(err => console.error(err));
    //         }
    //     },

    //     clickDelete() {
    //         console.log("click delete");
    //         this.editable = false;

    //         let formData = new FormData();
                
    //         formData.append("user_id", this.userid);

    //         let url = "./includes/admin/admin_deleteuser.php";

    //         fetch(url, {
    //             method: "POST",
    //             body: formData
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (typeof data === "object"){
    //                 console.log("delete user successfully");

    //                 if (this.self) { // delete your self
    //                     console.log("Delete yourself !!!!");
    //                     localStorage.clear();
    //                     this.$router.replace({ name: "Home" });
    //                     this.$root.setAuthentication(false, {});
    //                 }

    //                 this.$emit("displaymsg", "Delete Successfully"); 
                    
    //                 this.$emit("deleteuser", {msg: "delete a user", self: this.self});
                    
    //             } else {
    //                 console.log("delete user info failed");

    //                 this.$emit("displaymsg", data); 
    //             }
    //         })
    //         .catch(err => console.error(err));
    //     }
        
    }
}