import UserHeader from "./UserHeaderComponent.js";
import VisitorHeader from "./VisitorHeaderComponent.js";

export default {
    name: "TheHeaderComponent",

    props: ["auth", "uname", "route"],

    template:`
    <visitorheader v-if="!auth || (auth && routes1.includes(route))" ></visitorheader>
    <userheader v-else @logout="hasLoggedOut" :username="uname"></userheader>
    `,

    data: function(){
        return {
            routes1: ["/", "/about", "/contact"]//,
            // routes2: ["/profile", "/classes", "/task", "/reminder"]//,
        }
    },

    
    methods: {
        hasLoggedOut(msg){
            console.log(msg);
            this.$emit("setauth", false, {});
        }
    },

    components: {
        userheader: UserHeader,
        visitorheader: VisitorHeader
    },

    created: function(){
    }
}