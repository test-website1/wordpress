// Работа с формой

$(document).ready(function() {

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData: false,
			success: function() {
				alert("Спасибо!");
				let inputs = document.querySelectorAll(".input");
				for(let i = 0; i < inputs.length; i++) {
					inputs[i].value = "";
					if((i == inputs.length - 1)) {
						num1.innerText = Math.ceil(Math.random() * 10);
						num2.innerText = Math.ceil(Math.random() * 10);
					}
				}
				
				
			}
		})

	})

});