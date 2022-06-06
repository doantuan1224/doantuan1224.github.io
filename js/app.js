
function navRep(){
    let  x = document.getElementById("navMobile");
    if (x.className === "navbar"){
        x.className += " reponsive";
    }
    else{
        x.className = "navbar"
    }
}


let slideIndex = 0;
showSlide();
function showSlide(){
    let i;
    let slide = document.getElementsByClassName("carousel__content");

    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slide.length){
        slideIndex = 1
    }

    slide[slideIndex-1].style.display = "block";
    setTimeout(showSlide, 4000);
}