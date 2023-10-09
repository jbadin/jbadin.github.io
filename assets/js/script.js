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
    let timelineBar = document.querySelector('.timeline_bar')
    let timelineJob = document.getElementsByClassName('timeline_job');
    for (let jobs of timelineJob) {
        size += jobs.offsetHeight + 50
    }
    timelineBar.style.height = size + 'px'
}

timelineResize(100);

window.onresize = () => {
    timelineResize();
}
