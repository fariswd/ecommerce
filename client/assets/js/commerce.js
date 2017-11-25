$( "form" ).submit(function(event) {
  if($('#inputEmail').val() == 'admin'){
    if($('#inputPassword').val() == 'admin'){
      console.log('login success');
      localStorage.setItem('islogin', $('#inputEmail').val());
      window.location.replace("admin.html");
      // alert('welcome '+ $('#inputEmail').val())
      // $('.container').empty();
      // $('.container').load('assets/template/admin.html')
    } else {
      console.log('wrong input')
      alert('wrong input, password ada di readme')
    }
  } else {
    console.log('wrong input')
    alert('wrong input, password ada di readme')
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
