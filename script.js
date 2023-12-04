function toggleCard(card) {
    card.classList.toggle('card2');
    var front = document.querySelector('.front');
    front.classList.toggle('front2');


   
}

// Adiciona um ouvinte de evento de clique ao botão
document.getElementById("playButton").addEventListener("click", togglePlayPause);

// Função para reproduzir ou pausar a música
function togglePlayPause() {
    var audio = document.getElementById("myAudio");

    if (audio.paused) {
        audio.play();
        document.getElementById("playButton").textContent = "Pausar Música";
    } else {
        audio.pause();
        document.getElementById("playButton").textContent = "Reproduzir Música";
    }
}