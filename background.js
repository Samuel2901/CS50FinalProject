function over() {
    document.body.style.backgroundColor = "red";
}

imgs = document.querySelectorAll("img");

for (i of imgs){
    i.addEventListener("click", over);
}