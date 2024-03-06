class MenuMobile {
    constructor(menuMobile, navList, navLinks, alinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.links = document.querySelectorAll(alinks);
        this.classeAtiva = "ativa";

        this.handleClick = this.handleClick.bind(this);
    }

    addClickEventLink() {
        this.links.forEach((link) => {
            link.addEventListener("click", this.handleClick);
        });
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinksFade 0.7s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick() {
        let windowWidth = window.innerWidth;
        if (windowWidth <= 1024) {
            this.animateLinks();
            this.navList.classList.toggle(this.classeAtiva);
            this.menuMobile.classList.toggle(this.classeAtiva);
        }
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
            this.addClickEventLink();
        }

        return this;
    }
}

const menuMobile = new MenuMobile(
    ".menu-mobile",
    ".nav-list",
    ".nav-list li",
    ".link"
);

menuMobile.init();