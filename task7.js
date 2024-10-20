var id_ele = document.getElementById("name");
let modified = id_ele.innerHTML = "<h1>CHARAN</h1>"
console.log(modified);

var class_ele = document.getElementsByClassName("greets");
console.log(class_ele);

let clsmd = class_ele[0].innerHTML = "heycharan"
console.log(clsmd);

var query = document.querySelector(".task1");
let md = query.innerHTML="modified query"
console.log(md);

var queryall = document.querySelectorAll(".task1")
console.log(queryall)

var tags = document.getElementsByTagName("div")
console.log(tags)