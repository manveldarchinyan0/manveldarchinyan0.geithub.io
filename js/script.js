let header = document.querySelector("header")
let imgArr = ["https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7p864jgKRqUvMFo51wi9enU8ZHu_08ZR6w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YWBje-X_tOCoSWx0l_RnjZhDz4i_GzR77w&usqp=CAU"]
let imgArrIndex = 0
setInterval(()=>{
	header.style.backgroundImage = `url(${imgArr[imgArrIndex]})`
	imgArrIndex++
	if (imgArrIndex == imgArr.length) {
		imgArrIndex=0
	}

},5000)

let body = document.querySelector("body")
let fasIcon = document.querySelector(".fas")
let navMobile = document.querySelector(".nav-mobile")

fasIcon.addEventListener("click", function () {
	navMobile.classList.toggle("show");
	if(navMobile.className!=="nav-mobile"){
		
		body.style.overflow = 'hidden'
		
	}else{
		body.style.overflow = "scroll"
		
	}
})