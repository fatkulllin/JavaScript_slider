let texts = ['1.png', '2.png', '3.png'];
let i = 0;
let slider = document.querySelector('#slider')
let right = document.querySelector('#right')
let left = document.querySelector('#left')

setInterval(function(){
	i++
	if(i>2){
		i=0
	}
	slider.setAttribute('src',texts[i])
},5000)

right.addEventListener('click',function(){
	i++
	if(i>2){
		i=0
	}
	slider.setAttribute('src',texts[i])
})

left.addEventListener('click',function(){
	i--
	if(i<0){
		i=2
	}
	slider.setAttribute('src',texts[i])
})