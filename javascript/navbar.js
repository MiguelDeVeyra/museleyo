var nav = document.getElementById('navbar');
var routerLink = document.querySelectorAll('.routerLink');
console.log(routerLink);
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 10 ) {
        nav.classList.add("black");
        for (let index = 0; index < routerLink.length; index++) {
            routerLink[index].classList.add("black");
        }
        
    } else if (document.documentElement.scrollTop <= 10) {
        nav.classList.remove("black");
        for (let index = 0; index < routerLink.length; index++) {
            routerLink[index].classList.remove("black");
        }
    }
    
}

