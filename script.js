var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "./img/moon.png";

    }else{
        icon.src = "./img/sun.png";
    }
}


const typed = new Typed('.multi-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Python Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
});