import AdminProfile from "./Profile/AdminProfileComponent.js";
import MemberProfile from "./Profile/MemberProfileComponent.js";

export default {
    name: "TheProfilePage",

    template:`
    <div class="profile">
        <memberprofile @edituser="onChange"></memberprofile>
        <adminprofile v-if="user_level==='1'" ref="allusersinfo"></adminprofile>
        <!-- <memberprofile @dbchange="reRender" :watch="[user_name, user_email]"></memberprofile> -->
        <!-- <adminprofile v-if="user_level==='1'" :watch="[user_name, user_email]"></adminprofile> -->
    </div>
    `,

    created: function() {
        console.log("create user profile page");
    },

    data: function() {
        return {
            user_level: localStorage.getItem("user_level"),
            changed: false
            // user_email: ""
        }
    },

    methods: {
        // reRender() {
        //     console.log("re render");
        // }
        onChange(msg) {
            console.log(msg);
            if (this.user_level==="1") {
                this.$refs.allusersinfo.users = [];
                this.$refs.allusersinfo.getAllUsers();
            }
        }
    },

    components: {
        adminprofile: AdminProfile,
        memberprofile: MemberProfile
    }
}