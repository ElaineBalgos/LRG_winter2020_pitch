export default {
    name: "TheTaskRecordMobileCompoenent",

    props: ["task"],

    template:
    `
    <div class="item">
        <p><span>Date</span><span>{{ date_week }} {{ date }}</span></p>
        <p><span>Time</span><span>{{ time }}</span></p>
        <p><span>Type</span><span>{{ type }}</span></p>
        <p><span>Location</span><span>{{ location }}</span></p>
        <p><span>Fee</span><span>{{ fee }}</span></p>
        <p><span>Officials</span><span>{{ officials }}</span></p>
        <p><span>Action</span><span><img src="./img/calendar-check-solid.png" alt=""></span></p>
    </div>
    `,

    data: function() {
        return {
            date_week: this.task.task_date_week,
            date: this.task.task_date,
            time: this.task.task_time,
            type: this.task.task_type,
            location: this.task.task_location,
            fee: this.task.task_fee,
            officials: this.task.task_officials
        }
    }
}