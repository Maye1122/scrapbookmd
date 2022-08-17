const lista = document.querySelector('#at')

const arrayMenu = ['9:00 PM',
'dinner',
'lunch',
'the start of the party',
'sunrise',
'the start of the movie',
'the moment',
'345 broadway street',
'the store',
'my house',
'Surfaces and others'
]
const template = document.querySelector('#template-At').content
const fragment = document.createDocumentFragment()


arrayMenu.forEach(item =>{

	template.querySelector('.fuego').textContent = item
	const clone = template.cloneNode(true)
	fragment.appendChild(clone)
})
lista.appendChild(fragment);


const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
	if (window.scrollY > 100) {
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
})


function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }


  function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }