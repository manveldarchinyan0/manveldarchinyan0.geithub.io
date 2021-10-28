let span1 = document.querySelector(".span1") 
let span2 = document.querySelector(".span2") 
let span3 = document.querySelector(".span3") 
let span4 = document.querySelector(".span4") 

let divmain1 = document.querySelector(".divmain1")
let divmain2 = document.querySelector(".divmain2")
let divmain3 = document.querySelector(".divmain3")
let divmain4 = document.querySelector(".divmain4")

let maintitle1 = document.querySelector(".title1")
let maintitle2 = document.querySelector(".title2")

let slideimg = document.querySelector(".slideimg")

let slidex = 0
let arr = [
    "https://media.istockphoto.com/photos/blue-and-red-links-with-silver-chain-teamwork-concept-picture-id1290685170?b=1&k=20&m=1290685170&s=170667a&w=0&h=1IKlYa8oI7piPEtaeseJySvvk6bsgaJEVnUvMkMl1rQ=",
    "https://media.istockphoto.com/photos/blockchain-network-polygon-graphic-with-abstract-wave-pattern-picture-id1263641972?b=1&k=20&m=1263641972&s=170667a&w=0&h=RN130b_moSOjXtr71VqD2fh9sFWopr-Ty9TQ3T_zl-M=",
    "https://media.istockphoto.com/photos/colorful-background-picture-id1280385511?b=1&k=20&m=1280385511&s=170667a&w=0&h=4-KMkIqgyw2gTBMTBbYZVZoidwRsWZzr3q0xyUDYhas="
]

setInterval(()=>{
    slideplus()
},5000)


function slideplus(params) {
    slidex++
    if(slidex==arr.length){
        slidex = 0
        
    }
    slideimg.src = arr[slidex]
}


function slideminus(params) {
    slidex--
    if(slidex<0){
        slidex = arr.length
    }
    slideimg.src = arr[slidex]

}








span1.addEventListener("click",function (evt) {
    divmain1.scrollIntoView({behavior:"smooth",block: "start"})
})

span2.addEventListener("click",function (evt) {
    divmain2.scrollIntoView({behavior:"smooth",block:"start"})
})

span3.addEventListener("click",function (evt) {
    divmain3.scrollIntoView({behavior:"smooth",block: "start"})
})

span4.addEventListener("click",function (evt) {
    divmain4.scrollIntoView({behavior:"smooth",block:"start"})
})

