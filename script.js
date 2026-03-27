document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".feed-header button");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");
        });
    });
});

// Two features with Cursor

// 1) Dim all cards, brighten hovered card
const postCards = document.querySelectorAll(".post-card");
postCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    postCards.forEach((c) => c.classList.add("dimmed"));
    card.classList.remove("dimmed");
    card.classList.add("highlighted");
  });
  card.addEventListener("mouseleave", () => {
    postCards.forEach((c) => c.classList.remove("dimmed"));
    card.classList.remove("highlighted");
  });
});
// 2) "For you" dropdown menu
const forYouBtn = document.querySelector(".feed-header button:first-child");
if (forYouBtn) {
  const menu = document.createElement("div");
  menu.className = "for-you-menu";
  menu.innerHTML = `
    <button type="button">Politics</button>
    <button type="button">Science</button>
    <button type="button">Sports</button>
    <button type="button">Entertainment</button>
  `;
  const feedHeader = document.querySelector(".feed-header");
  feedHeader.style.position = "relative";
  feedHeader.appendChild(menu);
  forYouBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });
  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      forYouBtn.textContent = `For you: ${e.target.textContent}`;
      menu.classList.remove("open");
    }
  });
  document.addEventListener("click", () => menu.classList.remove("open"));
}

