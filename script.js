function imgSlider(anything){
   document.querySelector(".pepsi").src = anything;
}

function bgcolor(color){
    const sec = document.querySelector(".sec");
    sec.style.background = color;
}

function menutoggle(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active');
    toggleMenu.classList.toggle('active');
}