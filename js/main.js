import HomePage from "./components/HomePageComponent.js";
import AboutPage from "./components/AboutPageComponent.js";
import ContactPage from "./components/ContactPageComponent.js";
import LoginPage from "./components/LoginPageComponent.js";
import UserProfilePage from "./components/UserProfilePageComponent.js";
import UserClassesPage from "./components/UserClassesPageComponent.js";
import UserTaskPage from "./components/UserTaskPageComponent.js";
import UserReminderPage from "./components/UserReminderPageComponent.js";
import Header from "./components/Header/HeaderComponent.js";
import Footer from "./components/Footer/FooterComponent.js";

(() => {

    console.log("fired");

    const router = new VueRouter({
        routes: [
            {
                path: "/",
                name: "Home",
                component: HomePage,
            },
            {
                path: "/about",
                name: "About",
                component: AboutPage,
            },
            {
                path: "/contact",
                name: "Contact",
                component: ContactPage,
            },
            {
                path: "/login",
                name: "Login",
                component: LoginPage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem("user_id") === null) {
                        next();
                    } else {
                        next("/profile");
                    }
                }
            },
            {
                path: "/profile",
                name: "UserProfile",
                component: UserProfilePage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem("user_id") === null) {
                        next("/login");
                    } else {
                        next();
                    }
                }
            },
            {
                path: "/classes",
                name: "UserClasses",
                component: UserClassesPage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem("user_id") === null) {
                        next("/login");
                    } else {
                        next();
                    }
                }
            },
            {
                path: "/task",
                name: "UserTask",
                component: UserTaskPage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem("user_id") === null) {
                        next("/login");
                    } else {
                        next();
                    }
                }
            },
            {
                path: "/reminder",
                name: "UserReminder",
                component: UserReminderPage,
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem("user_id") === null) {
                        next("/login");
                    } else {
                        next();
                    }
                }
            },
            {
                path: "/:catchAll(.*)",
                redirect: "/"
            }
        ]
    });
    var four;
    const vm = new Vue({
        data: {
            authenticated: localStorage.getItem("user_id") === null ? false : true,
            userid: localStorage.getItem("user_id") === null ? "" : localStorage.getItem("user_id"),
            username: localStorage.getItem("user_name") === null ? "" : localStorage.getItem("user_name"),
            userlevel: localStorage.getItem("user_level") === null ? 0 : localStorage.getItem("user_level")
        },

        created: function () {
            console.log("here");
        },
        mounted() {
            window.addEventListener("scroll", function () {
                var top = document.documentElement.scrollTop;
                if (top >= 100) {
                    document.querySelector('.topbtn').style.display = 'block'
                } else {
                    document.querySelector('.topbtn').style.display = 'none'
                }
            })
            document.querySelector('.topbtn').addEventListener('click', function () {
                Topfun()
            })

            function Topfun() {
                four = setInterval(FourscrollBy, 10);
            }
            function FourscrollBy(eachHeight) {
                if (document.documentElement && document.documentElement.scrollTop) //IE
                {
                    if (document.documentElement.scrollTop <= 0) {
                        clearInterval(four);
                    } else {
                        window.scrollBy(0, -30);
                    }
                } else { //Chrome不支持documentElement.scrollTop
                    if (document.body.scrollTop <= 0) {
                        clearInterval(four);
                        document.querySelector('.top').style.display = 'none'
                    } else {
                        window.scrollBy(0, -30);
                    }
                }
            }
        },
        methods: {

            isActive(route) {
                return this.$router.currentRoute.path === route;
            },

            setAuthentication(setting, user) {
                console.log("set authentication");
                this.authenticated = setting;
                if (user !== {}) {
                    this.userid = user.user_id;
                    this.username = user.user_name;
                } else {
                    this.userid = "";
                    this.username = "";
                }
            }

        },

        components: {
            headercomp: Header,
            footercomp: Footer
        },

        router
    }).$mount("#app");

})();