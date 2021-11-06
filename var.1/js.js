let texts = ['text1', 'text2', 'text3'];
let slider = document.querySelector('#slider')

let k = 0
setInterval(function(){
	if(k>2){
		k=0
	}
	console.log(k)
	slider.innerHTML = texts[k]
	k++
	

}, 1000)