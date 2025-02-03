document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.getElementById("dynamic-text")
    const texts = ["Desenvolvedor Web", "Estudante de TI", "Freelancer", "Programador", "Desenvolvedor FullStack", "Estudante de ADS"]
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

// funcao de traducao da página
    const translateBtn = document.getElementById("translate-btn");
    const translations = {
        pt: {
            greeting: "Olá, sou o Thomas 👋",
            developer: "Desenvolvedor Web",
            experience: "Desenvolvedor web buscando oportunidades no mercado de trabalho",
            languagesTitle: "Línguas",
            languages: [
                { lang: "PT-BR - Nativo", proficiency: "100%" },
                { lang: "EN - Avançado", proficiency: "80%" }
            ],
            educationTitle: "Formações",
            education: [
                "• Cursando Análise e Desenvolvimento de Sistemas no Senai",
                "• Estudante de JavaScript, Python, HTML e CSS"
            ],
            aboutTitle: "Sobre Mim",
            aboutContent: "Tenho 20 anos e sou apaixonado por desenvolvimento web. Com experiência em HTML, CSS, JavaScript e Python, crio soluções práticas e eficientes que atendem às necessidades dos meus clientes. Sempre buscando inovar e melhorar minhas habilidades, estou em constante aprendizado e me dedico a entregar resultados de alta qualidade em cada projeto. Se você precisa de alguém comprometido e criativo para dar vida às suas ideias, estou aqui para ajudar."
        },
        en: {
            greeting: "Hello, I'm Thomas 👋",
            developer: "Web Developer",
            experience: "Web developer seeking opportunities in the job market",
            languagesTitle: "Languages",
            languages: [
                { lang: "PT-BR - Native", proficiency: "100%" },
                { lang: "EN - Advanced", proficiency: "80%" }
            ],
            educationTitle: "Education",
            education: [
                "• Studying Systems Analysis and Development at Senai",
                "• Student of JavaScript, Python, HTML, and CSS"
            ],
            aboutTitle: "About Me",
            aboutContent: "I am 20 years old and passionate about web development. With experience in HTML, CSS, JavaScript, and Python, I create practical and efficient solutions that meet my clients' needs. Always looking to innovate and improve my skills, I am constantly learning and dedicated to delivering high-quality results in every project. If you need someone committed and creative to bring your ideas to life, I am here to help."
        }
    };

    let currentLang = "pt";

    translateBtn.addEventListener("click", () => {
        const content = translations[currentLang === "pt" ? "en" : "pt"];
        document.querySelector("h1").textContent = content.greeting;
        document.querySelector("#dynamic-text").textContent = content.developer;
        document.querySelector("h3:nth-of-type(1)").textContent = content.experience;
        document.querySelector("h3:nth-of-type(2)").textContent = content.languagesTitle;
        document.querySelectorAll(".progress-bar")[0].nextElementSibling.textContent = content.languages[0].lang;
        document.querySelectorAll(".progress-bar")[0].querySelector(".progress").textContent = content.languages[0].proficiency;
        document.querySelectorAll(".progress-bar")[1].nextElementSibling.textContent = content.languages[1].lang;
        document.querySelectorAll(".progress-bar")[1].querySelector(".progress").textContent = content.languages[1].proficiency;
        document.querySelector("h3:nth-of-type(3)").textContent = content.educationTitle;

        const educationParagraphs = document.querySelectorAll("p");
        educationParagraphs[5].textContent = content.education[0];
        educationParagraphs[6].textContent = content.education[1];

        document.querySelector("h2:nth-of-type(2)").textContent = content.aboutTitle;
        document.querySelector(".sobre-mim-texto p").textContent = content.aboutContent;

        currentLang = currentLang === "pt" ? "en" : "pt";
        translateBtn.textContent = currentLang === "pt" ? "Translate to English" : "Traduzir para Português";
    })
