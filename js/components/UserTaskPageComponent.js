import TaskRecord from "./Task/TaskRecordComponent.js";
import TaskRecordMobile from "./Task/TaskRecordMobileComponent.js";

export default {
    name: "TheTaskPage",

    template:
    `
    <div class="task">
        <div class="container">
            <div class="title">
                <h2>Task Board</h2>
            </div>
            <div class="calendar c1">
                <table>
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>TYPE</th>
                            <th>LOCATION</th>
                            <th>FEE</th>
                            <th>OFFICIALS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <taskrecord v-for="t in tasks" :key="t.task_id" :task="t"></taskrecord>
                    </tbody>
                </table>
            </div>
            <div class="c2">
                <taskrecordmobile v-for="t in tasks" :key="t.task_id" :task="t"></taskrecordmobile>
            </div>
            
        </div>
    </div>
    `,

    data: function(){
        return {
            tasks: []
        }
    },

    mounted: function () {
        console.log("mounted... fetching data");
        
        let url = "./includes/admin/admin_gettasks.php";

        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            if (typeof data === "object"){
                console.log(data);

                this.tasks = data;

            } else {
                console.log("fetch tasks info failed");
            }
        })
        .catch(err => console.error(err));
    },

    components: {
        taskrecord: TaskRecord,
        taskrecordmobile: TaskRecordMobile
    }
}