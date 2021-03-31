export default {
    name: "TheClassCardComponent",

    props: ["classInfo"],

    template:
    `
    <div class="item">
        <div class="video"><video :src="video" controls></video></div>
        <div class="title flex-between">
            <h3 class="montserrat italic">{{ topic }}</h3>
            <p class="montserrat italic">{{ length }}</p>
        </div>
        <p class="montserrat">{{ description }}</p>
    </div>

    `,

    data: function(){
        return {
            topic: this.classInfo.class_topic,
            length: this.classInfo.class_length,
            description: this.classInfo.class_description,
            video: `./media/${this.classInfo.class_video}`
        }
    },

    created: function() {
    },
}