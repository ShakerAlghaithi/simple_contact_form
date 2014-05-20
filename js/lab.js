$(document).ready(function(){
   var contacts = [];
   var count = 0;
       

       var addContact = function(newContact){
       	  var contactString = ["<li id='",newContact.id,"' class = 'contact'>",
       	                      "<div>", newContact.name, "</div>","<img src='",newContact.imgUrl,"'>",
       	                      
       	                      "<div>", newContact.email, "</div>",
       	                      "<div>", newContact.number, "</div>",
       	                      
       	                      "<span class = 'edit'>Edit</span>  ",
       	                      "<span class = 'delete'>Delete</span>",
       	                       "</li>"].join(" ");
       	   $("#contacts").append(contactString);
       	};
       	    
       	    $('ul').on('click', 'delete', function(){
            $(this).parent().fadeOut(500, function(){
            	$(this).remove();
            	});
        	});

       

      

    $("#new_contact").submit(function(event){
    	event.preventDefault(); // stops browser to go to actions to relaod forms
    	console.log(this)
    	var name = $("#contact_name").val();
    	var email = $("#contact_email").val();
    	var number = $("#contact_number").val();
    	var imgUrl = $("#contact_image").val();
    	// reset the form
    	this.reset();
    	// keeping track of new contact
    	var newContact = {
    		               id: count,
    		               name: name,
    		               email: email,
    		               number: number,
    		               imgUrl: imgUrl
    	};
    	count += 1;
    	contacts.push(newContact);
    	 // call a function to add our contact to the page 
    	 addContact(newContact);
    });

	// $("input").keypress(function(e){
	// 	if (e.which == 13){
	// 		var name = $("#name").val();
	// 		e.preventDefault();
	// 		if(!name.length){
	// 			return;
	// 		} else{
	// 			addContact(name);
	// 			$("#name").val(" ");
	// 		}
	// 	}

	// });
   
 //   var email = $("#email").val();
 //   var phone = $("#phone").val();
});