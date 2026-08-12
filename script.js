let currentPage = 1;


/* NEXT PAGE */

function nextPage() {

    const current =
        document.getElementById("page" + currentPage);

    if (current) {
        current.classList.remove("active");
    }

    currentPage++;

    const next =
        document.getElementById("page" + currentPage);

    if (next) {

        next.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


/* SPECIAL CARD MESSAGES */

const messages = [

    "Tumhari smile hamesha achhi lagti hai 😊",

    "Tum apne goals ke liye serious ho 🎯",

    "Tumhari personality tumhe special banati hai ✨",

    "Tumhare liye hamesha best wishes hain 🌟",

    "Tum khush raho, ye sabse important hai 🤍",

    "Tum life mein bohat aage jao 💫",

    "Tumhare saath guzre moments hamesha yaad rahenge 📸",

    "Keep smiling and stay positive 😊",

    "Allah tumhe hamesha khush aur kamyab rakhe 🤲"
];


let messageIndex = 0;


/* CARD REVEAL */

function reveal(card) {

    if (card.dataset.opened === "true") {
        return;
    }

    card.dataset.opened = "true";

    card.innerHTML =
        messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    card.style.fontSize = "15px";

    card.style.padding = "12px";
}


/* MUSIC */

const music =
    document.getElementById("birthdayMusic");


function playMusic() {

    if (!music) {
        return;
    }

    const button =
        document.querySelector(".music-btn");


    if (music.paused) {

        music.play();

        if (button) {
            button.innerHTML =
                "⏸️ Pause Music";
        }

    } else {

        music.pause();

        if (button) {
            button.innerHTML =
                "🎵 Play Music";
        }

    }
}