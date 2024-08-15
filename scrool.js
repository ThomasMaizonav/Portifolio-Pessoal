const menuLinks = document.querySelectorAll('.right-side a[href^="#"]')

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    const targetElement = document.querySelector(id)
    return targetElement ? targetElement.offsetTop : 0
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })
}

function scrollToSection(event) {
    event.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90
    nativeScroll(distanceFromTheTop)
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})
