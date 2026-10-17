const screens = [...document.querySelectorAll(".screen")];
const gift = document.getElementById("openGift");
const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("openEnvelope");
const secretPaper = document.getElementById("secretPaper");
const afterSecret = document.getElementById("afterSecret");
const video = document.getElementById("birthdayVideo");
const videoPlaceholder = document.getElementById("videoPlaceholder");
const audio = document.getElementById("birthdayAudio");
const audioPlaceholder = document.getElementById("audioPlaceholder");

function showScreen(name) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === `screen-${name}`));
  window.scrollTo({top: 0, behavior: "smooth"});
  if (name !== "video" && video && !video.paused) video.pause();
  if (name !== "voice" && audio && !audio.paused) audio.pause();
}
function openGift() {
  gift.classList.add("opening");
  showScreen("note");
}
gift.addEventListener("click", openGift);
startBtn.addEventListener("click", openGift);
document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});
envelope.addEventListener("click", () => {
  const opened = envelope.classList.toggle("open");
  secretPaper.classList.toggle("hidden", !opened);
  afterSecret.classList.toggle("hidden", !opened);
  document.getElementById("envelopeHint").textContent = opened ? "Your little secret ♡" : "Tap the envelope to open it";
});
document.getElementById("replayBtn").addEventListener("click", () => {
  envelope.classList.remove("open");
  secretPaper.classList.add("hidden");
  afterSecret.classList.add("hidden");
  showScreen("home");
});
function checkMedia() {
  const videoSource = video.querySelector("source").getAttribute("src");
  videoPlaceholder.style.display = videoSource ? "none" : "block";
  video.addEventListener("error", () => { videoPlaceholder.style.display = "block"; }, {once:true});
  audio.addEventListener("error", () => { audioPlaceholder.textContent = "Add your recording at assets/media/voice-note.mp3"; }, {once:true});
}
checkMedia();
