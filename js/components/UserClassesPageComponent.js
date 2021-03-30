import ClassCard from "./Classes/ClassCardComponent.js";

export default {
    name: "TheClassesPage",

    template:
    `
    <div class="classes">
        <div class="container">
            <div class="title">
                <h2>Virtual Classes</h2>
            </div>
            <div class="content">
                <div class="row row1 flex-between">
                    <classcard v-for="c in classes" :key="c.class_id" :classInfo="c"></classcard>
                </div>
            </div>
        </div>
    </div>
    `,

    data: function() {
        return {    
            classes: []
            
        }
    },

    created: function() {
    },

    mounted: function () {
        console.log("mounted... fetching data");
        
        let url = "./includes/admin/admin_getclasses.php";

        fetch(url, {
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            if (typeof data === "object"){
                console.log(data);

                this.classes = data;

            } else {
                console.log("fetch classes info failed");
            }
        })
        .catch(err => console.error(err));
    },

    components: {
        classcard: ClassCard
    }
}