const itens = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;

    itens.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });

};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
});


document.addEventListener("DOMContentLoaded", () => {
    const meteorContainer = document.querySelector('.meteors');
    let activeMeteors = 0;
    const maxMeteors = 20;

    function createMeteor() {
        if (activeMeteors >= maxMeteors) {
            return;
        }

        const meteor = document.createElement('div');
        meteor.classList.add('meteor');

        meteor.style.top = `${-100}px`;
        meteor.style.left = `${Math.random() * -100}vw`;

        meteor.style.animation = `moveMeteor ${Math.random() * 2 + 3}s linear`;

        meteorContainer.appendChild(meteor);
        activeMeteors++;

        meteor.addEventListener('animationend', () => {
            meteor.remove();
            activeMeteors--;
        });
    }

    function createMeteorShower() {
        for (let i = 0; i < 50; i++) {
            createMeteor();
        }
    }

    setInterval(createMeteorShower, 30000); 

    setInterval(createMeteor, 3000);
});