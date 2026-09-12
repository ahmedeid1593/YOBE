// ================= SPLASH SCREEN =================

window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.classList.add("hide");
            setTimeout(() => {
                splash.style.display = "none";
            }, 600);
        }, 2400);
    }
});


// ================= MODALS HANDLER =================

// Call Modal
const callTrigger = document.getElementById("callTrigger");
const callModal = document.getElementById("callModal");
const callClose = document.getElementById("callClose");
const callOverlay = document.getElementById("callOverlay");

if (callTrigger && callModal) {
    callTrigger.addEventListener("click", () => {
        callModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

function closeCall() {
    if (callModal) callModal.classList.remove("active");
    document.body.style.overflow = "";
}

if (callClose) callClose.addEventListener("click", closeCall);
if (callOverlay) callOverlay.addEventListener("click", closeCall);


// WhatsApp Modal
const whatsappTrigger = document.getElementById("whatsappTrigger");
const whatsappModal = document.getElementById("whatsappModal");
const whatsappClose = document.getElementById("whatsappClose");
const whatsappOverlay = document.getElementById("whatsappOverlay");

if (whatsappTrigger && whatsappModal) {
    whatsappTrigger.addEventListener("click", () => {
        whatsappModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

function closeWhatsapp() {
    if (whatsappModal) whatsappModal.classList.remove("active");
    document.body.style.overflow = "";
}

if (whatsappClose) whatsappClose.addEventListener("click", closeWhatsapp);
if (whatsappOverlay) whatsappOverlay.addEventListener("click", closeWhatsapp);


// Payment Modal
const paymentTrigger = document.getElementById("paymentTrigger");
const paymentModal = document.getElementById("paymentModal");
const paymentClose = document.getElementById("paymentClose");
const paymentOverlay = document.getElementById("paymentOverlay");

if (paymentTrigger && paymentModal) {
    paymentTrigger.addEventListener("click", () => {
        paymentModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

function closePayment() {
    if (paymentModal) paymentModal.classList.remove("active");
    document.body.style.overflow = "";
}

if (paymentClose) paymentClose.addEventListener("click", closePayment);
if (paymentOverlay) paymentOverlay.addEventListener("click", closePayment);


// Close with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeCall();
        closeWhatsapp();
        closePayment();
    }
});


// ================= COPY PAYMENT NUMBER =================

const copyButtons = document.querySelectorAll(".copy-button[data-copy]");

copyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const number = button.getAttribute("data-copy");
        if (!number) return;

        navigator.clipboard.writeText(number)
            .then(() => {
                const oldContent = button.innerHTML;
                button.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    Copied
                `;
                setTimeout(() => {
                    button.innerHTML = oldContent;
                }, 1500);
            })
            .catch(() => {
                alert("Number: " + number);
            });
    });
});