function sendMail(params) {
    var tempParams={
        from_name:document.getElementById(from_name).value,
        email:document.getElementById(email).value,
        msg:document.getElementById(msg).value,
    };

    emailjs.send('gmail',template_hkpa3es, tempParams)
     .then(function(res){
         console.log("success", res.status);
     })
}