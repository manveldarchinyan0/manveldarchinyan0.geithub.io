let header = document.querySelector("header")
let imgArr = ["https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7p864jgKRqUvMFo51wi9enU8ZHu_08ZR6w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YWBje-X_tOCoSWx0l_RnjZhDz4i_GzR77w&usqp=CAU"]
let imgArrIndex = 0
setInterval(()=>{
	header.style.background = `url(${imgArr[imgArrIndex]})`
	imgArrIndex++
	if (imgArrIndex == imgArr.length) {
		imgArrIndex=0
	}

},5000)