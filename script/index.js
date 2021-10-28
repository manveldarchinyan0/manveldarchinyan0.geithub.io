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

span1.addEventListener("click",function (evt) {
    divmain1.scrollIntoView({behavior:"smooth",block: "center"})
})

span2.addEventListener("click",function (evt) {
    divmain2.scrollIntoView({behavior:"smooth",block:"center"})
})

span3.addEventListener("click",function (evt) {
    divmain3.scrollIntoView({behavior:"smooth",block:"center"})
})

span4.addEventListener("click",function (evt) {
    divmain4.scrollIntoView({behavior:"smooth",block:"center"})
})
