export default {
    name: "TheTaskRecordComponent",

    props: ["task"],

    template:
    `
    <tr>
        <td>
            <p>{{ date_week }}</p>
            <p>{{ date }}</p>
        </td>
        <td>{{ time }}</td>
        <td>{{ type }}</td>
        <td>
            <p>{{ location }}</p>
        </td>
        <td>{{ fee }}</td>
        <td>{{ officials }}</td>
        <td>
            <img src="./img/calendar-check-solid.png" alt="">
        </td>
    </tr>
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