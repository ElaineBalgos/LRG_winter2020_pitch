export default {
    name: "TheVisitorHeaderComponent",

    template:
    `
    <header class="main-header">
        <div class="container flex-between">
            <h2><router-link :to="{ name: 'Home' }"><img src="./img/logo.png" alt=""></router-link></h2>
            <nav class="flex-align-center">
                <ul class="flex menus">
                    <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'About' }">About</router-link></li>
                    <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                </ul>
                <div class="menus-mobile">
                    <div class="menu-icon" @click="toggleHamburgerMenu"><img src="./img/menu.png" alt=""></div>
                    <ul :class="['flex', 'menus-list', {'active': toggled}]">   
                        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'About' }">About</router-link></li>
                        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                        <li><router-link :to="{ name: 'Login' }">Sign In</router-link></li>
                    </ul>
                </div>
                <div class="btns">
                    <router-link :to="{ name: 'Login' }" class="hoverable">
                        <div class="anim"></div>LOG IN
                    </router-link>
                </div>
                <div class="imgs flex">
                    <div class="img flex-center-center"><a href="#"><img src="./img/facebook.png" alt=""></a></div>
                    <div class="img flex-center-center"><a href="#"><img src="./img/instagram.png" alt=""></a></div>
                    <div class="img flex-center-center"><a href="#"><img src="./img/linkedin.png" alt=""></a></div>
                </div>
            </nav>
        </div>
    </header>
    `,

    data: function() {
        return {
            toggled: false
        }
    },

    created: function() {
    },

    methods: {
        toggleHamburgerMenu(e) {
            this.toggled = !this.toggled;
        }
    }
}