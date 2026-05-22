// ====================================
// SECRET SYSTEM
// ====================================

console.log("Secret System Loaded 🔒");

// SECRET PASSWORD

const secretPassword =
  "roseandlampy";

// CHECK PASSWORD

function openSecret() {

  const userPassword =
    prompt("Enter Secret Password ❤️");

  if (userPassword === secretPassword) {

    alert(
      "Welcome to the Private Universe 💖"
    );

  } else {

    alert(
      "Wrong Password ❌"
    );

  }

}

// PRESS S FOR SECRET

document.addEventListener("keydown", (e) => {

  if (e.key === "s") {

    openSecret();

  }

});
