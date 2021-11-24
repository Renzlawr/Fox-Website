document.addEventListener('scroll', animateRight = () => {
    let top = window.pageYOffset + window.innerHeight,
    isVisible = top > document.querySelector('#animation-1').offsetTop

    if (isVisible) {
        document.querySelector('#animation-1').classList.add('animateRight')
    } else {
        document.querySelector('#animation-1').classList.remove('animateRight')
    }

    isVisible = top > document.querySelector('#animation-3').offsetTop

    if (isVisible) {
        document.querySelector('#animation-3').classList.add('animateRight')
    } else {
        document.querySelector('#animation-3').classList.remove('animateRight')
    }

    isVisible = top > document.querySelector('#animation-5').offsetTop

    if (isVisible) {
        document.querySelector('#animation-5').classList.add('animateRight')
    } else {
        document.querySelector('#animation-5').classList.remove('animateRight')
    }

    isVisible = top > document.querySelector('#animation-2').offsetTop

    if (isVisible) {
        document.querySelector('#animation-2').classList.add('animateLeft')
    } else {
        document.querySelector('#animation-2').classList.remove('animateLeft')
    }

    isVisible = top > document.querySelector('#animation-4').offsetTop

    if (isVisible) {
        document.querySelector('#animation-4').classList.add('animateLeft')
    } else {
        document.querySelector('#animation-4').classList.remove('animateLeft')
    }
})


const switchTheme = document.querySelector('#switch')
switchTheme.addEventListener('click', toggleLight = () => {
    document.body.classList.toggle('light-mode')
})

