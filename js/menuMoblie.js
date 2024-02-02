class MenuMobile{
    constructor(menuMobile, navList, navLinks){
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.classeAtiva = "ativa";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinksFade 0.7s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.classeAtiva);
        this.menuMobile.classList.toggle(this.classeAtiva);
        this.animateLinks();
    }

    addClickEvent(){
        this.menuMobile.addEventListener("click", this.handleClick);  
    }

    init(){
        if (this.menuMobile){
            this.addClickEvent();
        }
        
        return this;
    }
}

const menuMobile = new MenuMobile(
    ".menu-mobile",
    ".nav-list",
    ".nav-list li"
);

menuMobile.init();