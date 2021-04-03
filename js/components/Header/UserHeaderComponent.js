export default {
    name: "TheUserHeaderComponent",

    props: ["username"],

    template:`
    <header class="main-header log-in">
        <div class="container flex-between">
            <h2><router-link :to="{ name: 'Home' }"><img src="./img/logo.png" alt=""></router-link></h2>
            <nav class="flex-align-center">
                <ul class="flex menus">
                    <li><router-link :to="{ name: 'UserProfile' }">PROFILE</router-link></li>
                    <li><router-link :to="{ name: 'UserClasses' }">CLASSES</router-link></li>
                    <li><router-link :to="{ name: 'UserTask' }">TASK</router-link></li>
                    <li><router-link :to="{ name: 'UserReminder' }">REMINDER</router-link></li>
                </ul>   
                <div class="menus-mobile">
                    <div class="menu-icon" @click="toggleHamburgerMenu"><img src="./img/menu.png" alt=""></div>
                    <ul :class="['flex', 'menus-list', {'active': toggled}]">
                        <li><router-link :to="{ name: 'UserProfile' }">PROFILE</router-link></li>
                        <li><router-link :to="{ name: 'UserClasses' }">CLASSES</router-link></li>
                        <li><router-link :to="{ name: 'UserTask' }">TASK</router-link></li>
                        <li><router-link :to="{ name: 'UserReminder' }">REMINDER</router-link></li>
                        <li><a href="" @click.prevent="logout">LOG OUT</a></li>
                    </ul>
                </div>
                <div class="btns" id="logout" @click.prevent="logout"> 
                    <a href="#" class="hoverable">
                        <div class="anim" ></div>LOG OUT
                    </a>
                </div>
                <div class="imgs flex">
                    <div class="img flex-center-center avatar"><router-link :to="{ name: 'UserProfile' }"><img src="./img/profile.png" alt=""></router-link></div>
                    <p>{{ username }}</p>
                </div>
            </nav>
        </div>
    </header>
    `,

    created: function() {
    },

    data: function(){
        return {
            toggled: false
        }
    },

    methods: {
        logout(){
            localStorage.clear();
            this.$root.setAuthentication(false, {});
            this.$router.replace({ name: "Home" });
        },

        toggleHamburgerMenu(e) {
            this.toggled = !this.toggled;
        }

    }

}