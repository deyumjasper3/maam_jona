function openModal() {
    document.getElementById("modal").style.display = "flex";
}

/* OPEN GIFT ANIMATION */
function openGift() {
    const box = document.getElementById("giftBox");
    const content = document.getElementById("modalContent");

    box.classList.add("open");

    // delay before showing message
    setTimeout(() => {
        content.classList.remove("hidden");
    }, 700);
}

function showSlide2() {
    document.getElementById("modal").style.display = "none";

    document.getElementById("slide1").classList.remove("active");
    document.getElementById("slide2").classList.add("active");
}

/* CREATE CONTINUOUS CONFETTI */
function createConfetti() {
    const container = document.querySelector(".confetti-container");

    const colors = ["#a78bfa", "#f472b6", "#60a5fa", "#34d399", "#facc15", "#ffffff"];

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 6 + 4 + "px";
        confetti.style.height = Math.random() * 10 + 6 + "px";

        container.appendChild(confetti);

        // remove and re-add for continuous effect
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

/* RUN CONTINUOUSLY */
setInterval(createConfetti, 500);