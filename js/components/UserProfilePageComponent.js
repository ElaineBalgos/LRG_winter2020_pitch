import AdminProfile from "./Profile/AdminProfileComponent.js";
import MemberProfile from "./Profile/MemberProfileComponent.js";

export default {
    name: "TheProfilePage",

    template:`
    <div class="profile">
        <memberprofile @edituser="onChange" ref="currusersinfo"></memberprofile>
        <adminprofile v-if="user_level==='1'" ref="allusersinfo"></adminprofile>
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
        onChange(msg) {
            console.log(msg);
            if (this.user_level==="1") {
                this.$refs.allusersinfo.users = [];
                this.$refs.allusersinfo.getAllUsers();

                this.$refs.currusersinfo = {};
            }
        }
    },

    components: {
        adminprofile: AdminProfile,
        memberprofile: MemberProfile
    }
}