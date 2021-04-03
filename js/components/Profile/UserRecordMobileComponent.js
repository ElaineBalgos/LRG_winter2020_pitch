export default {
    name: "TheUserRecordMobileComponent",

    props: ["user", "index"],

    template:`
    <div>
        <p><span>No.</span><span>{{ index }}</span></p>
        <p><span>Level</span><span>{{ user_level_name }}</span><span>
        </span></p>
        <p><span>First Name</span><span> {{ user.user_fname }} </span></p>
        <p><span>Ladt Name</span><span> {{ user.user_lname }} </span></p>
        <p><span>Username</span><span>{{ user.user_name }}</span></p>
        <p><span>Email</span><span>{{ user.user_email }}</span></p><br/><hr><br/>

    </div>
    `,

    data: function() {
        return {
            user_level_name : (this.user.user_level === "0" ? "Member" : "Admin")
        }
    },


}