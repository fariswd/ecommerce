$( "form" ).submit(function(event) {
  if($('#inputEmail').val() == 'ca@pung.com'){
    if($('#inputPassword').val() == '123'){
      console.log('login success');
      localStorage.setItem('islogin', $('#inputEmail').val());
      window.location.replace("admin.html");
      // alert('welcome '+ $('#inputEmail').val())
      // $('.container').empty();
      // $('.container').load('assets/template/admin.html')
    } else {
      console.log('wrong input')
      alert('wrong input')
    }
  } else {
    console.log('wrong input')
    alert('wrong input')
  }
  
});

function logout() {
  localStorage.removeItem('islogin');
  location.reload(); 
}

(function (){
  if(localStorage.getItem("islogin")){
    window.location.replace("admin.html");
    // $('.container').empty();
    // $('.container').load('assets/template/admin.html')
  }
}())
