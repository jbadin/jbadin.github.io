let socialNetworks = document.querySelectorAll('.socialNetworks')

for (let sn of socialNetworks) {
    sn.onmouseover = (e) => {
        e.target.classList.add('fa-bounce')
    }

    sn.onmouseleave = (e) => {
        e.target.classList.remove('fa-bounce')
    }
}

