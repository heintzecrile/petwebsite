//--------- CAROUSEL SLIDER BUTTONS ---------//

var responsiveSlider = function () {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};

window.onload = function () {
  responsiveSlider();
};

//--x------ CAROUSEL SLIDER BUTTONS ------x--//

// ---------- TYPEWRITER ANIMATION ---------- //
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "5 Days 4 Nights";
  }, 0);
  setTimeout(() => {
    text.textContent = "4 Days 3 Nights";
  }, 2050);
  setTimeout(() => {
    text.textContent = "3 Days 2 Nights";
  }, 4000);
};

textLoad();
setInterval(textLoad, 6000);
// --x------- TYPEWRITER ANIMATION -------x-- //

// ----------- CURRENCY CONTAINER ----------- //
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn-exchange");
const input = document.getElementById("num");
const result = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value = "${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = input.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Please Choose Different Currencies!");
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      result.value = Object.values(val.rates)[0];
    });
}

// --x-------- CURRENCY CONTAINER --------x-- //

// STICKY NAVIGATION

const sectionItinerary = document.querySelector(".section-itinerary");

const obser = new IntersectionObserver(
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
obser.observe(sectionItinerary);
