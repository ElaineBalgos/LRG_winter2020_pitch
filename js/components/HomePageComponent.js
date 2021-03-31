export default {
    name: "TheHomePage",

    template:
    `
        <div class="home">
            <div class="slogn">
                <video src="./media/home.mp4" controls></video>
            </div>
            <div class="our-mission">
                <div class="container">
                    <div class="item">
                        <h2>Our Mission</h2>
                        <div>
                            <div>
                                <p class="montserrat">The London Referees Group is committed to providing a</p>
                                <p class="montserrat">high standard and quality hockey officiating in the City of</p>
                                <p class="montserrat">London and surrounding area.</p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h2>Our Vision</h2>
                        <div>
                            <div>
                                <p class="montserrat">To promote the game of hockey through fair and safe</p>
                                <p class="montserrat">play, and a respect for all individuals involved in the</p>
                                <p class="montserrat">game.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-programs">
                <div class="container">
                    <div class="title">
                        <h2>Our Programs</h2>
                        <p class="montserrat">You will have three very interesting learning programs to choose from.</p>
                    </div>
                    <div class="list">
                        <div class="item flex-between-center">
                            <div class="left">
                                <h3>Partner Education</h3>
                                <div>Locations: London, Ontario</div>
                                <p class="montserrat">Are you a full-time dad and mom now but still having a referees dream? JOIN US today to fulfill your dream and let us take care of your children.</p>
                            </div>
                            <div class="right">
                                <router-link :to="{ name: 'Contact' }" class="hoverable apply-btn">
                                    <div class="anim"></div>APPLY
                                </router-link>
                            </div>
                        </div>
                        <div class="item flex-between-center">
                            <div class="left">
                                <h3>Training Camps (Don Koharski)</h3>
                                <div>Locations: London, Ontario</div>
                                <p class="montserrat">Whether your goal is to learn the basics to get you started, move up to the Pee Wee level, JR. hockey or get exposed to the professional ranks, our camps are designed to provide you that exposure and the necessary tools needed to enhance your officiating skills.</p>
                            </div>
                            <div class="right">
                                <router-link :to="{ name: 'Contact' }" class="hoverable apply-btn">
                                    <div class="anim"></div>APPLY
                                </router-link>
                            </div>
                        </div>
                        <div class="item flex-between-center">
                            <div class="left">
                                <h3>Junior Officials (Overview of the program and timeline for joining)</h3>
                                <div>Locations: London, Ontario</div>
                                <p class="montserrat">Junior Officials is a referee training program for kids from age 5 to 9. We look for young skaters who are willing to learn and have desires to become a referee.</p>
                            </div>
                            <div class="right">
                                <router-link :to="{ name: 'Contact' }" class="hoverable apply-btn">
                                    <div class="anim"></div>APPLY
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-events">
                <div class="container">
                    <div class="title">
                        <h2>Our Events</h2>
                        <p class="montserrat">Welcome to our most exciting event, which also records our daily work.</p>
                    </div>
                    <div class="imgs">
                        <div class="img1 flex-between">
                            <div class="left">
                                <div class="hover-text"><img src="./img/ice-hockey-female-referee.jpg" alt="">
                                    <div>Female Referees Team</div>
                                </div>
                                <div class="flex-between">
                                    <div class="hover-text"><img src="./img/ice-hockey-player-in-action-PH832SW.jpg" alt="">
                                        <div>Cool Events</div>
                                    </div>
                                    <div class="hover-text"><img src="./img/hockey-team-getting-ready-TMSN6QL.jpg" alt="">
                                        <div>Preparation</div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="hover-text"><img src="./img/ice-black-red-sport-hockey-referee_t20_eVXVRv.jpg" alt="">
                                    <div>Big Games</div>
                                </div>
                                <div class="hover-text"><img src="./img/father-and-son.jpg" alt="">
                                    <div>Private Training</div>
                                </div>
                            </div>
                        </div>
                        <div class="img2 flex-between">
                            <div class="left hover-text"><img src="./img/following-the-referees-instructions-little-league-roller-hockey_t20_mvQYAl.jpg" alt="">
                                <div>Pracitce in All Seasons</div>
                            </div>
                            <div class="right hover-text"><img src="./img/NQZkW1_t20_NQpywE.jpg" alt="">
                                <div>Referees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="our-partners">
                <h2>Our Partners</h2>
                <div class="inner container">
                <div class="item partner">
                    <div class="img"><img src="./img/canada.png" alt="">
                    </div>
                </div>
                <div class="item partner">
                    <div class="el-icon-message img"><img src="./img/ohf.png" alt="">
                    </div>
                </div>
                <div class="item partner">
                    <div class="img"><img src="./img/allence.png" alt="">
                    </div>
                </div>
                <div class="item partner">
                    <div class="img"><img src="./img/omha.png" alt="">
                    </div>
                </div>
                </div>

                <div class="inner inner2 container">
                <div class="item partner">
                    <div class="img"><img src="./img/oha.png" alt="">
                    </div>
                </div>
                <div class="item partner">
                    <div class="el-icon-message img"><img src="./img/sportability.png" alt="">
                    </div>
                </div>
                <div class="item partner">
                    <div class="img"><img src="./img/wha.png" alt="">
                    </div>
                </div>
                </div>
            </div>
            <!-- <div class="our-partners">
                <div class="container">
                    <div class="title">
                        <h2>Our Partners</h2>
                    </div>
                    <div class="content flex-between">
                        <div class="item partner">
                            <div class="img"><img src="./img/20210317133227.jpg" alt="">
                            </div>
                            <h3>Hokey Canada</h3>
                        </div>
                        <div class="item partner">
                            <div class="el-icon-message"><img src="./img/20210317133235.jpg" alt="">
                            </div>
                            <h3>OHF</h3>
                        </div>
                        <div class="item partner">
                            <div class="img"><img src="./img/20210317133220.jpg" alt="">
                            </div>
                            <h3>Alliance</h3>
                        </div>
                        <div class="item partner">
                            <div class="img"><img src="./img/20210317133242.jpg" alt="">
                            </div>
                            <h3>OMHA</h3>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="join-us">
                <div class="inner"></div>
                <div class="container">
                    <div class="title">
                        <h2>Join Us and <span>#LetsRockTheGame!</span></h2>
                    </div>
                    <div class="content flex-between-center">
                        <div class="text">
                            <p class="montserrat">You will become an excellent referee! Join us and let us witness this wonderful and successful process together.</p>
                        </div>
                        <div class="btn">
                            <router-link :to="{ name: 'Login' }" class="hoverable">
                                <div class="anim"></div>LOGIN
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    created: function() {
        console.log("Home page created");
    },
    mounted:function(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
    }
}