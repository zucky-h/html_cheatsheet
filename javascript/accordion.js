const tags = document.querySelectorAll(".tag_title")

function toggle(){
    console.log("clicked")
    var content = this.nextElementSibling;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
}

for(let i=0; i<tags.length; i++){
    tags[i].addEventListener("click", toggle);
}
