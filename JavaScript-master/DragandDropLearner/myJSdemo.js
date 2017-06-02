/*This is the jQuery code for the carousel*/


//This is the carousel jQuery code

$(document).ready( function() {
    $('#myCarousel').carousel({
    	interval: 0
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});

function dragOver(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



//Hide email address JS with some DOM manipulation

var myEmail = document.createElement("span");

myEmail.innerHTML = "";

document.getElementById("hideEmail").appendChild(myEmail);
document.getElementById("hideEmail").setAttribute("href","mailto:manuelc@justit.co.uk");









