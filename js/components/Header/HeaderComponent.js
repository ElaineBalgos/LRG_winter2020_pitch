import UserHeader from "./UserHeaderComponent.js";
import VisitorHeader from "./VisitorHeaderComponent.js";

export default {
    name: "TheHeaderComponent",

    props: ["auth", "uname", "route"],

    template:`
    <visitorheader v-if="!auth || (auth && routes1.includes(route))" ></visitorheader>
    <userheader v-else :username="uname"></userheader>
    `,  

    data: function(){
        return {
            routes1: ["/", "/about", "/contact"]//,
        }
    },

    
    methods: {
    },

    components: {
        userheader: UserHeader,
        visitorheader: VisitorHeader
    },

    created: function(){
    }
}