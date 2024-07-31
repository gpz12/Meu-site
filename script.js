document.addEventListener("DOMContentLoaded", function () {
    const simButton = document.getElementById("sim");
    const mensagem = document.getElementById("mensagem");
    const naoButton = document.getElementById("nao");

    if (simButton && mensagem && naoButton) {
        simButton.addEventListener("click", function () {
            // Mostra a mensagem
            mensagem.style.display = "block";
        });

        naoButton.addEventListener("mouseover", function () {
            moveButton();
        });

        function moveButton() {
            const maxX = window.innerWidth - naoButton.offsetWidth;
            const maxY = window.innerHeight - naoButton.offsetHeight;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            naoButton.style.position = "absolute";
            naoButton.style.left = randomX + "px";
            naoButton.style.top = randomY + "px";
        }
    } else {
        console.error('Botões ou mensagem não encontrados. Verifique os IDs.');
    }
});