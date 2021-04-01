export default {
    name: "TheFooterComponent",

    props: ["auth"],

    template: 
    `
    <footer>
        <div v-if="!auth" class="map">
            <div class="container flex-between">
                <div class="left">
                    <h2><img src="./img/logo.png" alt=""></h2>
                    <p class="montserrat">+123 456 7890</p>
                    <p class="montserrat">London, Ontario, Canada</p>
                    <p class="montserrat">lrg@londonrefereesgroup.com</p>
                </div>
                <div class="right">
                    <div class="nav flex">
                        <div class="link"><router-link :to="{ name: 'Home' }">Home</router-link></div>
                        <div class="link"><router-link :to="{ name: 'About' }">About</router-link></div>
                        <div class="link"><router-link :to="{ name: 'Contact' }">Contact</router-link></div>
                    </div>
                    <div class="imgs flex">
                        <div class="img flex-center-center"><a href="https://www.facebook.com/" target="_blank"><img src="./img/facebook.png" alt=""></a></div>
                        <div class="img flex-center-center"><a href="https://www.instagram.com/" target="_blank"><img src="./img/instagram.png" alt=""></a></div>
                        <div class="img flex-center-center"><a href="https://www.linkedin.com/" target="_blank"><img src="./img/linkedin.png" alt=""></a></div>
                        <div class="img flex-center-center"><a href="https://www.youtube.com/" target="_blank"><img src="./img/youtube.png" alt=""></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info">
            © 2021 LRG. All Rights Reserved.
        </div>
    </footer>
    `
}