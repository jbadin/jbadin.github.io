let socialNetworks = document.querySelectorAll('.socialNetworks')

for (let sn of socialNetworks) {
    sn.onmouseover = (e) => {
        e.target.classList.add('fa-bounce')
    }

    sn.onmouseleave = (e) => {
        e.target.classList.remove('fa-bounce')
    }
}

function timelineResize(startSize = 0) {
    let size = startSize
    let timelineContainer = document.querySelector('.timeline_container')
    let timelineBubble = document.getElementsByClassName('timeline_bubbles')
    let timelineBar = document.querySelector('.timeline_bar')
    let timelineJob = document.getElementsByClassName('timeline_job');
    for (let jobs of timelineJob) {
        size += jobs.offsetHeight + 50
    }
    timelineBar.style.height = size + 'px'
    for (let b of timelineBubble) {
        let pos = size - 10;
        b.style.top = '-' + pos + 'px'
        b.nextElementSibling.style.top = '-' + pos + 'px'
    }
    timelineContainer.style.height = (size + 100) + 'px'
}

timelineResize(100);
window.onresize = () => {
    timelineResize();
}
