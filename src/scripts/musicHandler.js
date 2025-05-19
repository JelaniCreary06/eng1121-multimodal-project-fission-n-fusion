const music = document.getElementById("music-player");
const toggleBtn = document.getElementById("music-toggle");

const isPlaying = localStorage.getItem("bgMusic") == true;

if (isPlaying) {
    music.play().catch(() => {}); 
    toggleBtn.textContent = "🔊";
} else {
    toggleBtn.textContent = "🔇";
}

toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      localStorage.setItem("bgMusic", true);
      toggleBtn.textContent = "🔊";
    } else {
      music.pause();
      localStorage.setItem("bgMusic", false);
      toggleBtn.textContent = "🔇";
    }
  });

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("bgMusic") == true) {
      music.play().catch(() => {});
    }
});