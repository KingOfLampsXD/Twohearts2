// ====================================
// DASHBOARD SYSTEM
// ====================================

console.log("Dashboard Loaded ❤️");

// LOVE STATS

const stats = {

  visits: 0,

  heartsClicked: 0,

  memoriesSaved: 0

};

// UPDATE VISITS

stats.visits++;

console.log(
  `Visits: ${stats.visits}`
);

// DASHBOARD MESSAGE

function showDashboardMessage() {

  console.log(
    "Welcome to Rose & Lampy Dashboard ✨"
  );

}

showDashboardMessage();
