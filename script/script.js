const dino = document.querySelector('.dino');
const background = document.querySelector('.mainContent')

newCactus();

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        jump ();
    }
})

let position = 60;

function jump (){    
    let isJumping = false;

    if (position == 60){
        position = 120;
        dino.style.bottom = position + 'px';
        isJumping = true;
    }

    let gravity = setInterval (() => {
        if (position == 120){
            position = 60;
            dino.style.bottom = position + 'px';
            isJumping = false;
        }
    }, 400)
}

function newCactus () {
    const cactus = document.createElement ('img');
    cactus.src = 'assets/cactus.png'
    cactus.classList.add ('cactus');
    cactus.style.right = 0;
    background.appendChild(cactus);

    let randomAppear = Math.random() * 6000;
    let cactusPosition = 0;
    
    let appearInterval = setInterval(() => {
        if (cactusPosition > 500) {
            clearInterval(appearInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 420 && cactusPosition < 500 && position < 120){
            clearInterval (appearInterval);
            document.body.innerHTML = '<p class = "main">Fim de jogo</p>';
        } else {
            cactusPosition += 10;
            cactus.style.right = cactusPosition + 'px';
        }
    }, 40)

    setTimeout (newCactus, randomAppear);
}