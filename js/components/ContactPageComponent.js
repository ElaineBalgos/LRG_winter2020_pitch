export default {
    name: "TheContactPage",

    template:
    `
    <div class="contact">
        <div class="lets-chat">
            <div class="inner"></div>
            <div class="container">
                <div class="left">
                    <div class="text">
                        <h3>Find us here.</h3>
                        <p class="montserrat">+123 456 7890</p>
                        <p class="montserrat">London, Ontario, Canada</p>
                        <p class="montserrat">lrg@londonrefereesgroup.com</p>
                    </div>
                </div>
                <div class="imgs flex">
                    <div class="img flex-center-center"><a href="https://www.facebook.com/"><img src="./img/facebook.png" alt=""></a></div>
                    <div class="img flex-center-center"><a href="https://www.instagram.com/"><img src="./img/instagram.png" alt=""></a></div>
                    <div class="img flex-center-center"><a href="https://www.linkedin.com/"><img src="./img/linkedin.png" alt=""></a></div>
                </div>
            </div>
        </div>
        <div class="contact-form">
            <div class="container">
                <div class="title">
                    <h2>Let's Chat!</h2>
                    <p class="montserrat"> Email us any questions or inquiries. We would be happy to answer you! </p>
                    <p id="msg">{{ displayMsg }}</p>
                </div>
                <form>
                    <div class="item flex-between">
                        <div>
                            <p class="montserrat">First Name<span>*</span></p>
                            <input v-model="input.firstname" name="fname" id="fname" type="text"placeholder="John" required>
                        </div>
                        <div>
                            <p class="montserrat">Last Name<span>*</span></p>
                            <input v-model="input.lastname" name="lname" id="lname" type="text" placeholder="Smith" required>
                        </div>
                    </div>
                    <div class="item">
                        <p class="montserrat">Email<span>*</span></p>
                        <input v-model="input.email" name="email" id="email" type="text" placeholder="johnsmith@gmail.com" required>
                    </div>
                    <div class="item">
                        <p class="montserrat">Reason to Contact<span>*</span></p>
                        <select id="reason" v-model="input.reason" required>
                            <option value="1">Sign Up</option>
                            <option value="2">Questions</option>
                        </select>
                    </div>
                    <div class="item">
                        <p class="montserrat">Message<span v-if="input.reason==='2'">*</span></p>
                        <textarea v-model="input.message" rows="10" name="message" id="message" placeholder="Entering your message here..."></textarea>
                    </div>
                    <div class="btn">
                        <input type="button" value="Submit" @click="sendContactForm">
                    </div>
                </form>
            </div>
        </div>
    </div class="contact">
    `,

    created: function() {
        console.log("Contact page created");
    },
    mounted:function(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
    },

    data: function() {
        return {
            input: {
                firstname: "",
                lastname: "",
                email: "",
                reason: "1",
                message: ""

            },
            displayMsg: ""
        }
    },

    methods: {
        sendContactForm() {
            console.log("submit");
            if (this.input.firstname.trimStart() !== "" && 
                this.input.lastname.trimStart() !== "" &&
                this.input.email.trimStart() !== "" && 
                this.input.reason.trimStart() !== "") {
                
                let contactData = new FormData();
                contactData.append("fname", this.input.firstname.trimStart());
                contactData.append("lname", this.input.lastname.trimStart());
                contactData.append("email", this.input.email.trimStart());
                if (this.input.reason.trimStart() === "2") {
                    contactData.append("message", this.input.message);
                }
                let url = (this.input.reason.trimStart() === "1" ? "./includes/admin/admin_createuser.php" : 
                                                                   "./includes/admin/admin_contactus.php");
                fetch(url, {
                    method: "POST",
                    body: contactData
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.displayMsg = data;
                })
                .catch(error => console.log(error));
            
            } else {
                this.displayMsg = "Please fill out the form.";
            }
        }

    }
}