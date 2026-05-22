// ====================================
// MAIN SCRIPT SYSTEM
// ====================================

console.log("Rose & Lampy Universe Loaded ❤️");

// HEART TRAIL

document.addEventListener("mousemove", (e) => {

  const heart =
    document.createElement("div");

  heart.innerHTML = "💖";

  heart.classList.add("cursor-heart");

  heart.style.left =
    e.clientX + "px";

  heart.style.top =
    e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 1000);

});
