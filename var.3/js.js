let imgs = document.querySelectorAll('#slider img');
let i = 0;

setInterval(function(){

	if(imgs[i].classList.contains('view')){
		imgs[i].classList.remove('view')
	}else{
		imgs[i].classList.add('view')
	};
		i++;

	if(i>2){
		i=0
	};
},1000);
