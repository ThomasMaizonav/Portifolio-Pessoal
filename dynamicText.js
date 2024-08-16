document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.getElementById("dynamic-text")
    const texts = ["Desenvolvedor Web", "Estudante de TI", "Freelancer", "Desenvolvedor Júnior", "Desenvolvedor FullStack"]
    let index = 0
    let charIndex = 0
    let isDeleting = false

    function typeEffect() {
        const currentText = texts[index];
        if (isDeleting) {
            // Se está deletando, diminui o charIndex
            dynamicText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--
        } else {
            // Se está escrevendo, aumenta o charIndex
            dynamicText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++
        }

        // Se completou a escrita, espera um pouco e começa a deletar
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true
            setTimeout(typeEffect, 4000) // Espera 2 segundos antes de começar a deletar
        } 
        // Se deletou todo o texto, passa para o próximo
        else if (isDeleting && charIndex === 0) {
            isDeleting = false
            index = (index + 1) % texts.length
            setTimeout(typeEffect, 500) // Espera meio segundo antes de começar a escrever o próximo texto
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 300) // Muda a velocidade dependendo se está escrevendo ou deletando
        }
    }

    typeEffect()
})
