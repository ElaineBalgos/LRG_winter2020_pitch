export default {
    name: "TheAboutPage",

    template:`
    <div class="about">
        <div class="slogn">
            <video src="./media/about.mp4" controls></video>
        </div>
        <div class="our-story">
            <div class="container">
                <div class="title">
                    <h2>Our Story</h2>
                </div>
                <div class="content flex-between">
                    <div class="item">
                        <p class="montserrat">In 2007, the London Referee Group, also known as the LRG, was
                            established. This was the merger of the Forest City Referees
                            Association (FCRA) and the London Hockey Referees Association
                            (LHRA).</p>
                        <p class="montserrat">The LRG provides on ice officials for games at various levels of hockey,
                            such as: minor hockey, high school, sledge, and adult. As an
                            organization we strive to maintain an environment that embodies the
                            core values of integrity, leadership, perseverance, respect and
                            teamwork while enhancing self-esteem, promoting self-confidence
                            and cultivating a lifelong passion for the game.</p>
                    </div>
                    <div class="item">
                        <p class="montserrat">LRG members commit to representing the vision and mission of the
                            London Referees Group. They encourage a high standard of ethics,
                            closer cooperation, and understanding of the role of the referee
                            among officials, coaches, players, parents, the community and the
                            media. Membership requires a one-time application and statement of
                            interest. Membership is open to all genders, ages 14 and up.
                            As an organization, we are focused on developing and maintaining a
                            membership consisting of experienced and capable on ice officials.
                            They are advocates for the ideals of good sportsmanship and fair play
                            through qualified officiating in hockey and respect for the authority of
                            hockey officials at all levels of competition.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="our-commitment">
            <div class="container">
                <div class="title">
                    <h2>Our Commitment</h2>
                </div>
                <div class="content">
                    <div class="top">
                        <div class="left">
                            <h3>Communication</h3>
                            <p class="montserrat">We communicate our message with clarity, concision and confidence whilst actively listening. We are open minded and provide feedback.</p>
                        </div>
                        <div class="right">
                            <h3>Passion</h3>
                            <p class="montserrat">We are passionate about what we do, we challenge ourselves to achieve excellence.</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <div class="lt flex-between">
                                <div class="lt-l">
                                    <h3>Fairness</h3>
                                    <p class="montserrat">We make sure everyone in our team act reasonable and follow the rules.</p>
                                </div>
                                <div class="lt-r">
                                    <h3>Safe Play</h3>
                                    <p class="montserrat">Safety is our priority both to our hockey players and referees.</p>
                                </div>
                            </div>
                            <div class="lb">
                                <h3>Leadership</h3>
                                <p class="montserrat">We develop and train our referees to motivate and inspire themselves and those around them to be their best versions.</p>
                            </div>
                        </div>
                        <div class="right">
                            <h3>Respect</h3>
                                <p class="montserrat">We believe Respect to each other will guide us in all our games. We treat people with courtesy, politeness and kindness. We encourage referees to express opinions and ideas. We treat others as they wish to be treated. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="our-services">
            <div class="container">
                <div class="title">
                    <h2>Our Services</h2>
                </div>
                <div class="content">
                    <div class="item services">
                        <h3>Refereeing</h3>
                        <div class="img"><img src="./img/refereeing.PNG" alt="Refereeing">
                        </div>
                    </div>
                    <div class="item services">
                        <h3>Mentorship</h3>
                        <div class="img"><img src="./img/mentorship.png" alt="Mentorship">
                        </div>
                    </div>
                    <div class="item services">
                        <h3>Training</h3>
                        <div class="img"><img src="./img/training.png" alt="Training">
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <router-link class="link1" :to="{ name: 'Contact' }">More Questions? Click HERE to Contact Us!</router-link>
                    <router-link class="link2" :to="{ name: 'Contact' }">CONTACT US</router-link>
                    <!-- <a class="link1" href="./contact.html">More Questions? Contact Us!</a>
                    <a class="link2" href="./contact.html">CONTACT US</a> -->
                </div>
            </div>
        </div>
    </div>
    `,

    created: function() {
        console.log("About page created");
    },
    mounted:function(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
    }
}
