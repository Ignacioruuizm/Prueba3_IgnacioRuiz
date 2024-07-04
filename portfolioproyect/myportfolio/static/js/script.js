$(document).ready(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();

        var suave = this.hash;

        $("html, body").animate({
          scrollTop: $(suave).offset().top
        }, 900, function(){
          window.location.hash = suave;
        });
      }
    });

    $('[data-toggle="popover"]').popover();
  });

  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    if (name == "" || email == "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }
    
    return true;
  }

  function sendEmail() {
    if (validateForm()) {
      var form = document.getElementById('myForm');
      var formData = new FormData(form);
      form.submit();
    }
  }


