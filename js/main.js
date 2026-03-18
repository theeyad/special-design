// Start Scroll To Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (scrollY >= 400) {
    scrollTop.classList.add("appear");
  } else {
    scrollTop.classList.remove("appear");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// End Scroll To Top

// changing Backgrounds
let bgChange = true;
// background interval
let changing;

// Start Local Storage
if (localStorage.getItem("colors")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colors"),
  );

  document.querySelectorAll(".colors li").forEach((li) => {
    if (li.dataset.color === localStorage.getItem("colors")) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
}

if (localStorage.getItem("changingBg")) {
  localStorage.getItem("changingBg") === "apply"
    ? (bgChange = true)
    : (bgChange = false);

  document.querySelectorAll(".random-bg-btns span").forEach((span) => {
    span.classList.remove("active");

    if (span.dataset.randomBgs === localStorage.getItem("changingBg")) {
      span.classList.add("active");
    }
  });
}
// End Local Storage

// Start Settings Box
let settingBox = document.querySelector(".setting-box");
let settingToggle = document.querySelector(".toggle-setting");
let settingToggleIcon = document.querySelector(".toggle-setting .gear");

//// opens/colses settings box and spin/unspin gear icon when clicking on gear icon
settingToggle.addEventListener("click", function (e) {
  settingBox.classList.toggle("open");
  settingToggleIcon.classList.toggle("fa-spin");
});

//// opens/colses settings box and spin/unspin gear icon when clicking outside the settings box
document.addEventListener("click", function (e) {
  if (!settingBox.contains(e.target)) {
    settingBox.classList.remove("open");
    settingToggleIcon.classList.remove("fa-spin");
  }
});

//// active/unactive lis and setting color theme
const colorsLi = document.querySelectorAll(".colors li");
colorsLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    colorsLi.forEach((li) => {
      li.classList.remove("active");
    });

    e.target.classList.add("active");

    document.documentElement.style.setProperty(
      "--main-color",
      `${e.target.dataset.color}`,
    );

    localStorage.setItem("colors", e.target.dataset.color);
  });
});

//// active/unactive spans and controling background
const randomBgSpans = document.querySelectorAll(".random-bg-btns span");
randomBgSpans.forEach((span) => {
  span.addEventListener("click", function (e) {
    randomBgSpans.forEach((span) => {
      span.classList.remove("active");
    });

    e.target.classList.add("active");

    localStorage.setItem("changingBg", e.target.dataset.randomBgs);

    if (e.target.dataset.randomBgs === "apply") {
      bgChange = true;
      changingBg();
    } else {
      bgChange = false;
      clearInterval(changing);
    }
  });
});

// End Settings Box

// Start Making Landing Page BackgroundImage Change Every Five Seconds
let landingPage = document.querySelector(".landing");

let imgsArr = [
  "landing-img_0.jpg",
  "landing-img_1.jpg",
  "landing-img_2.jpg",
  "landing-img_3.jpg",
  "landing-img_4.jpg",
  "landing-img_5.jpg",
  "landing-img_6.jpg",
];

let landingNum = 0;

function changingBg() {
  clearInterval(changing);
  if (bgChange === true) {
    changing = setInterval(() => {
      landingNum >= imgsArr.length - 1 ? (landingNum = 0) : landingNum++;
      landingPage.style.backgroundImage = `url(./images/landing-img_${landingNum}.jpg)`;
    }, 5000);
  }
}

changingBg();
// End Making Landing Page BackgroundImage Change Every Five Seconds
