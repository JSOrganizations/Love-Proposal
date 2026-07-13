function getJSOrganization() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name') || "Love";
}

const JSOrganization = getJSOrganization();
document.querySelectorAll('[id^="JSOrganization-placeholder"]').forEach(el => el.textContent = JSOrganization);

function showProposal(id) {
    document.querySelectorAll('.proposal-screen').forEach(screen => screen.style.display = 'none');
    const targetScreen = document.getElementById(id);
    if (targetScreen) {
        targetScreen.style.display = 'block';
    }
    if (id === 'proposal-yes') {
        document.body.style.backgroundColor = '#ffecf0';
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function moveRandomEl(Sowrov) {
    Sowrov.style.position = "absolute";
    Sowrov.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    Sowrov.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

document.addEventListener('DOMContentLoaded', () => {
    showProposal('proposal-1');

    const moveRandomBtn = document.getElementById('move-random');
    if (moveRandomBtn) {
        moveRandomBtn.addEventListener('mouseenter', e => moveRandomEl(e.target));
        moveRandomBtn.addEventListener('click', e => moveRandomEl(e.target));
    }


    lottie.loadAnimation({
        container: document.getElementById('Sowrov1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/pleading_face.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('Sowrov2'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/sad_duck.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('Sowrov3'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/crying_wtr_duck.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('Sowrov4'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/loud_cry_duck.json'
    });

    lottie.loadAnimation({
        container: document.getElementById('Sowrov5'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animations/jumping_together_with_love.json'
    });
});
