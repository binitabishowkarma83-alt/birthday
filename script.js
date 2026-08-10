// =============================
// START WEBSITE
// =============================

function startWebsite() {

    document.getElementById("opening").style.display = "none";

    document.getElementById("mainWebsite")
        .classList.remove("hidden");

    startMusic();

    createHearts();
}


// =============================
// MUSIC
// =============================

let music = document.getElementById("birthdayMusic");

function startMusic() {

    music.play().catch(function() {

        console.log("Music needs user interaction.");

    });

    document.getElementById("musicButton").innerText =
        "⏸️ Pause Music";
}


function toggleMusic() {

    if (music.paused) {

        music.play();

        document.getElementById("musicButton").innerText =
            "⏸️ Pause Music";

    } else {

        music.pause();

        document.getElementById("musicButton").innerText =
            "🎵 Play Music";
    }
}


// =============================
// FINAL SURPRISE
// =============================

function finalSurprise() {

    document.getElementById("finalMessage")
        .classList.remove("hidden");

    createConfetti();

}


// =============================
// IMAGE POPUP
// =============================

function openImage(image) {

    let popup =
        document.getElementById("imagePopup");

    let popupImage =
        document.getElementById("popupImage");

    popup.style.display = "flex";

    popupImage.src = image.src;
}


function closeImage() {

    document.getElementById("imagePopup")
        .style.display = "none";
}


// =============================
// FLOATING HEARTS
// =============================

function createHearts() {

    setInterval(function() {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        let duration =
            3 + Math.random() * 4;

        heart.animate(

            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(-100vh)",
                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing: "linear"
            }

        );

        setTimeout(function() {

            heart.remove();

        }, duration * 1000);

    }, 700);
}


// =============================
// CONFETTI
// =============================

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        let confetti =
            document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "2000";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        let fall =
            2 + Math.random() * 3;

        confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],

            {
                duration:
                    fall * 1000,

                easing: "linear"
            }

        );

        setTimeout(function() {

            confetti.remove();

        }, fall * 1000);
    }
}
function showSorry() {

    document.getElementById("sorryMessage")
        .classList.remove("hidden");

}
function showSorry() {

    document.getElementById("sorryMessage")
        .classList.remove("hidden");

}
function finalSurprise() {

    document.getElementById("finalMessage")
        .classList.remove("hidden");

    createConfetti();

    createLoveRain();
}


function createLoveRain() {

    const loveRain =
        document.getElementById("loveRain");

    const messages = [
        "I Love You ❤️",
        "I Love You 💕",
        "I Love You 🫶",
        "I Love You ❤️",
        "Love You Always 💖"
    ];

    for (let i = 0; i < 35; i++) {

        let love =
            document.createElement("div");

        love.className = "love-fall";

        love.innerText =
            messages[Math.floor(
                Math.random() * messages.length
            )];

        love.style.left =
            Math.random() * 100 + "vw";

        love.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        love.style.animationDelay =
            Math.random() * 2 + "s";

        loveRain.appendChild(love);

        setTimeout(function() {
            love.remove();
        }, 8000);
    }
}
let sorryRainStarted = false;
let loveMode = false;

const sadEmojis = ["😔", "🥺", "💔", "😢", "🥹", "😭"];
const loveEmojis = ["❤️", "🫶🏻", "💕", "💗", "💖", "🥰", "💞"];

function createSorryEmoji() {

    const container = document.getElementById("sorryEmojiRain");

    if (!container) return;

    const emoji = document.createElement("span");

    emoji.className = "sorry-fall";

    const emojis = loveMode ? loveEmojis : sadEmojis;

    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";

    emoji.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    emoji.style.fontSize =
        (Math.random() * 15 + 20) + "px";

    if (loveMode) {
        emoji.classList.add("love");
    }

    container.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 6500);
}


function startSorryRain() {

    if (sorryRainStarted) return;

    sorryRainStarted = true;

    setInterval(() => {
        createSorryEmoji();
    }, 350);
}


/* =========================
   SHOW SORRY MESSAGE
========================= */

function showSorry() {

    const message = document.getElementById("sorryMessage");

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    startSorryRain();
}


/* =========================
   CHANGE SAD → LOVE
   WHILE SCROLLING
========================= */

window.addEventListener("scroll", function () {

    const message = document.getElementById("sorryMessage");

    if (!message || message.classList.contains("hidden")) {
        return;
    }

    const rect = message.getBoundingClientRect();

    /*
       When user scrolls near the lower part
       of the sorry message, change emojis.
    */

    if (rect.bottom < window.innerHeight * 0.75) {

        if (!loveMode) {

            loveMode = true;

            const rain = document.getElementById("sorryEmojiRain");

            if (rain) {
                rain.innerHTML = "";
            }

            message.classList.add("love-mode");
        }
    }
});