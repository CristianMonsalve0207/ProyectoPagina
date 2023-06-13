const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 40,
});

typewriter
.typeString('Plasmamos en el metal tus ideas')
.pauseFor(200)
.star();

