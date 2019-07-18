// Menu-btn ----------------------------------------------/

let button = document.getElementById("menu-button-id");
let menuToggle = document.getElementById("header__nav");
let btnElements = document.querySelectorAll(".menu-button__element");

button.addEventListener("click", () => {
	menuToggle.classList.toggle("header__nav-show");
	
	for(let i = 0; i < btnElements.length; i++) {
		 btnElements[i].classList.toggle("active-btn__element");
	}
});


// Form (method=POST) ------------------------------------/

let num1 = document.querySelector('.number1');
let num2 = document.querySelector('.number2');
//let equation = document.querySelector('.equation');
let submit = document.querySelector('.submit-input');
let sumInput = document.querySelector('.answer');

num1.innerText = Math.ceil(Math.random() * 10);
num2.innerText = Math.ceil(Math.random() * 10);

sumInput.oninput = function(){
	if(parseInt(num1.innerText) + parseInt(num2.innerText) !== parseInt(sumInput.value)){
		submit.setAttribute('disabled', 'disabled');
		sumInput.style.cssText = 'background-color: #8C0303;';
	}
	else{
		submit.removeAttribute('disabled');
		sumInput.style.cssText = 'background-color: rgba(38, 38, 38, 0.9);';
	}
}

// Ajax request ------------------------------------------/

let moreInfoBtns = document.querySelectorAll('.more-info');
let output = document.querySelector('.modal-wrapper');
let modalFade = document.querySelector('.modal-fade');
let posts = document.querySelectorAll('.main-content-wrappper');

// let imgUrls = ['http://wordpresssite/wp-content/themes/MyTheme/samples/sample.png', 'http://wordpresssite/wp-content/themes/MyTheme/samples/sample2.png', 'http://wordpresssite/wp-content/themes/MyTheme/samples/sample3.png'];
// let count = 0;

for(let i = 0; i < moreInfoBtns.length; i++){
	moreInfoBtns[i].addEventListener('click', function(){
		let xhr = new XMLHttpRequest();

		xhr.open('GET', '/modal.html', true);

		xhr.onload = function(){
			if(this.status === 200){
				output.innerHTML = this.responseText;
				let links = posts[i].querySelectorAll('.modal-links');
				let content = document.querySelector('.modal-content');
				let description = document.querySelector('.description');
				let contentBox = document.createElement('p');
				contentBox.innerText = content.innerText;

				modalFade.classList.add('active-fadeness');
				let closeBtn = document.querySelector('.close-modal');
				closeBtn.addEventListener('click', function(){
					output.innerHTML = '';
					modalFade.classList.remove('active-fadeness');
				});
				description.insertBefore(contentBox, closeBtn);

				links.forEach(function(item){
					let slide = document.createElement('div');
					let img = document.createElement('img');
					let slider = document.querySelector('.slick-slider');

					slide.classList.add('slide');
					slide.appendChild(img);
					img.src = item.innerText;

					slider.appendChild(slide);
				});


				//slick slider
				$('.slick-slider').slick({
					dots: true,
					speed: 1000,
					autoplay: true,
					autoplaySpeed: 2400
				});
			}
		}

		xhr.send();
	});
}


