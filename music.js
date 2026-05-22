// ====================================
// MUSIC SYSTEM
// ====================================

console.log("Music System Loaded 🎵");

// SONG LIST

const songs = [

  "Romantic Song 🎵",

  "Lofi Night 🌙",

  "Love Playlist 💖"

];

// SHOW SONG

function showSong() {

  const song =
    songs[
      Math.floor(
        Math.random() * songs.length
      )
    ];

  alert(`Now Playing: ${song}`);

}

// PRESS P TO PLAY

document.addEventListener("keydown", (e) => {

  if (e.key === "p") {

    showSong();

  }

});
