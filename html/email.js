function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("subject").value,
    };
    const serviceID = "service_kkaarob";
    const templateID = "template_nk4h8ol";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("Your Message Send Successfull");
      })
      .catch((err) => console.log(err));
  }
  