document.querySelectorAll(".skill-card").forEach((card) => {
    const details = card.querySelector(".skill-card-extra");
    if (!details) {
        return;
    }

    let isHovered = false;
    let isFocused = false;

    const updateDetailsVisibility = () => {
        card.classList.toggle("is-expanded", isHovered || isFocused);
    };

    card.addEventListener("pointerenter", () => {
        isHovered = true;
        updateDetailsVisibility();
    });

    card.addEventListener("pointerleave", () => {
        isHovered = false;
        updateDetailsVisibility();
    });

    card.addEventListener("focusin", () => {
        isFocused = true;
        updateDetailsVisibility();
    });

    card.addEventListener("focusout", (event) => {
        if (!card.contains(event.relatedTarget)) {
            isFocused = false;
            updateDetailsVisibility();
        }
    });
});