import UserRecord from "./UserRecordComponent.js";
import UserRecordMobile from "./UserRecordMobileComponent.js";
import TheInsertUserRecord from "./InsertUserRecordComponent.js";

export default {
    name: "TheAdminProfileComponent",

    // props: ["watch"],

    template:`
        <!-- admin only -->

        <!-- pc -->
        <div class="members">
            <div class="container">
                <h2>All Members</h2>
            
                <div class="calendar c1">
                <p id="msg" class="msg">{{ displayMsg }}</p>
                <table>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>LEVEL</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <userrecord  v-for="(u,i) in users" :key="u.user_id" :user="u" :index="i+1" @displaymsg="displayActionMsg" @deleteuser="getAllUsers"></userrecord>
                        <insertuserrecord @displaymsg="displayActionMsg" @adduser="getAllUsers"></insertuserrecord>
                    </tbody>
                </table>
            </div>

            <!-- mobile -->
            <div class="c2">
                <!-- <h2>All Members</h2> -->
                <div class="item">
                    <p class="note">Please note that based on policy, users' profile is not editable in mobile version.</p>
                    <userrecordmobile v-for="(u,i) in users" :key="u.user_id" :user="u" :index="i+1"></userrecordmobile>
                </div>
            </div>  
        </div>
    </div>
    `,

    data: function() {
        return {
            users: [],
            displayMsg: "",
        }
    },

    mounted: function () {
        console.log("mounted... fetching all users data");

        this.getAllUsers();
    },

    methods: {
        displayActionMsg(msg) {
            this.displayMsg = msg;
        },

        getAllUsers() {
            let url = "./includes/admin/admin_getusers.php";

            fetch(url, {
                method: "GET"
            })
            .then(res => res.json())
            .then(data => {
                if (typeof data === "object"){
                    console.log(data);

                    this.users = data;

                } else {
                    console.log("fetch users info failed");
                }
            })
            .catch(err => console.error(err));
                
        },

    },

    components: {
        userrecord: UserRecord,
        userrecordmobile: UserRecordMobile,
        insertuserrecord: TheInsertUserRecord
    }
}