$(function () {
    // Hide all elements which id starts with text.
    $("[id^=text]").hide();
    
    $(".para2m").click(function () {
        // Look for the element with id equals text + 
        // the clicked element data-rel value.
        $("#text" + $(this).data("rel")).toggle();
         $("#demo" + $(this).data("rel")).toggle();
    });
});

 $(function () {
      $("#btnsubmit").click(function () {
        var password=$("#txtpswrd").val();
        var email=$("#email1").val();
        var confirmpassword=$("#ctxtpswrd").val();
        if(confirmpassword!=password){
          if(email==""){
            alert("Email Field cannot be empty.");
            return false;
          }
          else{
        	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        	if(reg.test(email)){
        		if(password==""){
        			alert("Password Field cannot be empty.");
        			return false;
        		}
        	}
        	else{
        		alert("Enter a valid Email address.")
          		return false;
          	}
        }
          if(confirmpassword==""){
            alert("Confirm password Field cannot be empty.");
            return false;
          }
          if(password==""){
            alert("Password Field cannot be empty.");
            return false;
          }
          else{ 
          alert("Password do not match.");
          return false;
          }   
      }
    else{
        if(email==""){
        	alert("Email Field cannot be empty.");
            return false;
        }
        else{
        	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        	if(reg.test(email)){
        		if(password==""){
        			alert("Password Field cannot be empty.");
        			return false;
        		}
        	}
        	else{
        		alert("Enter a valid Email address.")
          		return false;
          	}
        }
        if(password==""){
         	alert("Password Field cannot be empty.");
            return false;
        }    
        return true;
        if(confirmpassword==""){
            alert("Confirm password Field cannot be empty.");
            return false;
        }
  }
  });
});

$(function () {
	$("#btnsubmit1").click(function () {

		var lpassword=$("#txtpswrd1").val();
        var lemail=$("#email2").val();
        if(lemail==""){
        	alert("Email Field cannot be empty");
        	return false;
        }
        else{
        	var reg1 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        	if(reg1.test(lemail)){
        		if(lpassword==""){
        			alert("Password Field cannot be empty.");
        			return false;
        		}
        	}
        	else{
        		alert("Enter a valid Email.")
        		return false;
        	}

        }
        if(password=""){
        	alert("Password Field cannot be empty.");
        	return false;
        }

	});
});