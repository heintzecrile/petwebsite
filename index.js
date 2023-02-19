// ------- Search Bar Animation ------- //

const trigger_search = document.querySelector(".trigger_search");
const input = document.querySelector(".input");

trigger_search.addEventListener("click", () => {
  if (!input.classList.contains("input-open")) {
    input.classList.add("input-open");
    trigger_search.innerHTML = "<i class='fas fa-search'></i>";
  } else {
    input.classList.close("input-open");
    trigger_search.innerHTML = "<i class='fas fa-search'></i>";
  }
});
// --x---- Search Bar Animation ----x-- //

// ------- Search Bar Input Text ------- //
document.getElementById("search-btn").addEventListener("click", function () {
  const searchvalue = document.getElementById("search-box").value;
  console.log(searchvalue);
  if (searchvalue === "Singapore" || searchvalue === "singapore") {
    window.location.href = "destination.html";
  } else if (searchvalue === "Itinerary" || searchvalue === "itinerary") {
    window.location.href = "itinerary.html";
  } else {
    console.log("#");
  }
});

// --x---- Search Bar Input Text ----x-- //

// ----------- Sticky Navbar ----------- //

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// ---x------- Sticky Navbar -------x--- //
