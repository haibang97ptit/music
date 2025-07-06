    // Danh sách các bài hát
const songs = [
    "nang.mp3",
    "thap-drill-tu-do.mp3",
    "thap-roi-tu-do.mp3",
    "say-yes.mp3",
    "wrong-time.mp3",
    "anh-la-ai.mp3",
    "sau-con-mua.mp3",
    "cuoi-cung-thi.mp3",
    "dong-phai-mo-dang-ai.mp3",
    "mai-mai-khong-phai-anh.mp3",
    "nang-co-mang-em-ve.mp3",
    "thuong-em-la-dieu-anh-ko-the-ngo.mp3",
    "3107.mp3",
    "3107-2.mp3",
    "no-nhau-1-loi.mp3",
    "ke-theo-duoi-anh-sang.mp3",
    "luu-luyen-sau-chia-tay.mp3",
    "nhu-a-da-tim-thay-e.mp3"
];

const musicFolder = "list/";
const audioPlayer = document.getElementById("audioPlayer");
const playlist = document.getElementById("playlist");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSongIndex = 0;

// Tạo danh sách bài hát
songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `Bài ${index + 1}: ${song}`;
    li.dataset.index = index;
    if (index === 0) li.classList.add("active");
    li.addEventListener("click", () => playSong(index));
    playlist.appendChild(li);
});

// Phát bài hát
function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = musicFolder + songs[index];
    audioPlayer.play();
    updateActiveSong();
}

// Cập nhật bài hát đang phát
function updateActiveSong() {
    const items = playlist.querySelectorAll("li");
    items.forEach((item) => item.classList.remove("active"));
    items[currentSongIndex].classList.add("active");
}

// Phát bài tiếp theo
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

// Phát bài trước đó
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

// Chuyển bài tự động
audioPlayer.addEventListener("ended", nextSong);

// Gắn sự kiện vào nút điều khiển
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Phát bài đầu tiên
playSong(0);
