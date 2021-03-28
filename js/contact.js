(()=>{

    let submitBtn = document.querySelector(".btn");

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let reason = document.getElementById("reason");
    let message = document.getElementById("message");

    let msg = document.getElementById("msg"); // display for the form filling and submission

    submitBtn.addEventListener("click", sendContactForm);

    function sendContactForm(){
        console.log("send contact form ... ");

        const enquiry_sender_fname = fname.value;
        const enquiry_sender_lname = lname.value;
        const enquiry_sender_email = email.value;
        const enquiry_message = message.value;
        const enquiry_category = reason.options[reason.selectedIndex].value;

        if (enquiry_sender_fname.trimStart() !== "" && enquiry_sender_lname.trimStart() !== "" &&
            enquiry_sender_email.trimStart() !== "" && enquiry_category.trimStart() !== "") {

            let formData = new FormData();
            formData.append("fname", enquiry_sender_fname);
            formData.append("lname", enquiry_sender_lname);
            formData.append("email", enquiry_sender_email);
            if (enquiry_category === "2") {
                formData.append("message", enquiry_message);
            }
            let url = (enquiry_category === "1" ? "./includes/admin/admin_createuser.php" : 
                                                    "./includes/admin/admin_contactus.php");
            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                msg.innerHTML = data;
            })
            .catch(error => console.error(error));
        
        } else {
            msg.innerHTML = "Please fill out the form.";
        }
    }
})();